/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import ts from 'typescript';
/**
 * Patches the alias declaration reference resolution for a given transformation context
 * so that TypeScript knows about the specified alias declarations being referenced.
 *
 * This exists because TypeScript performs analysis of import usage before transformers
 * run and doesn't refresh its state after transformations. This means that imports
 * for symbols used as constructor types are elided due to their original type-only usage.
 *
 * In reality though, since we downlevel decorators and constructor parameters, we want
 * these symbols to be retained in the JavaScript output as they will be used as values
 * at runtime. We can instruct TypeScript to preserve imports for such identifiers by
 * creating a mutable clone of a given import specifier/clause or namespace, but that
 * has the downside of preserving the full import in the JS output. See:
 * https://github.com/microsoft/TypeScript/blob/3eaa7c65f6f076a08a5f7f1946fd0df7c7430259/src/compiler/transformers/ts.ts#L242-L250.
 *
 * This is a trick the CLI used in the past  for constructor parameter downleveling in JIT:
 * https://github.com/angular/angular-cli/blob/b3f84cc5184337666ce61c07b7b9df418030106f/packages/ngtools/webpack/src/transformers/ctor-parameters.ts#L323-L325
 * The trick is not ideal though as it preserves the full import (as outlined before), and it
 * results in a slow-down due to the type checker being involved multiple times. The CLI worked
 * around this import preserving issue by having another complex post-process step that detects and
 * elides unused imports. Note that these unused imports could cause unused chunks being generated
 * by Webpack if the application or library is not marked as side-effect free.
 *
 * This is not ideal though, as we basically re-implement the complex import usage resolution
 * from TypeScript. We can do better by letting TypeScript do the import eliding, but providing
 * information about the alias declarations (e.g. import specifiers) that should not be elided
 * because they are actually referenced (as they will now appear in static properties).
 *
 * More information about these limitations with transformers can be found in:
 *   1. https://github.com/Microsoft/TypeScript/issues/17552.
 *   2. https://github.com/microsoft/TypeScript/issues/17516.
 *   3. https://github.com/angular/tsickle/issues/635.
 *
 * The patch we apply to tell TypeScript about actual referenced aliases (i.e. imported symbols),
 * matches conceptually with the logic that runs internally in TypeScript when the
 * `emitDecoratorMetadata` flag is enabled. TypeScript basically surfaces the same problem and
 * solves it conceptually the same way, but obviously doesn't need to access an internal API.
 *
 * The set that is returned by this function is meant to be filled with import declaration nodes
 * that have been referenced in a value-position by the transform, such the installed patch can
 * ensure that those import declarations are not elided.
 *
 * See below. Note that this uses sourcegraph as the TypeScript checker file doesn't display on
 * Github.
 * https://sourcegraph.com/github.com/microsoft/TypeScript@3eaa7c65f6f076a08a5f7f1946fd0df7c7430259/-/blob/src/compiler/checker.ts#L31219-31257
 */
export declare function loadIsReferencedAliasDeclarationPatch(context: ts.TransformationContext): Set<ts.Declaration>;
/**
 * Gets whether a given node corresponds to an import alias declaration. Alias
 * declarations can be import specifiers, namespace imports or import clauses
 * as these do not declare an actual symbol but just point to a target declaration.
 */
export declare function isAliasImportDeclaration(node: ts.Node): node is ts.ImportSpecifier | ts.NamespaceImport | ts.ImportClause;
