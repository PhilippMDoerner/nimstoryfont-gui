/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.dev/license
 */
import * as html from './ast';
import { NGSP_UNICODE } from './entities';
import { ParseTreeResult } from './parser';
export const PRESERVE_WS_ATTR_NAME = 'ngPreserveWhitespaces';
const SKIP_WS_TRIM_TAGS = new Set(['pre', 'template', 'textarea', 'script', 'style']);
// Equivalent to \s with \u00a0 (non-breaking space) excluded.
// Based on https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp
const WS_CHARS = ' \f\n\r\t\v\u1680\u180e\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff';
const NO_WS_REGEXP = new RegExp(`[^${WS_CHARS}]`);
const WS_REPLACE_REGEXP = new RegExp(`[${WS_CHARS}]{2,}`, 'g');
function hasPreserveWhitespacesAttr(attrs) {
    return attrs.some((attr) => attr.name === PRESERVE_WS_ATTR_NAME);
}
/**
 * &ngsp; is a placeholder for non-removable space
 * &ngsp; is converted to the 0xE500 PUA (Private Use Areas) unicode character
 * and later on replaced by a space.
 */
export function replaceNgsp(value) {
    // lexer is replacing the &ngsp; pseudo-entity with NGSP_UNICODE
    return value.replace(new RegExp(NGSP_UNICODE, 'g'), ' ');
}
/**
 * This visitor can walk HTML parse tree and remove / trim text nodes using the following rules:
 * - consider spaces, tabs and new lines as whitespace characters;
 * - drop text nodes consisting of whitespace characters only;
 * - for all other text nodes replace consecutive whitespace characters with one space;
 * - convert &ngsp; pseudo-entity to a single space;
 *
 * Removal and trimming of whitespaces have positive performance impact (less code to generate
 * while compiling templates, faster view creation). At the same time it can be "destructive"
 * in some cases (whitespaces can influence layout). Because of the potential of breaking layout
 * this visitor is not activated by default in Angular 5 and people need to explicitly opt-in for
 * whitespace removal. The default option for whitespace removal will be revisited in Angular 6
 * and might be changed to "on" by default.
 *
 * If `originalNodeMap` is provided, the transformed nodes will be mapped back to their original
 * inputs. Any output nodes not in the map were not transformed. This supports correlating and
 * porting information between the trimmed nodes and original nodes (such as `i18n` properties)
 * such that trimming whitespace does not does not drop required information from the node.
 */
