/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.dev/license
 */
const TAG_TO_PLACEHOLDER_NAMES = {
    'A': 'LINK',
    'B': 'BOLD_TEXT',
    'BR': 'LINE_BREAK',
    'EM': 'EMPHASISED_TEXT',
    'H1': 'HEADING_LEVEL1',
    'H2': 'HEADING_LEVEL2',
    'H3': 'HEADING_LEVEL3',
    'H4': 'HEADING_LEVEL4',
    'H5': 'HEADING_LEVEL5',
    'H6': 'HEADING_LEVEL6',
    'HR': 'HORIZONTAL_RULE',
    'I': 'ITALIC_TEXT',
    'LI': 'LIST_ITEM',
    'LINK': 'MEDIA_LINK',
    'OL': 'ORDERED_LIST',
    'P': 'PARAGRAPH',
    'Q': 'QUOTATION',
    'S': 'STRIKETHROUGH_TEXT',
    'SMALL': 'SMALL_TEXT',
    'SUB': 'SUBSTRIPT',
    'SUP': 'SUPERSCRIPT',
    'TBODY': 'TABLE_BODY',
    'TD': 'TABLE_CELL',
    'TFOOT': 'TABLE_FOOTER',
    'TH': 'TABLE_HEADER_CELL',
    'THEAD': 'TABLE_HEADER',
    'TR': 'TABLE_ROW',
    'TT': 'MONOSPACED_TEXT',
    'U': 'UNDERLINED_TEXT',
    'UL': 'UNORDERED_LIST',
};
/**
 * Creates unique names for placeholder with different content.
 *
 * Returns the same placeholder name when the content is identical.
 */