export class WhitespaceVisitor {
    constructor(preserveSignificantWhitespace, originalNodeMap, requireContext = true) {
        this.preserveSignificantWhitespace = preserveSignificantWhitespace;
        this.originalNodeMap = originalNodeMap;
        this.requireContext = requireContext;
        // How many ICU expansions which are currently being visited. ICUs can be nested, so this
        // tracks the current depth of nesting. If this depth is greater than 0, then this visitor is
        // currently processing content inside an ICU expansion.
        this.icuExpansionDepth = 0;
    }
    visitElement(element, context) {
        if (SKIP_WS_TRIM_TAGS.has(element.name) || hasPreserveWhitespacesAttr(element.attrs)) {
            // don't descent into elements where we need to preserve whitespaces
            // but still visit all attributes to eliminate one used as a market to preserve WS
            const newElement = new html.Element(element.name, visitAllWithSiblings(this, element.attrs), element.children, element.sourceSpan, element.startSourceSpan, element.endSourceSpan, element.i18n);
            this.originalNodeMap?.set(newElement, element);
            return newElement;
        }
        const newElement = new html.Element(element.name, element.attrs, visitAllWithSiblings(this, element.children), element.sourceSpan, element.startSourceSpan, element.endSourceSpan, element.i18n);
        this.originalNodeMap?.set(newElement, element);
        return newElement;
    }
    visitAttribute(attribute, context) {
        return attribute.name !== PRESERVE_WS_ATTR_NAME ? attribute : null;
    }
    visitText(text, context) {
        const isNotBlank = text.value.match(NO_WS_REGEXP);
        const hasExpansionSibling = context && (context.prev instanceof html.Expansion || context.next instanceof html.Expansion);
        // Do not trim whitespace within ICU expansions when preserving significant whitespace.
        // Historically, ICU whitespace was never trimmed and this is really a bug. However fixing it
        // would change message IDs which we can't easily do. Instead we only trim ICU whitespace within
        // ICU expansions when not preserving significant whitespace, which is the new behavior where it
        // most matters.
        const inIcuExpansion = this.icuExpansionDepth > 0;
        if (inIcuExpansion && this.preserveSignificantWhitespace)
            return text;
        if (isNotBlank || hasExpansionSibling) {
            // Process the whitespace in the tokens of this Text node
            const tokens = text.tokens.map((token) => token.type === 5 /* TokenType.TEXT */ ? createWhitespaceProcessedTextToken(token) : token);
            // Fully trim message when significant whitespace is not preserved.
            if (!this.preserveSignificantWhitespace && tokens.length > 0) {
                // The first token should only call `.trimStart()` and the last token
                // should only call `.trimEnd()`, but there might be only one token which
                // needs to call both.
                const firstToken = tokens[0];
                tokens.splice(0, 1, trimLeadingWhitespace(firstToken, context));
                const lastToken = tokens[tokens.length - 1]; // Could be the same as the first token.
                tokens.splice(tokens.length - 1, 1, trimTrailingWhitespace(lastToken, context));
            }
            // Process the whitespace of the value of this Text node. Also trim the leading/trailing
            // whitespace when we don't need to preserve significant whitespace.
            const processed = processWhitespace(text.value);
            const value = this.preserveSignificantWhitespace
                ? processed
                : trimLeadingAndTrailingWhitespace(processed, context);
            const result = new html.Text(value, text.sourceSpan, tokens, text.i18n);
            this.originalNodeMap?.set(result, text);
            return result;
        }
        return null;
    }
    visitComment(comment, context) {
        return comment;
    }
    visitExpansion(expansion, context) {
        this.icuExpansionDepth++;
        let newExpansion;
        try {
            newExpansion = new html.Expansion(expansion.switchValue, expansion.type, visitAllWithSiblings(this, expansion.cases), expansion.sourceSpan, expansion.switchValueSourceSpan, expansion.i18n);
        }
        finally {
            this.icuExpansionDepth--;
        }
        this.originalNodeMap?.set(newExpansion, expansion);
        return newExpansion;
    }
    visitExpansionCase(expansionCase, context) {
        const newExpansionCase = new html.ExpansionCase(expansionCase.value, visitAllWithSiblings(this, expansionCase.expression), expansionCase.sourceSpan, expansionCase.valueSourceSpan, expansionCase.expSourceSpan);
        this.originalNodeMap?.set(newExpansionCase, expansionCase);
        return newExpansionCase;
    }
    visitBlock(block, context) {
        const newBlock = new html.Block(block.name, block.parameters, visitAllWithSiblings(this, block.children), block.sourceSpan, block.nameSpan, block.startSourceSpan, block.endSourceSpan);
        this.originalNodeMap?.set(newBlock, block);
        return newBlock;
    }
    visitBlockParameter(parameter, context) {
        return parameter;
    }
    visitLetDeclaration(decl, context) {
        return decl;
    }
    visit(_node, context) {
        // `visitAllWithSiblings` provides context necessary for ICU messages to be handled correctly.
        // Prefer that over calling `html.visitAll` directly on this visitor.
        if (this.requireContext && !context) {
            throw new Error(`WhitespaceVisitor requires context. Visit via \`visitAllWithSiblings\` to get this context.`);
        }
        return false;
    }
}
function trimLeadingWhitespace(token, context) {
    if (token.type !== 5 /* TokenType.TEXT */)
        return token;
    const isFirstTokenInTag = !context?.prev;
    if (!isFirstTokenInTag)
        return token;
    return transformTextToken(token, (text) => text.trimStart());
}
function trimTrailingWhitespace(token, context) {
    if (token.type !== 5 /* TokenType.TEXT */)
        return token;
    const isLastTokenInTag = !context?.next;
    if (!isLastTokenInTag)
        return token;
    return transformTextToken(token, (text) => text.trimEnd());
}
function trimLeadingAndTrailingWhitespace(text, context) {
    const isFirstTokenInTag = !context?.prev;
    const isLastTokenInTag = !context?.next;
    const maybeTrimmedStart = isFirstTokenInTag ? text.trimStart() : text;
    const maybeTrimmed = isLastTokenInTag ? maybeTrimmedStart.trimEnd() : maybeTrimmedStart;
    return maybeTrimmed;
}
function createWhitespaceProcessedTextToken({ type, parts, sourceSpan }) {
    return { type, parts: [processWhitespace(parts[0])], sourceSpan };
}
function transformTextToken({ type, parts, sourceSpan }, transform) {
    // `TextToken` only ever has one part as defined in its type, so we just transform the first element.
    return { type, parts: [transform(parts[0])], sourceSpan };
}
function processWhitespace(text) {
    return replaceNgsp(text).replace(WS_REPLACE_REGEXP, ' ');
}
export function removeWhitespaces(htmlAstWithErrors, preserveSignificantWhitespace) {
    return new ParseTreeResult(visitAllWithSiblings(new WhitespaceVisitor(preserveSignificantWhitespace), htmlAstWithErrors.rootNodes), htmlAstWithErrors.errors);
}
export function visitAllWithSiblings(visitor, nodes) {
    const result = [];
    nodes.forEach((ast, i) => {
        const context = { prev: nodes[i - 1], next: nodes[i + 1] };
        const astResult = ast.visit(visitor, context);
        if (astResult) {
            result.push(astResult);
        }
    });
    return result;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHRtbF93aGl0ZXNwYWNlcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2NvbXBpbGVyL3NyYy9tbF9wYXJzZXIvaHRtbF93aGl0ZXNwYWNlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7QUFFSCxPQUFPLEtBQUssSUFBSSxNQUFNLE9BQU8sQ0FBQztBQUM5QixPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0sWUFBWSxDQUFDO0FBQ3hDLE9BQU8sRUFBQyxlQUFlLEVBQUMsTUFBTSxVQUFVLENBQUM7QUFHekMsTUFBTSxDQUFDLE1BQU0scUJBQXFCLEdBQUcsdUJBQXVCLENBQUM7QUFFN0QsTUFBTSxpQkFBaUIsR0FBRyxJQUFJLEdBQUcsQ0FBQyxDQUFDLEtBQUssRUFBRSxVQUFVLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDO0FBRXRGLDhEQUE4RDtBQUM5RCxtR0FBbUc7QUFDbkcsTUFBTSxRQUFRLEdBQUcsMEVBQTBFLENBQUM7QUFDNUYsTUFBTSxZQUFZLEdBQUcsSUFBSSxNQUFNLENBQUMsS0FBSyxRQUFRLEdBQUcsQ0FBQyxDQUFDO0FBQ2xELE1BQU0saUJBQWlCLEdBQUcsSUFBSSxNQUFNLENBQUMsSUFBSSxRQUFRLE9BQU8sRUFBRSxHQUFHLENBQUMsQ0FBQztBQUUvRCxTQUFTLDBCQUEwQixDQUFDLEtBQXVCO0lBQ3pELE9BQU8sS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQW9CLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLEtBQUsscUJBQXFCLENBQUMsQ0FBQztBQUNuRixDQUFDO0FBRUQ7Ozs7R0FJRztBQUNILE1BQU0sVUFBVSxXQUFXLENBQUMsS0FBYTtJQUN2QyxnRUFBZ0U7SUFDaEUsT0FBTyxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksTUFBTSxDQUFDLFlBQVksRUFBRSxHQUFHLENBQUMsRUFB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b29nbGUgTExDIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmRldi9saWNlbnNlXG4gKi9cblxuaW1wb3J0ICogYXMgaHRtbCBmcm9tICcuL2FzdCc7XG5pbXBvcnQge05HU1BfVU5JQ09ERX0gZnJvbSAnLi9lbnRpdGllcyc7XG5pbXBvcnQge1BhcnNlVHJlZVJlc3VsdH0gZnJvbSAnLi9wYXJzZXInO1xuaW1wb3J0IHtJbnRlcnBvbGF0ZWRUZXh0VG9rZW4sIFRleHRUb2tlbiwgVG9rZW5UeXBlfSBmcm9tICcuL3Rva2Vucyc7XG5cbmV4cG9ydCBjb25zdCBQUkVTRVJWRV9XU19BVFRSX05BTUUgPSAnbmdQcmVzZXJ2ZVdoaXRlc3BhY2VzJztcblxuY29uc3QgU0tJUF9XU19UUklNX1RBR1MgPSBuZXcgU2V0KFsncHJlJywgJ3RlbXBsYXRlJywgJ3RleHRhcmVhJywgJ3NjcmlwdCcsICdzdHlsZSddKTtcblxuLy8gRXF1aXZhbGVudCB0byBcXHMgd2l0aCBcXHUwMGEwIChub24tYnJlYWtpbmcgc3BhY2UpIGV4Y2x1ZGVkLlxuLy8gQmFzZWQgb24gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSmF2YVNjcmlwdC9SZWZlcmVuY2UvR2xvYmFsX09iamVjdHMvUmVnRXhwXG5jb25zdCBXU19DSEFSUyA9ICcgXFxmXFxuXFxyXFx0XFx2XFx1MTY4MFxcdTE4MGVcXHUyMDAwLVxcdTIwMGFcXHUyMDI4XFx1MjAyOVxcdTIwMmZcXHUyMDVmXFx1MzAwMFxcdWZlZmYnO1xuY29uc3QgTk9fV1NfUkVHRVhQID0gbmV3IFJlZ0V4cChgW14ke1dTX0NIQVJTfV1gKTtcbmNvbnN0IFdTX1JFUExBQ0VfUkVHRVhQID0gbmV3IFJlZ0V4cChgWyR7V1NfQ0hBUlN9XXsyLH1gLCAnZycpO1xuXG5mdW5jdGlvbiBoYXNQcmVzZXJ2ZVdoaXRlc3BhY2VzQXR0cihhdHRyczogaHRtbC5BdHRyaWJ1dGVbXSk6IGJvb2xlYW4ge1xuICByZXR1cm4gYXR0cnMuc29tZSgoYXR0cjogaHRtbC5BdHRyaWJ1dGUpID0+IGF0dHIubmFtZSA9PT0gUFJFU0VSVkVfV1NfQVRUUl9OQU1FKTtcbn1cblxuLyoqXG4gKiAmbmdzcDsgaXMgYSBwbGFjZWhvbGRlciBmb3Igbm9uLXJlbW92YWJsZSBzcGFjZVxuICogJm5nc3A7IGlzIGNvbnZlcnRlZCB0byB0aGUgMHhFNTAwIFBVQSAoUHJpdmF0ZSBVc2UgQXJlYXMpIHVuaWNvZGUgY2hhcmFjdGVyXG4gKiBhbmQgbGF0ZXIgb24gcmVwbGFjZWQgYnkgYSBzcGFjZS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlcGxhY2VOZ3NwKHZhbHVlOiBzdHJpbmcpOiBzdHJpbmcge1xuICAvLyBsZXhlciBpcyByZXBsYWNpbmcgdGhlICZuZ3NwOyBwc2V1ZG8tZW50aXR5IHdpdGggTkdTUF9VTklDT0RFXG4gIHJldHVybiB2YWx1ZS5yZXBsYWNlKG5ldyBSZWdFeHAoTkdTUF9VTklDT0RFLCAnZycpLCAnICcpO1xufVxuXG4vKipcbiAqIFRoaXMgdmlzaXRvciBjYW4gd2FsayBIVE1MIHBhcnNlIHRyZWUgYW5kIHJlbW92ZSAvIHRyaW0gdGV4dCBub2RlcyB1c2luZyB0aGUgZm9sbG93aW5nIHJ1bGVzOlxuICogLSBjb25zaWRlciBzcGFjZXMsIHRhYnMgYW5kIG5ldyBsaW5lcyBhcyB3aGl0ZXNwYWNlIGNoYXJhY3RlcnM7XG4gKiAtIGRyb3AgdGV4dCBub2RlcyBjb25zaXN0aW5nIG9mIHdoaXRlc3BhY2UgY2hhcmFjdGVycyBvbmx5O1xuICogLSBmb3IgYWxsIG90aGVyIHRleHQgbm9kZXMgcmVwbGFjZSBjb25zZWN1dGl2ZSB3aGl0ZXNwYWNlIGNoYXJhY3RlcnMgd2l0aCBvbmUgc3BhY2U7XG4gKiAtIGNvbnZlcnQgJm5nc3A7IHBzZXVkby1lbnRpdHkgdG8gYSBzaW5nbGUgc3BhY2U7XG4gKlxuICogUmVtb3ZhbCBhbmQgdHJpbW1pbmcgb2Ygd2hpdGVzcGFjZXMgaGF2ZSBwb3NpdGl2ZSBwZXJmb3JtYW5jZSBpbXBhY3QgKGxlc3MgY29kZSB0byBnZW5lcmF0ZVxuICogd2hpbGUgY29tcGlsaW5nIHRlbXBsYXRlcywgZmFzdGVyIHZpZXcgY3JlYXRpb24pLiBBdCB0aGUgc2FtZSB0aW1lIGl0IGNhbiBiZSBcImRlc3RydWN0aXZlXCJcbiAqIGluIHNvbWUgY2FzZXMgKHdoaXRlc3BhY2VzIGNhbiBpbmZsdWVuY2UgbGF5b3V0KS4gQmVjYXVzZSBvZiB0aGUgcG90ZW50aWFsIG9mIGJyZWFraW5nIGxheW91dFxuICogdGhpcyB2aXNpdG9yIGlzIG5vdCBhY3RpdmF0ZWQgYnkgZGVmYXVsdCBpbiBBbmd1bGFyIDUgYW5kIHBlb3BsZSBuZWVkIHRvIGV4cGxpY2l0bHkgb3B0LWluIGZvclxuICogd2hpdGVzcGFjZSByZW1vdmFsLiBUaGUgZGVmYXVsdCBvcHRpb24gZm9yIHdoaXRlc3BhY2UgcmVtb3ZhbCB3aWxsIGJlIHJldmlzaXRlZCBpbiBBbmd1bGFyIDZcbiAqIGFuZCBtaWdodCBiZSBjaGFuZ2VkIHRvIFwib25cIiBieSBkZWZhdWx0LlxuICpcbiAqIElmIGBvcmlnaW5hbE5vZGVNYXBgIGlzIHByb3ZpZGVkLCB0aGUgdHJhbnNmb3JtZWQgbm9kZXMgd2lsbCBiZSBtYXBwZWQgYmFjayB0byB0aGVpciBvcmlnaW5hbFxuICogaW5wdXRzLiBBbnkgb3V0cHV0IG5vZGVzIG5vdCBpbiB0aGUgbWFwIHdlcmUgbm90IHRyYW5zZm9ybWVkLiBUaGlzIHN1cHBvcnRzIGNvcnJlbGF0aW5nIGFuZFxuICogcG9ydGluZyBpbmZvcm1hdGlvbiBiZXR3ZWVuIHRoZSB0cmltbWVkIG5vZGVzIGFuZCBvcmlnaW5hbCBub2RlcyAoc3VjaCBhcyBgaTE4bmAgcHJvcGVydGllcylcbiAqIHN1Y2ggdGhhdCB0cmltbWluZyB3aGl0ZXNwYWNlIGRvZXMgbm90IGRvZXMgbm90IGRyb3AgcmVxdWlyZWQgaW5mb3JtYXRpb24gZnJvbSB0aGUgbm9kZS5cbiAqL1xuZXhwb3J0IGNsYXNzIFdoaXRlc3BhY2VWaXNpdG9yIGltcGxlbWVudHMgaHRtbC5WaXNpdG9yIHtcbiAgLy8gSG93IG1hbnkgSUNVIGV4cGFuc2lvbnMgd2hpY2ggYXJlIGN1cnJlbnRseSBiZWluZyB2aXNpdGVkLiBJQ1VzIGNhbiBiZSBuZXN0ZWQsIHNvIHRoaXNcbiAgLy8gdHJhY2tzIHRoZSBjdXJyZW50IGRlcHRoIG9mIG5lc3RpbmcuIElmIHRoaXMgZGVwdGggaXMgZ3JlYXRlciB0aGFuIDAsIHRoZW4gdGhpcyB2aXNpdG9yIGlzXG4gIC8vIGN1cnJlbnRseSBwcm9jZXNzaW5nIGNvbnRlbnQgaW5zaWRlIGFuIElDVSBleHBhbnNpb24uXG4gIHByaXZhdGUgaWN1RXhwYW5zaW9uRGVwdGggPSAwO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgcmVhZG9ubHkgcHJlc2VydmVTaWduaWZpY2FudFdoaXRlc3BhY2U6IGJvb2xlYW4sXG4gICAgcHJpdmF0ZSByZWFkb25seSBvcmlnaW5hbE5vZGVNYXA/OiBNYXA8aHRtbC5Ob2RlLCBodG1sLk5vZGU+LFxuICAgIHByaXZhdGUgcmVhZG9ubHkgcmVxdWlyZUNvbnRleHQgPSB0cnVlLFxuICApIHt9XG5cbiAgdmlzaXRFbGVtZW50KGVsZW1lbnQ6IGh0bWwuRWxlbWVudCwgY29udGV4dDogYW55KTogYW55IHtcbiAgICBpZiAoU0tJUF9XU19UUklNX1RBR1MuaGFzKGVsZW1lbnQubmFtZSkgfHwgaGFzUHJlc2VydmVXaGl0ZXNwYWNlc0F0dHIoZWxlbWVudC5hdHRycykpIHtcbiAgICAgIC8vIGRvbid0IGRlc2NlbnQgaW50byBlbGVtZW50cyB3aGVyZSB3ZSBuZWVkIHRvIHByZXNlcnZlIHdoaXRlc3BhY2VzXG4gICAgICAvLyBidXQgc3RpbGwgdmlzaXQgYWxsIGF0dHJpYnV0ZXMgdG8gZWxpbWluYXRlIG9uZSB1c2VkIGFzIGEgbWFya2V0IHRvIHByZXNlcnZlIFdTXG4gICAgICBjb25zdCBuZXdFbGVtZW50ID0gbmV3IGh0bWwuRWxlbWVudChcbiAgICAgICAgZWxlbWVudC5uYW1lLFxuICAgICAgICB2aXNpdEFsbFdpdGhTaWJsaW5ncyh0aGlzLCBlbGVtZW50LmF0dHJzKSxcbiAgICAgICAgZWxlbWVudC5jaGlsZHJlbixcbiAgICAgICAgZWxlbWVudC5zb3VyY2VTcGFuLFxuICAgICAgICBlbGVtZW50LnN0YXJ0U291cmNlU3BhbixcbiAgICAgICAgZWxlbWVudC5lbmRTb3VyY2VTcGFuLFxuICAgICAgICBlbGVtZW50LmkxOG4sXG4gICAgICApO1xuICAgICAgdGhpcy5vcmlnaW5hbE5vZGVNYXA/LnNldChuZXdFbGVtZW50LCBlbGVtZW50KTtcbiAgICAgIHJldHVybiBuZXdFbGVtZW50O1xuICAgIH1cblxuICAgIGNvbnN0IG5ld0VsZW1lbnQgPSBuZXcgaHRtbC5FbGVtZW50KFxuICAgICAgZWxlbWVudC5uYW1lLFxuICAgICAgZWxlbWVudC5hdHRycyxcbiAgICAgIHZpc2l0QWxsV2l0aFNpYmxpbmdzKHRoaXMsIGVsZW1lbnQuY2hpbGRyZW4pLFxuICAgICAgZWxlbWVudC5zb3VyY2VTcGFuLFxuICAgICAgZWxlbWVudC5zdGFydFNvdXJjZVNwYW4sXG4gICAgICBlbGVtZW50LmVuZFNvdXJjZVNwYW4sXG4gICAgICBlbGVtZW50LmkxOG4sXG4gICAgKTtcbiAgICB0aGlzLm9yaWdpbmFsTm9kZU1hcD8uc2V0KG5ld0VsZW1lbnQsIGVsZW1lbnQpO1xuICAgIHJldHVybiBuZXdFbGVtZW50O1xuICB9XG5cbiAgdmlzaXRBdHRyaWJ1dGUoYXR0cmlidXRlOiBodG1sLkF0dHJpYnV0ZSwgY29udGV4dDogYW55KTogYW55IHtcbiAgICByZXR1cm4gYXR0cmlidXRlLm5hbWUgIT09IFBSRVNFUlZFX1dTX0FUVFJfTkFNRSA/IGF0dHJpYnV0ZSA6IG51bGw7XG4gIH1cblxuICB2aXNpdFRleHQodGV4dDogaHRtbC5UZXh0LCBjb250ZXh0OiBTaWJsaW5nVmlzaXRvckNvbnRleHQgfCBudWxsKTogYW55IHtcbiAgICBjb25zdCBpc05vdEJsYW5rID0gdGV4dC52YWx1ZS5tYXRjaChOT19XU19SRUdFWFApO1xuICAgIGNvbnN0IGhhc0V4cGFuc2lvblNpYmxpbmcgPVxuICAgICAgY29udGV4dCAmJiAoY29udGV4dC5wcmV2IGluc3RhbmNlb2YgaHRtbC5FeHBhbnNpb24gfHwgY29udGV4dC5uZXh0IGluc3RhbmNlb2YgaHRtbC5FeHBhbnNpb24pO1xuXG4gICAgLy8gRG8gbm90IHRyaW0gd2hpdGVzcGFjZSB3aXRoaW4gSUNVIGV4cGFuc2lvbnMgd2hlbiBwcmVzZXJ2aW5nIHNpZ25pZmljYW50IHdoaXRlc3BhY2UuXG4gICAgLy8gSGlzdG9yaWNhbGx5LCBJQ1Ugd2hpdGVzcGFjZSB3YXMgbmV2ZXIgdHJpbW1lZCBhbmQgdGhpcyBpcyByZWFsbHkgYSBidWcuIEhvd2V2ZXIgZml4aW5nIGl0XG4gICAgLy8gd291bGQgY2hhbmdlIG1lc3NhZ2UgSURzIHdoaWNoIHdlIGNhbid0IGVhc2lseSBkby4gSW5zdGVhZCB3ZSBvbmx5IHRyaW0gSUNVIHdoaXRlc3BhY2Ugd2l0aGluXG4gICAgLy8gSUNVIGV4cGFuc2lvbnMgd2hlbiBub3QgcHJlc2VydmluZyBzaWduaWZpY2FudCB3aGl0ZXNwYWNlLCB3aGljaCBpcyB0aGUgbmV3IGJlaGF2aW9yIHdoZXJlIGl0XG4gICAgLy8gbW9zdCBtYXR0ZXJzLlxuICAgIGNvbnN0IGluSWN1RXhwYW5zaW9uID0gdGhpcy5pY3VFeHBhbnNpb25EZXB0aCA+IDA7XG4gICAgaWYgKGluSWN1RXhwYW5zaW9uICYmIHRoaXMucHJlc2VydmVTaWduaWZpY2FudFdoaXRlc3BhY2UpIHJldHVybiB0ZXh0O1xuXG4gICAgaWYgKGlzTm90QmxhbmsgfHwgaGFzRXhwYW5zaW9uU2libGluZykge1xuICAgICAgLy8gUHJvY2VzcyB0aGUgd2hpdGVzcGFjZSBpbiB0aGUgdG9rZW5zIG9mIHRoaXMgVGV4dCBub2RlXG4gICAgICBjb25zdCB0b2tlbnMgPSB0ZXh0LnRva2Vucy5tYXAoKHRva2VuKSA9PlxuICAgICAgICB0b2tlbi50eXBlID09PSBUb2tlblR5cGUuVEVYVCA/IGNyZWF0ZVdoaXRlc3BhY2VQcm9jZXNzZWRUZXh0VG9rZW4odG9rZW4pIDogdG9rZW4sXG4gICAgICApO1xuXG4gICAgICAvLyBGdWxseSB0cmltIG1lc3NhZ2Ugd2hlbiBzaWduaWZpY2FudCB3aGl0ZXNwYWNlIGlzIG5vdCBwcmVzZXJ2ZWQuXG4gICAgICBpZiAoIXRoaXMucHJlc2VydmVTaWduaWZpY2FudFdoaXRlc3BhY2UgJiYgdG9rZW5zLmxlbmd0aCA+IDApIHtcbiAgICAgICAgLy8gVGhlIGZpcnN0IHRva2VuIHNob3VsZCBvbmx5IGNhbGwgYC50cmltU3RhcnQoKWAgYW5kIHRoZSBsYXN0IHRva2VuXG4gICAgICAgIC8vIHNob3VsZCBvbmx5IGNhbGwgYC50cmltRW5kKClgLCBidXQgdGhlcmUgbWlnaHQgYmUgb25seSBvbmUgdG9rZW4gd2hpY2hcbiAgICAgICAgLy8gbmVlZHMgdG8gY2FsbCBib3RoLlxuICAgICAgICBjb25zdCBmaXJzdFRva2VuID0gdG9rZW5zWzBdITtcbiAgICAgICAgdG9rZW5zLnNwbGljZSgwLCAxLCB0cmltTGVhZGluZ1doaXRlc3BhY2UoZmlyc3RUb2tlbiwgY29udGV4dCkpO1xuXG4gICAgICAgIGNvbnN0IGxhc3RUb2tlbiA9IHRva2Vuc1t0b2tlbnMubGVuZ3RoIC0gMV07IC8vIENvdWxkIGJlIHRoZSBzYW1lIGFzIHRoZSBmaXJzdCB0b2tlbi5cbiAgICAgICAgdG9rZW5zLnNwbGljZSh0b2tlbnMubGVuZ3RoIC0gMSwgMSwgdHJpbVRyYWlsaW5nV2hpdGVzcGFjZShsYXN0VG9rZW4sIGNvbnRleHQpKTtcbiAgICAgIH1cblxuICAgICAgLy8gUHJvY2VzcyB0aGUgd2hpdGVzcGFjZSBvZiB0aGUgdmFsdWUgb2YgdGhpcyBUZXh0IG5vZGUuIEFsc28gdHJpbSB0aGUgbGVhZGluZy90cmFpbGluZ1xuICAgICAgLy8gd2hpdGVzcGFjZSB3aGVuIHdlIGRvbid0IG5lZWQgdG8gcHJlc2VydmUgc2lnbmlmaWNhbnQgd2hpdGVzcGFjZS5cbiAgICAgIGNvbnN0IHByb2Nlc3NlZCA9IHByb2Nlc3NXaGl0ZXNwYWNlKHRleHQudmFsdWUpO1xuICAgICAgY29uc3QgdmFsdWUgPSB0aGlzLnByZXNlcnZlU2lnbmlmaWNhbnRXaGl0ZXNwYWNlXG4gICAgICAgID8gcHJvY2Vzc2VkXG4gICAgICAgIDogdHJpbUxlYWRpbmdBbmRUcmFpbGluZ1doaXRlc3BhY2UocHJvY2Vzc2VkLCBjb250ZXh0KTtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBodG1sLlRleHQodmFsdWUsIHRleHQuc291cmNlU3BhbiwgdG9rZW5zLCB0ZXh0LmkxOG4pO1xuICAgICAgdGhpcy5vcmlnaW5hbE5vZGVNYXA/LnNldChyZXN1bHQsIHRleHQpO1xuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHZpc2l0Q29tbWVudChjb21tZW50OiBodG1sLkNvbW1lbnQsIGNvbnRleHQ6IGFueSk6IGFueSB7XG4gICAgcmV0dXJuIGNvbW1lbnQ7XG4gIH1cblxuICB2aXNpdEV4cGFuc2lvbihleHBhbnNpb246IGh0bWwuRXhwYW5zaW9uLCBjb250ZXh0OiBhbnkpOiBhbnkge1xuICAgIHRoaXMuaWN1RXhwYW5zaW9uRGVwdGgrKztcbiAgICBsZXQgbmV3RXhwYW5zaW9uOiBodG1sLkV4cGFuc2lvbjtcbiAgICB0cnkge1xuICAgICAgbmV3RXhwYW5zaW9uID0gbmV3IGh0bWwuRXhwYW5zaW9uKFxuICAgICAgICBleHBhbnNpb24uc3dpdGNoVmFsdWUsXG4gICAgICAgIGV4cGFuc2lvbi50eXBlLFxuICAgICAgICB2aXNpdEFsbFdpdGhTaWJsaW5ncyh0aGlzLCBleHBhbnNpb24uY2FzZXMpLFxuICAgICAgICBleHBhbnNpb24uc291cmNlU3BhbixcbiAgICAgICAgZXhwYW5zaW9uLnN3aXRjaFZhbHVlU291cmNlU3BhbixcbiAgICAgICAgZXhwYW5zaW9uLmkxOG4sXG4gICAgICApO1xuICAgIH0gZmluYWxseSB7XG4gICAgICB0aGlzLmljdUV4cGFuc2lvbkRlcHRoLS07XG4gICAgfVxuXG4gICAgdGhpcy5vcmlnaW5hbE5vZGVNYXA/LnNldChuZXdFeHBhbnNpb24sIGV4cGFuc2lvbik7XG5cbiAgICByZXR1cm4gbmV3RXhwYW5zaW9uO1xuICB9XG5cbiAgdmlzaXRFeHBhbnNpb25DYXNlKGV4cGFuc2lvbkNhc2U6IGh0bWwuRXhwYW5zaW9uQ2FzZSwgY29udGV4dDogYW55KTogYW55IHtcbiAgICBjb25zdCBuZXdFeHBhbnNpb25DYXNlID0gbmV3IGh0bWwuRXhwYW5zaW9uQ2FzZShcbiAgICAgIGV4cGFuc2lvbkNhc2UudmFsdWUsXG4gICAgICB2aXNpdEFsbFdpdGhTaWJsaW5ncyh0aGlzLCBleHBhbnNpb25DYXNlLmV4cHJlc3Npb24pLFxuICAgICAgZXhwYW5zaW9uQ2FzZS5zb3VyY2VTcGFuLFxuICAgICAgZXhwYW5zaW9uQ2FzZS52YWx1ZVNvdXJjZVNwYW4sXG4gICAgICBleHBhbnNpb25DYXNlLmV4cFNvdXJjZVNwYW4sXG4gICAgKTtcbiAgICB0aGlzLm9yaWdpbmFsTm9kZU1hcD8uc2V0KG5ld0V4cGFuc2lvbkNhc2UsIGV4cGFuc2lvbkNhc2UpO1xuICAgIHJldHVybiBuZXdFeHBhbnNpb25DYXNlO1xuICB9XG5cbiAgdmlzaXRCbG9jayhibG9jazogaHRtbC5CbG9jaywgY29udGV4dDogYW55KTogYW55IHtcbiAgICBjb25zdCBuZXdCbG9jayA9IG5ldyBodG1sLkJsb2NrKFxuICAgICAgYmxvY2submFtZSxcbiAgICAgIGJsb2NrLnBhcmFtZXRlcnMsXG4gICAgICB2aXNpdEFsbFdpdGhTaWJsaW5ncyh0aGlzLCBibG9jay5jaGlsZHJlbiksXG4gICAgICBibG9jay5zb3VyY2VTcGFuLFxuICAgICAgYmxvY2submFtZVNwYW4sXG4gICAgICBibG9jay5zdGFydFNvdXJjZVNwYW4sXG4gICAgICBibG9jay5lbmRTb3VyY2VTcGFuLFxuICAgICk7XG4gICAgdGhpcy5vcmlnaW5hbE5vZGVNYXA/LnNldChuZXdCbG9jaywgYmxvY2spO1xuICAgIHJldHVybiBuZXdCbG9jaztcbiAgfVxuXG4gIHZpc2l0QmxvY2tQYXJhbWV0ZXIocGFyYW1ldGVyOiBodG1sLkJsb2NrUGFyYW1ldGVyLCBjb250ZXh0OiBhbnkpIHtcbiAgICByZXR1cm4gcGFyYW1ldGVyO1xuICB9XG5cbiAgdmlzaXRMZXREZWNsYXJhdGlvbihkZWNsOiBodG1sLkxldERlY2xhcmF0aW9uLCBjb250ZXh0OiBhbnkpIHtcbiAgICByZXR1cm4gZGVjbDtcbiAgfVxuXG4gIHZpc2l0KF9ub2RlOiBodG1sLk5vZGUsIGNvbnRleHQ6IGFueSkge1xuICAgIC8vIGB2aXNpdEFsbFdpdGhTaWJsaW5nc2AgcHJvdmlkZXMgY29udGV4dCBuZWNlc3NhcnkgZm9yIElDVSBtZXNzYWdlcyB0byBiZSBoYW5kbGVkIGNvcnJlY3RseS5cbiAgICAvLyBQcmVmZXIgdGhhdCBvdmVyIGNhbGxpbmcgYGh0bWwudmlzaXRBbGxgIGRpcmVjdGx5IG9uIHRoaXMgdmlzaXRvci5cbiAgICBpZiAodGhpcy5yZXF1aXJlQ29udGV4dCAmJiAhY29udGV4dCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBgV2hpdGVzcGFjZVZpc2l0b3IgcmVxdWlyZXMgY29udGV4dC4gVmlzaXQgdmlhIFxcYHZpc2l0QWxsV2l0aFNpYmxpbmdzXFxgIHRvIGdldCB0aGlzIGNvbnRleHQuYCxcbiAgICAgICk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59XG5cbmZ1bmN0aW9uIHRyaW1MZWFkaW5nV2hpdGVzcGFjZShcbiAgdG9rZW46IEludGVycG9sYXRlZFRleHRUb2tlbixcbiAgY29udGV4dDogU2libGluZ1Zpc2l0b3JDb250ZXh0IHwgbnVsbCxcbik6IEludGVycG9sYXRlZFRleHRUb2tlbiB7XG4gIGlmICh0b2tlbi50eXBlICE9PSBUb2tlblR5cGUuVEVYVCkgcmV0dXJuIHRva2VuO1xuXG4gIGNvbnN0IGlzRmlyc3RUb2tlbkluVGFnID0gIWNvbnRleHQ/LnByZXY7XG4gIGlmICghaXNGaXJzdFRva2VuSW5UYWcpIHJldHVybiB0b2tlbjtcblxuICByZXR1cm4gdHJhbnNmb3JtVGV4dFRva2VuKHRva2VuLCAodGV4dCkgPT4gdGV4dC50cmltU3RhcnQoKSk7XG59XG5cbmZ1bmN0aW9uIHRyaW1UcmFpbGluZ1doaXRlc3BhY2UoXG4gIHRva2VuOiBJbnRlcnBvbGF0ZWRUZXh0VG9rZW4sXG4gIGNvbnRleHQ6IFNpYmxpbmdWaXNpdG9yQ29udGV4dCB8IG51bGwsXG4pOiBJbnRlcnBvbGF0ZWRUZXh0VG9rZW4ge1xuICBpZiAodG9rZW4udHlwZSAhPT0gVG9rZW5UeXBlLlRFWFQpIHJldHVybiB0b2tlbjtcblxuICBjb25zdCBpc0xhc3RUb2tlbkluVGFnID0gIWNvbnRleHQ/Lm5leHQ7XG4gIGlmICghaXNMYXN0VG9rZW5JblRhZykgcmV0dXJuIHRva2VuO1xuXG4gIHJldHVybiB0cmFuc2Zvcm1UZXh0VG9rZW4odG9rZW4sICh0ZXh0KSA9PiB0ZXh0LnRyaW1FbmQoKSk7XG59XG5cbmZ1bmN0aW9uIHRyaW1MZWFkaW5nQW5kVHJhaWxpbmdXaGl0ZXNwYWNlKFxuICB0ZXh0OiBzdHJpbmcsXG4gIGNvbnRleHQ6IFNpYmxpbmdWaXNpdG9yQ29udGV4dCB8IG51bGwsXG4pOiBzdHJpbmcge1xuICBjb25zdCBpc0ZpcnN0VG9rZW5JblRhZyA9ICFjb250ZXh0Py5wcmV2O1xuICBjb25zdCBpc0xhc3RUb2tlbkluVGFnID0gIWNvbnRleHQ/Lm5leHQ7XG5cbiAgY29uc3QgbWF5YmVUcmltbWVkU3RhcnQgPSBpc0ZpcnN0VG9rZW5JblRhZyA/IHRleHQudHJpbVN0YXJ0KCkgOiB0ZXh0O1xuICBjb25zdCBtYXliZVRyaW1tZWQgPSBpc0xhc3RUb2tlbkluVGFnID8gbWF5YmVUcmltbWVkU3RhcnQudHJpbUVuZCgpIDogbWF5YmVUcmltbWVkU3RhcnQ7XG4gIHJldHVybiBtYXliZVRyaW1tZWQ7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVdoaXRlc3BhY2VQcm9jZXNzZWRUZXh0VG9rZW4oe3R5cGUsIHBhcnRzLCBzb3VyY2VTcGFufTogVGV4dFRva2VuKTogVGV4dFRva2VuIHtcbiAgcmV0dXJuIHt0eXBlLCBwYXJ0czogW3Byb2Nlc3NXaGl0ZXNwYWNlKHBhcnRzWzBdKV0sIHNvdXJjZVNwYW59O1xufVxuXG5mdW5jdGlvbiB0cmFuc2Zvcm1UZXh0VG9rZW4oXG4gIHt0eXBlLCBwYXJ0cywgc291cmNlU3Bhbn06IFRleHRUb2tlbixcbiAgdHJhbnNmb3JtOiAocGFydHM6IHN0cmluZykgPT4gc3RyaW5nLFxuKTogVGV4dFRva2VuIHtcbiAgLy8gYFRleHRUb2tlbmAgb25seSBldmVyIGhhcyBvbmUgcGFydCBhcyBkZWZpbmVkIGluIGl0cyB0eXBlLCBzbyB3ZSBqdXN0IHRyYW5zZm9ybSB0aGUgZmlyc3QgZWxlbWVudC5cbiAgcmV0dXJuIHt0eXBlLCBwYXJ0czogW3RyYW5zZm9ybShwYXJ0c1swXSldLCBzb3VyY2VTcGFufTtcbn1cblxuZnVuY3Rpb24gcHJvY2Vzc1doaXRlc3BhY2UodGV4dDogc3RyaW5nKTogc3RyaW5nIHtcbiAgcmV0dXJuIHJlcGxhY2VOZ3NwKHRleHQpLnJlcGxhY2UoV1NfUkVQTEFDRV9SRUdFWFAsICcgJyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVXaGl0ZXNwYWNlcyhcbiAgaHRtbEFzdFdpdGhFcnJvcnM6IFBhcnNlVHJlZVJlc3VsdCxcbiAgcHJlc2VydmVTaWduaWZpY2FudFdoaXRlc3BhY2U6IGJvb2xlYW4sXG4pOiBQYXJzZVRyZWVSZXN1bHQge1xuICByZXR1cm4gbmV3IFBhcnNlVHJlZVJlc3VsdChcbiAgICB2aXNpdEFsbFdpdGhTaWJsaW5ncyhcbiAgICAgIG5ldyBXaGl0ZXNwYWNlVmlzaXRvcihwcmVzZXJ2ZVNpZ25pZmljYW50V2hpdGVzcGFjZSksXG4gICAgICBodG1sQXN0V2l0aEVycm9ycy5yb290Tm9kZXMsXG4gICAgKSxcbiAgICBodG1sQXN0V2l0aEVycm9ycy5lcnJvcnMsXG4gICk7XG59XG5cbmludGVyZmFjZSBTaWJsaW5nVmlzaXRvckNvbnRleHQge1xuICBwcmV2OiBodG1sLk5vZGUgfCB1bmRlZmluZWQ7XG4gIG5leHQ6IGh0bWwuTm9kZSB8IHVuZGVmaW5lZDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHZpc2l0QWxsV2l0aFNpYmxpbmdzKHZpc2l0b3I6IFdoaXRlc3BhY2VWaXNpdG9yLCBub2RlczogaHRtbC5Ob2RlW10pOiBhbnlbXSB7XG4gIGNvbnN0IHJlc3VsdDogYW55W10gPSBbXTtcblxuICBub2Rlcy5mb3JFYWNoKChhc3QsIGkpID0+IHtcbiAgICBjb25zdCBjb250ZXh0OiBTaWJsaW5nVmlzaXRvckNvbnRleHQgPSB7cHJldjogbm9kZXNbaSAtIDFdLCBuZXh0OiBub2Rlc1tpICsgMV19O1xuICAgIGNvbnN0IGFzdFJlc3VsdCA9IGFzdC52aXNpdCh2aXNpdG9yLCBjb250ZXh0KTtcbiAgICBpZiAoYXN0UmVzdWx0KSB7XG4gICAgICByZXN1bHQucHVzaChhc3RSZXN1bHQpO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiByZXN1bHQ7XG59XG4iXX0=