export class PlaceholderRegistry {
    constructor() {
        // Count the occurrence of the base name top generate a unique name
        this._placeHolderNameCounts = {};
        // Maps signature to placeholder names
        this._signatureToName = {};
    }
    getStartTagPlaceholderName(tag, attrs, isVoid) {
        const signature = this._hashTag(tag, attrs, isVoid);
        if (this._signatureToName[signature]) {
            return this._signatureToName[signature];
        }
        const upperTag = tag.toUpperCase();
        const baseName = TAG_TO_PLACEHOLDER_NAMES[upperTag] || `TAG_${upperTag}`;
        const name = this._generateUniqueName(isVoid ? baseName : `START_${baseName}`);
        this._signatureToName[signature] = name;
        return name;
    }
    getCloseTagPlaceholderName(tag) {
        const signature = this._hashClosingTag(tag);
        if (this._signatureToName[signature]) {
            return this._signatureToName[signature];
        }
        const upperTag = tag.toUpperCase();
        const baseName = TAG_TO_PLACEHOLDER_NAMES[upperTag] || `TAG_${upperTag}`;
        const name = this._generateUniqueName(`CLOSE_${baseName}`);
        this._signatureToName[signature] = name;
        return name;
    }
    getPlaceholderName(name, content) {
        const upperName = name.toUpperCase();
        const signature = `PH: ${upperName}=${content}`;
        if (this._signatureToName[signature]) {
            return this._signatureToName[signature];
        }
        const uniqueName = this._generateUniqueName(upperName);
        this._signatureToName[signature] = uniqueName;
        return uniqueName;
    }
    getUniquePlaceholder(name) {
        return this._generateUniqueName(name.toUpperCase());
    }
    getStartBlockPlaceholderName(name, parameters) {
        const signature = this._hashBlock(name, parameters);
        if (this._signatureToName[signature]) {
            return this._signatureToName[signature];
        }
        const placeholder = this._generateUniqueName(`START_BLOCK_${this._toSnakeCase(name)}`);
        this._signatureToName[signature] = placeholder;
        return placeholder;
    }
    getCloseBlockPlaceholderName(name) {
        const signature = this._hashClosingBlock(name);
        if (this._signatureToName[signature]) {
            return this._signatureToName[signature];
        }
        const placeholder = this._generateUniqueName(`CLOSE_BLOCK_${this._toSnakeCase(name)}`);
        this._signatureToName[signature] = placeholder;
        return placeholder;
    }
    // Generate a hash for a tag - does not take attribute order into account
    _hashTag(tag, attrs, isVoid) {
        const start = `<${tag}`;
        const strAttrs = Object.keys(attrs)
            .sort()
            .map((name) => ` ${name}=${attrs[name]}`)
            .join('');
        const end = isVoid ? '/>' : `></${tag}>`;
        return start + strAttrs + end;
    }
    _hashClosingTag(tag) {
        return this._hashTag(`/${tag}`, {}, false);
    }
    _hashBlock(name, parameters) {
        const params = parameters.length === 0 ? '' : ` (${parameters.sort().join('; ')})`;
        return `@${name}${params} {}`;
    }
    _hashClosingBlock(name) {
        return this._hashBlock(`close_${name}`, []);
    }
    _toSnakeCase(name) {
        return name.toUpperCase().replace(/[^A-Z0-9]/g, '_');
    }
    _generateUniqueName(base) {
        const seen = this._placeHolderNameCounts.hasOwnProperty(base);
        if (!seen) {
            this._placeHolderNameCounts[base] = 1;
            return base;
        }
        const id = this._placeHolderNameCounts[base];
        this._placeHolderNameCounts[base] = id + 1;
        return `${base}_${id}`;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGxhY2Vob2xkZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9jb21waWxlci9zcmMvaTE4bi9zZXJpYWxpemVycy9wbGFjZWhvbGRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7QUFFSCxNQUFNLHdCQUF3QixHQUEwQjtJQUN0RCxHQUFHLEVBQUUsTUFBTTtJQUNYLEdBQUcsRUFBRSxXQUFXO0lBQ2hCLElBQUksRUFBRSxZQUFZO0lBQ2xCLElBQUksRUFBRSxpQkFBaUI7SUFDdkIsSUFBSSxFQUFFLGdCQUFnQjtJQUN0QixJQUFJLEVBQUUsZ0JBQWdCO0lBQ3RCLElBQUksRUFBRSxnQkFBZ0I7SUFDdEIsSUFBSSxFQUFFLGdCQUFnQjtJQUN0QixJQUFJLEVBQUUsZ0JBQWdCO0lBQ3RCLElBQUksRUFBRSxnQkFBZ0I7SUFDdEIsSUFBSSxFQUFFLGlCQUFpQjtJQUN2QixHQUFHLEVBQUUsYUFBYTtJQUNsQixJQUFJLEVBQUUsV0FBVztJQUNqQixNQUFNLEVBQUUsWUFBWTtJQUNwQixJQUFJLEVBQUUsY0FBYztJQUNwQixHQUFHLEVBQUUsV0FBVztJQUNoQixHQUFHLEVBQUUsV0FBVztJQUNoQixHQUFHLEVBQUUsb0JBQW9CO0lBQ3pCLE9BQU8sRUFBRSxZQUFZO0lBQ3JCLEtBQUssRUFBRSxXQUFXO0lBQ2xCLEtBQUssRUFBRSxhQUFhO0lBQ3BCLE9BQU8sRUFBRSxZQUFZO0lBQ3JCLElBQUksRUFBRSxZQUFZO0lBQ2xCLE9BQU8sRUFBRSxjQUFjO0lBQ3ZCLElBQUksRUFBRSxtQkFBbUI7SUFDekIsT0FBTyxFQUFFLGNBQWM7SUFDdkIsSUFBSSxFQUFFLFdBQVc7SUFDakIsSUFBSSxFQUFFLGlCQUFpQjtJQUN2QixHQUFHLEVBQUUsaUJBQWlCO0lBQ3RCLElBQUksRUFBRSxnQkFBZ0I7Q0FDdkIsQ0FBQztBQUVGOzs7O0dBSUc7QUFDSCxNQUFNLE9BQU8sbUJBQW1CO0lBQWhDO1FBQ0UsbUVBQW1FO1FBQzNELDJCQUFzQixHQUEwQixFQUFFLENBQUM7UUFDM0Qsc0NBQXNDO1FBQzlCLHFCQUFnQixHQUEwQixFQUFFLENBQUM7SUErR3ZELENBQUM7SUE3R0MsMEJBQTBCLENBQUMsR0FBVyxFQUFFLEtBQTRCLEVBQUUsTUFBZTtRQUNuRixNQUFNLFNBQVMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsRUFBRSxLQUFLLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFDcEQsSUFBSSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQztZQUNyQyxPQUFPLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUMxQyxDQUFDO1FBRUQsTUFBTSxRQUFRLEdBQUcsR0FBRyxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ25DLE1BQU0sUUFBUSxHQUFHLHdCQUF3QixDQUFDLFFBQVEsQ0FBQyxJQUFJLE9BQU8sUUFBUSxFQUFFLENBQUM7UUFDekUsTUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLG1CQUFtQixDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxTQUFTLFFBQVEsRUFBRSxDQUFDLENBQUM7UUFFL0UsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFNBQVMsQ0FBQyxHQUFHLElBQUksQ0FBQztRQUV4QyxPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7SUFFRCwwQkFBMEIsQ0FBQyxHQUFXO1FBQ3BDLE1BQU0sU0FBUyxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDNUMsSUFBSSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQztZQUNyQyxPQUFPLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUMxQyxDQUFDO1FBRUQsTUFBTSxRQUFRLEdBQUcsR0FBRyxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ25DLE1BQU0sUUFBUSxHQUFHLHdCQUF3QixDQUFDLFFBQVEsQ0FBQyxJQUFJLE9BQU8sUUFBUSxFQUFFLENBQUM7UUFDekUsTUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLG1CQUFtQixDQUFDLFNBQVMsUUFBUSxFQUFFLENBQUMsQ0FBQztRQUUzRCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxDQUFDLEdBQUcsSUFBSSxDQUFDO1FBRXhDLE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQUVELGtCQUFrQixDQUFDLElBQVksRUFBRSxPQUFlO1FBQzlDLE1BQU0sU0FBUyxHQUFHLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNyQyxNQUFNLFNBQVMsR0FBRyxPQUFPLFNBQVMsSUFBSSxPQUFPLEVBQUUsQ0FBQztRQUNoRCxJQUFJLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDO1lBQ3JDLE9BQU8sSUFBSSxDQUFDLGdCQUFnQixDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQzFDLENBQUM7UUFFRCxNQUFNLFVBQVUsR0FBRyxJQUFJLENBQUMsbUJBQW1CLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDdkQsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFNBQVMsQ0FBQyxHQUFHLFVBQVUsQ0FBQztRQUU5QyxPQUFPLFVBQVUsQ0FBQztJQUNwQixDQUFDO0lBRUQsb0JBQW9CLENBQUMsSUFBWTtRQUMvQixPQUFPLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQztJQUN0RCxDQUFDO0lBRUQsNEJBQTRCLENBQUMsSUFBWSxFQUFFLFVBQW9CO1FBQzdELE1BQU0sU0FBUyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFFLFVBQVUsQ0FBQyxDQUFDO1FBQ3BELElBQUksSUFBSSxDQUFDLGdCQUFnQixDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUM7WUFDckMsT0FBTyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDMUMsQ0FBQztRQUVELE1BQU0sV0FBVyxHQUFHLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxlQUFlLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ3ZGLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLENBQUMsR0FBRyxXQUFXLENBQUM7UUFDL0MsT0FBTyxXQUFXLENBQUM7SUFDckIsQ0FBQztJQUVELDRCQUE0QixDQUFDLElBQVk7UUFDdkMsTUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxDQUFDO1FBQy9DLElBQUksSUFBSSxDQUFDLGdCQUFnQixDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUM7WUFDckMsT0FBTyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDMUMsQ0FBQztRQUVELE1BQU0sV0FBVyxHQUFHLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxlQUFlLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ3ZGLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLENBQUMsR0FBRyxXQUFXLENBQUM7UUFDL0MsT0FBTyxXQUFXLENBQUM7SUFDckIsQ0FBQztJQUVELHlFQUF5RTtJQUNqRSxRQUFRLENBQUMsR0FBVyxFQUFFLEtBQTRCLEVBQUUsTUFBZTtRQUN6RSxNQUFNLEtBQUssR0FBRyxJQUFJLEdBQUcsRUFBRSxDQUFDO1FBQ3hCLE1BQU0sUUFBUSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO2FBQ2hDLElBQUksRUFBRTthQUNOLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsSUFBSSxJQUFJLElBQUksS0FBSyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUM7YUFDeEMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ1osTUFBTSxHQUFHLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLE1BQU0sR0FBRyxHQUFHLENBQUM7UUFFekMsT0FBTyxLQUFLLEdBQUcsUUFBUSxHQUFHLEdBQUcsQ0FBQztJQUNoQyxDQUFDO0lBRU8sZUFBZSxDQUFDLEdBQVc7UUFDakMsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksR0FBRyxFQUFFLEVBQUUsRUFBRSxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQzdDLENBQUM7SUFFTyxVQUFVLENBQUMsSUFBWSxFQUFFLFVBQW9CO1FBQ25ELE1BQU0sTUFBTSxHQUFHLFVBQVUsQ0FBQyxNQUFNLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUssVUFBVSxDQUFDLElBQUksRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDO1FBQ25GLE9BQU8sSUFBSSxJQUFJLEdBQUcsTUFBTSxLQUFLLENBQUM7SUFDaEMsQ0FBQztJQUVPLGlCQUFpQixDQUFDLElBQVk7UUFDcEMsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsSUFBSSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDOUMsQ0FBQztJQUVPLFlBQVksQ0FBQyxJQUFZO1FBQy9CLE9BQU8sSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDLE9BQU8sQ0FBQyxZQUFZLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDdkQsQ0FBQztJQUVPLG1CQUFtQixDQUFDLElBQVk7UUFDdEMsTUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLHNCQUFzQixDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM5RCxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7WUFDVixJQUFJLENBQUMsc0JBQXNCLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ3RDLE9BQU8sSUFBSSxDQUFDO1FBQ2QsQ0FBQztRQUVELE1BQU0sRUFBRSxHQUFHLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM3QyxJQUFJLENBQUMsc0JBQXNCLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUMzQyxPQUFPLEdBQUcsSUFBSSxJQUFJLEVBQUUsRUFBRSxDQUFDO0lBQ3pCLENBQUM7Q0FDRiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgTExDIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmRldi9saWNlbnNlXG4gKi9cblxuY29uc3QgVEFHX1RPX1BMQUNFSE9MREVSX05BTUVTOiB7W2s6IHN0cmluZ106IHN0cmluZ30gPSB7XG4gICdBJzogJ0xJTksnLFxuICAnQic6ICdCT0xEX1RFWFQnLFxuICAnQlInOiAnTElORV9CUkVBSycsXG4gICdFTSc6ICdFTVBIQVNJU0VEX1RFWFQnLFxuICAnSDEnOiAnSEVBRElOR19MRVZFTDEnLFxuICAnSDInOiAnSEVBRElOR19MRVZFTDInLFxuICAnSDMnOiAnSEVBRElOR19MRVZFTDMnLFxuICAnSDQnOiAnSEVBRElOR19MRVZFTDQnLFxuICAnSDUnOiAnSEVBRElOR19MRVZFTDUnLFxuICAnSDYnOiAnSEVBRElOR19MRVZFTDYnLFxuICAnSFInOiAnSE9SSVpPTlRBTF9SVUxFJyxcbiAgJ0knOiAnSVRBTElDX1RFWFQnLFxuICAnTEknOiAnTElTVF9JVEVNJyxcbiAgJ0xJTksnOiAnTUVESUFfTElOSycsXG4gICdPTCc6ICdPUkRFUkVEX0xJU1QnLFxuICAnUCc6ICdQQVJBR1JBUEgnLFxuICAnUSc6ICdRVU9UQVRJT04nLFxuICAnUyc6ICdTVFJJS0VUSFJPVUdIX1RFWFQnLFxuICAnU01BTEwnOiAnU01BTExfVEVYVCcsXG4gICdTVUInOiAnU1VCU1RSSVBUJyxcbiAgJ1NVUCc6ICdTVVBFUlNDUklQVCcsXG4gICdUQk9EWSc6ICdUQUJMRV9CT0RZJyxcbiAgJ1REJzogJ1RBQkxFX0NFTEwnLFxuICAnVEZPT1QnOiAnVEFCTEVfRk9PVEVSJyxcbiAgJ1RIJzogJ1RBQkxFX0hFQURFUl9DRUxMJyxcbiAgJ1RIRUFEJzogJ1RBQkxFX0hFQURFUicsXG4gICdUUic6ICdUQUJMRV9ST1cnLFxuICAnVFQnOiAnTU9OT1NQQUNFRF9URVhUJyxcbiAgJ1UnOiAnVU5ERVJMSU5FRF9URVhUJyxcbiAgJ1VMJzogJ1VOT1JERVJFRF9MSVNUJyxcbn07XG5cbi8qKlxuICogQ3JlYXRlcyB1bmlxdWUgbmFtZXMgZm9yIHBsYWNlaG9sZGVyIHdpdGggZGlmZmVyZW50IGNvbnRlbnQuXG4gKlxuICogUmV0dXJucyB0aGUgc2FtZSBwbGFjZWhvbGRlciBuYW1lIHdoZW4gdGhlIGNvbnRlbnQgaXMgaWRlbnRpY2FsLlxuICovXG5leHBvcnQgY2xhc3MgUGxhY2Vob2xkZXJSZWdpc3RyeSB7XG4gIC8vIENvdW50IHRoZSBvY2N1cnJlbmNlIG9mIHRoZSBiYXNlIG5hbWUgdG9wIGdlbmVyYXRlIGEgdW5pcXVlIG5hbWVcbiAgcHJpdmF0ZSBfcGxhY2VIb2xkZXJOYW1lQ291bnRzOiB7W2s6IHN0cmluZ106IG51bWJlcn0gPSB7fTtcbiAgLy8gTWFwcyBzaWduYXR1cmUgdG8gcGxhY2Vob2xkZXIgbmFtZXNcbiAgcHJpdmF0ZSBfc2lnbmF0dXJlVG9OYW1lOiB7W2s6IHN0cmluZ106IHN0cmluZ30gPSB7fTtcblxuICBnZXRTdGFydFRhZ1BsYWNlaG9sZGVyTmFtZSh0YWc6IHN0cmluZywgYXR0cnM6IHtbazogc3RyaW5nXTogc3RyaW5nfSwgaXNWb2lkOiBib29sZWFuKTogc3RyaW5nIHtcbiAgICBjb25zdCBzaWduYXR1cmUgPSB0aGlzLl9oYXNoVGFnKHRhZywgYXR0cnMsIGlzVm9pZCk7XG4gICAgaWYgKHRoaXMuX3NpZ25hdHVyZVRvTmFtZVtzaWduYXR1cmVdKSB7XG4gICAgICByZXR1cm4gdGhpcy5fc2lnbmF0dXJlVG9OYW1lW3NpZ25hdHVyZV07XG4gICAgfVxuXG4gICAgY29uc3QgdXBwZXJUYWcgPSB0YWcudG9VcHBlckNhc2UoKTtcbiAgICBjb25zdCBiYXNlTmFtZSA9IFRBR19UT19QTEFDRUhPTERFUl9OQU1FU1t1cHBlclRhZ10gfHwgYFRBR18ke3VwcGVyVGFnfWA7XG4gICAgY29uc3QgbmFtZSA9IHRoaXMuX2dlbmVyYXRlVW5pcXVlTmFtZShpc1ZvaWQgPyBiYXNlTmFtZSA6IGBTVEFSVF8ke2Jhc2VOYW1lfWApO1xuXG4gICAgdGhpcy5fc2lnbmF0dXJlVG9OYW1lW3NpZ25hdHVyZV0gPSBuYW1lO1xuXG4gICAgcmV0dXJuIG5hbWU7XG4gIH1cblxuICBnZXRDbG9zZVRhZ1BsYWNlaG9sZGVyTmFtZSh0YWc6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgY29uc3Qgc2lnbmF0dXJlID0gdGhpcy5faGFzaENsb3NpbmdUYWcodGFnKTtcbiAgICBpZiAodGhpcy5fc2lnbmF0dXJlVG9OYW1lW3NpZ25hdHVyZV0pIHtcbiAgICAgIHJldHVybiB0aGlzLl9zaWduYXR1cmVUb05hbWVbc2lnbmF0dXJlXTtcbiAgICB9XG5cbiAgICBjb25zdCB1cHBlclRhZyA9IHRhZy50b1VwcGVyQ2FzZSgpO1xuICAgIGNvbnN0IGJhc2VOYW1lID0gVEFHX1RPX1BMQUNFSE9MREVSX05BTUVTW3VwcGVyVGFnXSB8fCBgVEFHXyR7dXBwZXJUYWd9YDtcbiAgICBjb25zdCBuYW1lID0gdGhpcy5fZ2VuZXJhdGVVbmlxdWVOYW1lKGBDTE9TRV8ke2Jhc2VOYW1lfWApO1xuXG4gICAgdGhpcy5fc2lnbmF0dXJlVG9OYW1lW3NpZ25hdHVyZV0gPSBuYW1lO1xuXG4gICAgcmV0dXJuIG5hbWU7XG4gIH1cblxuICBnZXRQbGFjZWhvbGRlck5hbWUobmFtZTogc3RyaW5nLCBjb250ZW50OiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIGNvbnN0IHVwcGVyTmFtZSA9IG5hbWUudG9VcHBlckNhc2UoKTtcbiAgICBjb25zdCBzaWduYXR1cmUgPSBgUEg6ICR7dXBwZXJOYW1lfT0ke2NvbnRlbnR9YDtcbiAgICBpZiAodGhpcy5fc2lnbmF0dXJlVG9OYW1lW3NpZ25hdHVyZV0pIHtcbiAgICAgIHJldHVybiB0aGlzLl9zaWduYXR1cmVUb05hbWVbc2lnbmF0dXJlXTtcbiAgICB9XG5cbiAgICBjb25zdCB1bmlxdWVOYW1lID0gdGhpcy5fZ2VuZXJhdGVVbmlxdWVOYW1lKHVwcGVyTmFtZSk7XG4gICAgdGhpcy5fc2lnbmF0dXJlVG9OYW1lW3NpZ25hdHVyZV0gPSB1bmlxdWVOYW1lO1xuXG4gICAgcmV0dXJuIHVuaXF1ZU5hbWU7XG4gIH1cblxuICBnZXRVbmlxdWVQbGFjZWhvbGRlcihuYW1lOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9nZW5lcmF0ZVVuaXF1ZU5hbWUobmFtZS50b1VwcGVyQ2FzZSgpKTtcbiAgfVxuXG4gIGdldFN0YXJ0QmxvY2tQbGFjZWhvbGRlck5hbWUobmFtZTogc3RyaW5nLCBwYXJhbWV0ZXJzOiBzdHJpbmdbXSk6IHN0cmluZyB7XG4gICAgY29uc3Qgc2lnbmF0dXJlID0gdGhpcy5faGFzaEJsb2NrKG5hbWUsIHBhcmFtZXRlcnMpO1xuICAgIGlmICh0aGlzLl9zaWduYXR1cmVUb05hbWVbc2lnbmF0dXJlXSkge1xuICAgICAgcmV0dXJuIHRoaXMuX3NpZ25hdHVyZVRvTmFtZVtzaWduYXR1cmVdO1xuICAgIH1cblxuICAgIGNvbnN0IHBsYWNlaG9sZGVyID0gdGhpcy5fZ2VuZXJhdGVVbmlxdWVOYW1lKGBTVEFSVF9CTE9DS18ke3RoaXMuX3RvU25ha2VDYXNlKG5hbWUpfWApO1xuICAgIHRoaXMuX3NpZ25hdHVyZVRvTmFtZVtzaWduYXR1cmVdID0gcGxhY2Vob2xkZXI7XG4gICAgcmV0dXJuIHBsYWNlaG9sZGVyO1xuICB9XG5cbiAgZ2V0Q2xvc2VCbG9ja1BsYWNlaG9sZGVyTmFtZShuYW1lOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIGNvbnN0IHNpZ25hdHVyZSA9IHRoaXMuX2hhc2hDbG9zaW5nQmxvY2sobmFtZSk7XG4gICAgaWYgKHRoaXMuX3NpZ25hdHVyZVRvTmFtZVtzaWduYXR1cmVdKSB7XG4gICAgICByZXR1cm4gdGhpcy5fc2lnbmF0dXJlVG9OYW1lW3NpZ25hdHVyZV07XG4gICAgfVxuXG4gICAgY29uc3QgcGxhY2Vob2xkZXIgPSB0aGlzLl9nZW5lcmF0ZVVuaXF1ZU5hbWUoYENMT1NFX0JMT0NLXyR7dGhpcy5fdG9TbmFrZUNhc2UobmFtZSl9YCk7XG4gICAgdGhpcy5fc2lnbmF0dXJlVG9OYW1lW3NpZ25hdHVyZV0gPSBwbGFjZWhvbGRlcjtcbiAgICByZXR1cm4gcGxhY2Vob2xkZXI7XG4gIH1cblxuICAvLyBHZW5lcmF0ZSBhIGhhc2ggZm9yIGEgdGFnIC0gZG9lcyBub3QgdGFrZSBhdHRyaWJ1dGUgb3JkZXIgaW50byBhY2NvdW50XG4gIHByaXZhdGUgX2hhc2hUYWcodGFnOiBzdHJpbmcsIGF0dHJzOiB7W2s6IHN0cmluZ106IHN0cmluZ30sIGlzVm9pZDogYm9vbGVhbik6IHN0cmluZyB7XG4gICAgY29uc3Qgc3RhcnQgPSBgPCR7dGFnfWA7XG4gICAgY29uc3Qgc3RyQXR0cnMgPSBPYmplY3Qua2V5cyhhdHRycylcbiAgICAgIC5zb3J0KClcbiAgICAgIC5tYXAoKG5hbWUpID0+IGAgJHtuYW1lfT0ke2F0dHJzW25hbWVdfWApXG4gICAgICAuam9pbignJyk7XG4gICAgY29uc3QgZW5kID0gaXNWb2lkID8gJy8+JyA6IGA+PC8ke3RhZ30+YDtcblxuICAgIHJldHVybiBzdGFydCArIHN0ckF0dHJzICsgZW5kO1xuICB9XG5cbiAgcHJpdmF0ZSBfaGFzaENsb3NpbmdUYWcodGFnOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9oYXNoVGFnKGAvJHt0YWd9YCwge30sIGZhbHNlKTtcbiAgfVxuXG4gIHByaXZhdGUgX2hhc2hCbG9jayhuYW1lOiBzdHJpbmcsIHBhcmFtZXRlcnM6IHN0cmluZ1tdKTogc3RyaW5nIHtcbiAgICBjb25zdCBwYXJhbXMgPSBwYXJhbWV0ZXJzLmxlbmd0aCA9PT0gMCA/ICcnIDogYCAoJHtwYXJhbWV0ZXJzLnNvcnQoKS5qb2luKCc7ICcpfSlgO1xuICAgIHJldHVybiBgQCR7bmFtZX0ke3BhcmFtc30ge31gO1xuICB9XG5cbiAgcHJpdmF0ZSBfaGFzaENsb3NpbmdCbG9jayhuYW1lOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9oYXNoQmxvY2soYGNsb3NlXyR7bmFtZX1gLCBbXSk7XG4gIH1cblxuICBwcml2YXRlIF90b1NuYWtlQ2FzZShuYW1lOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gbmFtZS50b1VwcGVyQ2FzZSgpLnJlcGxhY2UoL1teQS1aMC05XS9nLCAnXycpO1xuICB9XG5cbiAgcHJpdmF0ZSBfZ2VuZXJhdGVVbmlxdWVOYW1lKGJhc2U6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgY29uc3Qgc2VlbiA9IHRoaXMuX3BsYWNlSG9sZGVyTmFtZUNvdW50cy5oYXNPd25Qcm9wZXJ0eShiYXNlKTtcbiAgICBpZiAoIXNlZW4pIHtcbiAgICAgIHRoaXMuX3BsYWNlSG9sZGVyTmFtZUNvdW50c1tiYXNlXSA9IDE7XG4gICAgICByZXR1cm4gYmFzZTtcbiAgICB9XG5cbiAgICBjb25zdCBpZCA9IHRoaXMuX3BsYWNlSG9sZGVyTmFtZUNvdW50c1tiYXNlXTtcbiAgICB0aGlzLl9wbGFjZUhvbGRlck5hbWVDb3VudHNbYmFzZV0gPSBpZCArIDE7XG4gICAgcmV0dXJuIGAke2Jhc2V9XyR7aWR9YDtcbiAgfVxufVxuIl19