'use strict';
/**
 * @license Angular v19.0.6
 * (c) 2010-2024 Google LLC. https://angular.io/
 * License: MIT
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var schematics = require('@angular-devkit/schematics');
var p = require('path');
var compiler_host = require('./compiler_host-6ebdb0ca.js');
var ts = require('typescript');
var nodes = require('./nodes-a9f0b985.js');
var imports = require('./imports-abe29092.js');
var leading_space = require('./leading_space-d190b83b.js');
require('./checker-99fcd356.js');
require('os');
require('fs');
require('module');
require('url');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var ts__default = /*#__PURE__*/_interopDefaultLegacy(ts);

/*!
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.dev/license
 */
/** Names of decorators that enable DI on a class declaration. */
const DECORATORS_SUPPORTING_DI = new Set([
    'Component',
    'Directive',
    'Pipe',
    'NgModule',
    'Injectable',
]);
/** Names of symbols used for DI on parameters. */
const DI_PARAM_SYMBOLS = new Set([
    'Inject',
    'Attribute',
    'Optional',
    'SkipSelf',
    'Self',
    'Host',
    'forwardRef',
]);
/** Kinds of nodes which aren't injectable when set as a type of a parameter. */
const UNINJECTABLE_TYPE_KINDS = new Set([
    ts__default["default"].SyntaxKind.TrueKeyword,
    ts__default["default"].SyntaxKind.FalseKeyword,
    ts__default["default"].SyntaxKind.NumberKeyword,
    ts__default["default"].SyntaxKind.StringKeyword,
    ts__default["default"].SyntaxKind.NullKeyword,
    ts__default["default"].SyntaxKind.VoidKeyword,
]);
/**
 * Finds the necessary information for the `inject` migration in a file.
 * @param sourceFile File which to analyze.
 * @param localTypeChecker Type checker scoped to the specific file.
 */
function analyzeFile(sourceFile, localTypeChecker, options) {
    const coreSpecifiers = imports.getNamedImports(sourceFile, '@angular/core');
    // Exit early if there are no Angular imports.
    if (coreSpecifiers === null || coreSpecifiers.elements.length === 0) {
        return null;
    }
    const classes = [];
    const nonDecoratorReferences = {};
    const importsToSpecifiers = coreSpecifiers.elements.reduce((map, specifier) => {
        const symbolName = (specifier.propertyName || specifier.name).text;
        if (DI_PARAM_SYMBOLS.has(symbolName)) {
            map.set(symbolName, specifier);
        }
        return map;
    }, new Map());
    sourceFile.forEachChild(function walk(node) {
        // Skip import declarations since they can throw off the identifier
        // could below and we don't care about them in this migration.
        if (ts__default["default"].isImportDeclaration(node)) {
            return;
        }
        if (ts__default["default"].isParameter(node)) {
            const closestConstructor = nodes.closestNode(node, ts__default["default"].isConstructorDeclaration);
            // Visiting the same parameters that we're about to remove can throw off the reference
            // counting logic below. If we run into an initializer, we always visit its initializer
            // and optionally visit the modifiers/decorators if it's not due to be deleted. Note that
            // here we technically aren't dealing with the the full list of classes, but the parent class
            // will have been visited by the time we reach the parameters.
            if (node.initializer) {
                walk(node.initializer);
            }
            if (closestConstructor === null ||
                // This is meant to avoid the case where this is a
                // parameter inside a function placed in a constructor.
                !closestConstructor.parameters.includes(node) ||
                !classes.some((c) => c.constructor === closestConstructor)) {
                node.modifiers?.forEach(walk);
            }
            return;
        }
        if (ts__default["default"].isIdentifier(node) && importsToSpecifiers.size > 0) {
            let symbol;
            for (const [name, specifier] of importsToSpecifiers) {
                const localName = (specifier.propertyName || specifier.name).text;
                // Quick exit if the two symbols don't match up.
                if (localName === node.text) {
                    if (!symbol) {
                        symbol = localTypeChecker.getSymbolAtLocation(node);
                        // If the symbol couldn't be resolved the first time, it won't be resolved the next
                        // time either. Stop the loop since we won't be able to get an accurate result.
                        if (!symbol || !symbol.declarations) {
                            break;
                        }
                        else if (symbol.declarations.some((decl) => decl === specifier)) {
                            nonDecoratorReferences[name] = (nonDecoratorReferences[name] || 0) + 1;
                        }
                    }
                }
            }
        }
        else if (ts__default["default"].isClassDeclaration(node)) {
            const decorators = nodes.getAngularDecorators(localTypeChecker, ts__default["default"].getDecorators(node) || []);
            const isAbstract = !!node.modifiers?.some((m) => m.kind === ts__default["default"].SyntaxKind.AbstractKeyword);
            const supportsDI = decorators.some((dec) => DECORATORS_SUPPORTING_DI.has(dec.name));
            const constructorNode = node.members.find((member) => ts__default["default"].isConstructorDeclaration(member) &&
                member.body != null &&
                member.parameters.length > 0);
            // Basic check to determine if all parameters are injectable. This isn't exhaustive, but it
            // should catch the majority of cases. An exhaustive check would require a full type checker
            // which we don't have in this migration.
            const allParamsInjectable = !!constructorNode?.parameters.every((param) => {
                if (!param.type || !UNINJECTABLE_TYPE_KINDS.has(param.type.kind)) {
                    return true;
                }
                return nodes.getAngularDecorators(localTypeChecker, ts__default["default"].getDecorators(param) || []).some((dec) => dec.name === 'Inject' || dec.name === 'Attribute');
            });
            // Don't migrate abstract classes by default, because
            // their parameters aren't guaranteed to be injectable.
            if (supportsDI &&
                constructorNode &&
                allParamsInjectable &&
                (!isAbstract || options.migrateAbstractClasses)) {
                classes.push({
                    node,
                    constructor: constructorNode,
                    superCall: node.heritageClauses ? findSuperCall(constructorNode) : null,
                });
            }
        }
        node.forEachChild(walk);
    });
    return { classes, nonDecoratorReferences };
}
/**
 * Returns the parameters of a function that aren't used within its body.
 * @param declaration Function in which to search for unused parameters.
 * @param localTypeChecker Type checker scoped to the file in which the function was declared.
 * @param removedStatements Statements that were already removed from the constructor.
 */
function getConstructorUnusedParameters(declaration, localTypeChecker, removedStatements) {
    const accessedTopLevelParameters = new Set();
    const topLevelParameters = new Set();
    const topLevelParameterNames = new Set();
    const unusedParams = new Set();
    // Prepare the parameters for quicker checks further down.
    for (const param of declaration.parameters) {
        if (ts__default["default"].isIdentifier(param.name)) {
            topLevelParameters.add(param);
            topLevelParameterNames.add(param.name.text);
        }
    }
    if (!declaration.body) {
        return topLevelParameters;
    }
    const analyze = (node) => {
        // Don't descend into statements that were removed already.
        if (ts__default["default"].isStatement(node) && removedStatements.has(node)) {
            return;
        }
        if (!ts__default["default"].isIdentifier(node) || !topLevelParameterNames.has(node.text)) {
            node.forEachChild(analyze);
            return;
        }
        // Don't consider `this.<name>` accesses as being references to
        // parameters since they'll be moved to property declarations.
        if (isAccessedViaThis(node)) {
            return;
        }
        localTypeChecker.getSymbolAtLocation(node)?.declarations?.forEach((decl) => {
            if (ts__default["default"].isParameter(decl) && topLevelParameters.has(decl)) {
                accessedTopLevelParameters.add(decl);
            }
            if (ts__default["default"].isShorthandPropertyAssignment(decl)) {
                const symbol = localTypeChecker.getShorthandAssignmentValueSymbol(decl);
                if (symbol && symbol.valueDeclaration && ts__default["default"].isParameter(symbol.valueDeclaration)) {
                    accessedTopLevelParameters.add(symbol.valueDeclaration);
                }
            }
        });
    };
    declaration.parameters.forEach((param) => {
        if (param.initializer) {
            analyze(param.initializer);
        }
    });
    declaration.body.forEachChild(analyze);
    for (const param of topLevelParameters) {
        if (!accessedTopLevelParameters.has(param)) {
            unusedParams.add(param);
        }
    }
    return unusedParams;
}
/**
 * Determines which parameters of a function declaration are used within its `super` call.
 * @param declaration Function whose parameters to search for.
 * @param superCall `super()` call within the function.
 * @param localTypeChecker Type checker scoped to the file in which the function is declared.
 */
function getSuperParameters(declaration, superCall, localTypeChecker) {
    const usedParams = new Set();
    const topLevelParameters = new Set();
    const topLevelParameterNames = new Set();
    // Prepare the parameters for quicker checks further down.
    for (const param of declaration.parameters) {
        if (ts__default["default"].isIdentifier(param.name)) {
            topLevelParameters.add(param);
            topLevelParameterNames.add(param.name.text);
        }
    }
    superCall.forEachChild(function walk(node) {
        if (ts__default["default"].isIdentifier(node) && topLevelParameterNames.has(node.text)) {
            localTypeChecker.getSymbolAtLocation(node)?.declarations?.forEach((decl) => {
                if (ts__default["default"].isParameter(decl) && topLevelParameters.has(decl)) {
                    usedParams.add(decl);
                }
            });
        }
        else {
            node.forEachChild(walk);
        }
    });
    return usedParams;
}
/**
 * Determines if a specific parameter has references to other parameters.
 * @param param Parameter to check.
 * @param allParameters All parameters of the containing function.
 * @param localTypeChecker Type checker scoped to the current file.
 */
function parameterReferencesOtherParameters(param, allParameters, localTypeChecker) {
    // A parameter can only reference other parameters through its initializer.
    if (!param.initializer || allParameters.length < 2) {
        return false;
    }
    const paramNames = new Set();
    for (const current of allParameters) {
        if (current !== param && ts__default["default"].isIdentifier(current.name)) {
            paramNames.add(current.name.text);
        }
    }
    let result = false;
    const analyze = (node) => {
        if (ts__default["default"].isIdentifier(node) && paramNames.has(node.text) && !isAccessedViaThis(node)) {
            const symbol = localTypeChecker.getSymbolAtLocation(node);
            const referencesOtherParam = symbol?.declarations?.some((decl) => {
                return allParameters.includes(decl);
            });
            if (referencesOtherParam) {
                result = true;
            }
        }
        if (!result) {
            node.forEachChild(analyze);
        }
    };
    analyze(param.initializer);
    return result;
}
/** Checks whether a parameter node declares a property on its class. */
function parameterDeclaresProperty(node) {
    return !!node.modifiers?.some(({ kind }) => kind === ts__default["default"].SyntaxKind.PublicKeyword ||
        kind === ts__default["default"].SyntaxKind.PrivateKeyword ||
        kind === ts__default["default"].SyntaxKind.ProtectedKeyword ||
        kind === ts__default["default"].SyntaxKind.ReadonlyKeyword);
}
/** Checks whether a type node is nullable. */
function isNullableType(node) {
    // Apparently `foo: null` is `Parameter<TypeNode<NullKeyword>>`,
    // while `foo: undefined` is `Parameter<UndefinedKeyword>`...
    if (node.kind === ts__default["default"].SyntaxKind.UndefinedKeyword || node.kind === ts__default["default"].SyntaxKind.VoidKeyword) {
        return true;
    }
    if (ts__default["default"].isLiteralTypeNode(node)) {
        return node.literal.kind === ts__default["default"].SyntaxKind.NullKeyword;
    }
    if (ts__default["default"].isUnionTypeNode(node)) {
        return node.types.some(isNullableType);
    }
    return false;
}
/** Checks whether a type node has generic arguments. */
function hasGenerics(node) {
    if (ts__default["default"].isTypeReferenceNode(node)) {
        return node.typeArguments != null && node.typeArguments.length > 0;
    }
    if (ts__default["default"].isUnionTypeNode(node)) {
        return node.types.some(hasGenerics);
    }
    return false;
}
/** Checks whether an identifier is accessed through `this`, e.g. `this.<some identifier>`. */
function isAccessedViaThis(node) {
    return (ts__default["default"].isPropertyAccessExpression(node.parent) &&
        node.parent.expression.kind === ts__default["default"].SyntaxKind.ThisKeyword &&
        node.parent.name === node);
}
/** Finds a `super` call inside of a specific node. */
function findSuperCall(root) {
    let result = null;
    root.forEachChild(function find(node) {
        if (ts__default["default"].isCallExpression(node) && node.expression.kind === ts__default["default"].SyntaxKind.SuperKeyword) {
            result = node;
        }
        else if (result === null) {
            node.forEachChild(find);
        }
    });
    return result;
}

/*!
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.dev/license
 */
/**
 * Finds class property declarations without initializers whose constructor-based initialization
 * can be inlined into the declaration spot after migrating to `inject`. For example:
 *
 * ```ts
 * private foo: number;
 *
 * constructor(private service: MyService) {
 *   this.foo = this.service.getFoo();
 * }
 * ```
 *
 * The initializer of `foo` can be inlined, because `service` will be initialized
 * before it after the `inject` migration has finished running.
 *
 * @param node Class declaration that is being migrated.
 * @param constructor Constructor declaration of the class being migrated.
 * @param localTypeChecker Type checker scoped to the current file.
 */
function findUninitializedPropertiesToCombine(node, constructor, localTypeChecker) {
    let toCombine = null;
    let toHoist = [];
    const membersToDeclarations = new Map();
    for (const member of node.members) {
        if (ts__default["default"].isPropertyDeclaration(member) &&
            !member.initializer &&
            !ts__default["default"].isComputedPropertyName(member.name)) {
            membersToDeclarations.set(member.name.text, member);
        }
    }
    if (membersToDeclarations.size === 0) {
        return null;
    }
    const memberInitializers = getMemberInitializers(constructor);
    if (memberInitializers === null) {
        return null;
    }
    for (const [name, decl] of membersToDeclarations.entries()) {
        if (memberInitializers.has(name)) {
            const initializer = memberInitializers.get(name);
            if (!hasLocalReferences(initializer, constructor, localTypeChecker)) {
                toCombine ??= [];
                toCombine.push({ declaration: membersToDeclarations.get(name), initializer });
            }
        }
        else {
            // Mark members that have no initializers and can't be combined to be hoisted above the
            // injected members. This is either a no-op or it allows us to avoid some patterns internally
            // like the following:
            // ```
            // class Foo {
            //   publicFoo: Foo;
            //   private privateFoo: Foo;
            //
            //   constructor() {
            //     this.initializePrivateFooSomehow();
            //     this.publicFoo = this.privateFoo;
            //   }
            // }
            // ```
            toHoist.push(decl);
        }
    }
    // If no members need to be combined, none need to be hoisted either.
    return toCombine === null ? null : { toCombine, toHoist };
}
/**
 * In some cases properties may be declared out of order, but initialized in the correct order.
 * The internal-specific migration will combine such properties which will result in a compilation
 * error, for example:
 *
 * ```ts
 * class MyClass {
 *   foo: Foo;
 *   bar: Bar;
 *
 *   constructor(bar: Bar) {
 *     this.bar = bar;
 *     this.foo = this.bar.getFoo();
 *   }
 * }
 * ```
 *
 * Will become:
 *
 * ```ts
 * class MyClass {
 *   foo: Foo = this.bar.getFoo();
 *   bar: Bar = inject(Bar);
 * }
 * ```
 *
 * This function determines if cases like this can be saved by reordering the properties so their
 * declaration order matches the order in which they're initialized.
 *
 * @param toCombine Properties that are candidates to be combined.
 * @param constructor
 */
function shouldCombineInInitializationOrder(toCombine, constructor) {
    let combinedMemberReferenceCount = 0;
    let otherMemberReferenceCount = 0;
    const injectedMemberNames = new Set();
    const combinedMemberNames = new Set();
    // Collect the name of constructor parameters that declare new properties.
    // These can be ignored since they'll be hoisted above other properties.
    constructor.parameters.forEach((param) => {
        if (parameterDeclaresProperty(param) && ts__default["default"].isIdentifier(param.name)) {
            injectedMemberNames.add(param.name.text);
        }
    });
    // Collect the names of the properties being combined. We should only reorder
    // the properties if at least one of them refers to another one.
    toCombine.forEach(({ declaration: { name } }) => {
        if (ts__default["default"].isStringLiteralLike(name) || ts__default["default"].isIdentifier(name)) {
            combinedMemberNames.add(name.text);
        }
    });
    // Visit all the initializers and check all the property reads in the form of `this.<name>`.
    // Skip over the ones referring to injected parameters since they're going to be hoisted.
    const walkInitializer = (node) => {
        if (ts__default["default"].isPropertyAccessExpression(node) && node.expression.kind === ts__default["default"].SyntaxKind.ThisKeyword) {
            if (combinedMemberNames.has(node.name.text)) {
                combinedMemberReferenceCount++;
            }
            else if (!injectedMemberNames.has(node.name.text)) {
                otherMemberReferenceCount++;
            }
        }
        node.forEachChild(walkInitializer);
    };
    toCombine.forEach((candidate) => walkInitializer(candidate.initializer));
    // If at the end there is at least one reference between a combined member and another,
    // and there are no references to any other class members, we can safely reorder the
    // properties based on how they were initialized.
    return combinedMemberReferenceCount > 0 && otherMemberReferenceCount === 0;
}
/**
 * Finds the expressions from the constructor that initialize class members, for example:
 *
 * ```ts
 * private foo: number;
 *
 * constructor() {
 *   this.foo = 123;
 * }
 * ```
 *
 * @param constructor Constructor declaration being analyzed.
 */
function getMemberInitializers(constructor) {
    let memberInitializers = null;
    if (!constructor.body) {
        return memberInitializers;
    }
    // Only look at top-level constructor statements.
    for (const node of constructor.body.statements) {
        // Only look for statements in the form of `this.<name> = <expr>;` or `this[<name>] = <expr>;`.
        if (!ts__default["default"].isExpressionStatement(node) ||
            !ts__default["default"].isBinaryExpression(node.expression) ||
            node.expression.operatorToken.kind !== ts__default["default"].SyntaxKind.EqualsToken ||
            (!ts__default["default"].isPropertyAccessExpression(node.expression.left) &&
                !ts__default["default"].isElementAccessExpression(node.expression.left)) ||
            node.expression.left.expression.kind !== ts__default["default"].SyntaxKind.ThisKeyword) {
            continue;
        }
        let name;
        if (ts__default["default"].isPropertyAccessExpression(node.expression.left)) {
            name = node.expression.left.name.text;
        }
        else if (ts__default["default"].isElementAccessExpression(node.expression.left)) {
            name = ts__default["default"].isStringLiteralLike(node.expression.left.argumentExpression)
                ? node.expression.left.argumentExpression.text
                : undefined;
        }
        // If the member is initialized multiple times, take the first one.
        if (name && (!memberInitializers || !memberInitializers.has(name))) {
            memberInitializers = memberInitializers || new Map();
            memberInitializers.set(name, node.expression.right);
        }
    }
    return memberInitializers;
}
/**
 * Determines if a node has references to local symbols defined in the constructor.
 * @param root Expression to check for local references.
 * @param constructor Constructor within which the expression is used.
 * @param localTypeChecker Type checker scoped to the current file.
 */
function hasLocalReferences(root, constructor, localTypeChecker) {
    const sourceFile = root.getSourceFile();
    let hasLocalRefs = false;
    const walk = (node) => {
        // Stop searching if we know that it has local references.
        if (hasLocalRefs) {
            return;
        }
        // Skip identifiers that are accessed via `this` since they're accessing class members
        // that aren't local to the constructor. This is here primarily to catch cases like this
        // where `foo` is defined inside the constructor, but is a class member:
        // ```
        // constructor(private foo: Foo) {
        //   this.bar = this.foo.getFoo();
        // }
        // ```
        if (ts__default["default"].isIdentifier(node) && !isAccessedViaThis(node)) {
            const declarations = localTypeChecker.getSymbolAtLocation(node)?.declarations;
            const isReferencingLocalSymbol = declarations?.some((decl) => 
            // The source file check is a bit redundant since the type checker
            // is local to the file, but it's inexpensive and it can prevent
            // bugs in the future if we decide to use a full type checker.
            decl.getSourceFile() === sourceFile &&
                decl.getStart() >= constructor.getStart() &&
                decl.getEnd() <= constructor.getEnd() &&
                !isInsideInlineFunction(decl, constructor));
            if (isReferencingLocalSymbol) {
                hasLocalRefs = true;
            }
        }
        if (!hasLocalRefs) {
            node.forEachChild(walk);
        }
    };
    walk(root);
    return hasLocalRefs;
}
/**
 * Determines if a node is defined inside of an inline function.
 * @param startNode Node from which to start checking for inline functions.
 * @param boundary Node at which to stop searching.
 */
function isInsideInlineFunction(startNode, boundary) {
    let current = startNode;
    while (current) {
        if (current === boundary) {
            return false;
        }
        if (ts__default["default"].isFunctionDeclaration(current) ||
            ts__default["default"].isFunctionExpression(current) ||
            ts__default["default"].isArrowFunction(current)) {
            return true;
        }
        current = current.parent;
    }
    return false;
}

/**
 * Placeholder used to represent expressions inside the AST.
 * Includes Unicode characters to reduce the chance of collisions.
 */
const PLACEHOLDER = 'ɵɵngGeneratePlaceholderɵɵ';
/**
 * Migrates all of the classes in a `SourceFile` away from constructor injection.
 * @param sourceFile File to be migrated.
 * @param options Options that configure the migration.
 */
function migrateFile(sourceFile, options) {
    // Note: even though externally we have access to the full program with a proper type
    // checker, we create a new one that is local to the file for a couple of reasons:
    // 1. Not having to depend on a program makes running the migration internally faster and easier.
    // 2. All the necessary information for this migration is local so using a file-specific type
    //    checker should speed up the lookups.
    const localTypeChecker = getLocalTypeChecker(sourceFile);
    const analysis = analyzeFile(sourceFile, localTypeChecker, options);
    if (analysis === null || analysis.classes.length === 0) {
        return [];
    }
    const printer = ts__default["default"].createPrinter();
    const tracker = new compiler_host.ChangeTracker(printer);
    analysis.classes.forEach(({ node, constructor, superCall }) => {
        const memberIndentation = leading_space.getLeadingLineWhitespaceOfNode(node.members[0]);
        const prependToClass = [];
        const afterInjectCalls = [];
        const removedStatements = new Set();
        const removedMembers = new Set();
        if (options._internalCombineMemberInitializers) {
            applyInternalOnlyChanges(node, constructor, localTypeChecker, tracker, printer, removedStatements, removedMembers, prependToClass, afterInjectCalls, memberIndentation);
        }
        migrateClass(node, constructor, superCall, options, memberIndentation, prependToClass, afterInjectCalls, removedStatements, removedMembers, localTypeChecker, printer, tracker);
    });
    DI_PARAM_SYMBOLS.forEach((name) => {
        // Both zero and undefined are fine here.
        if (!analysis.nonDecoratorReferences[name]) {
            tracker.removeImport(sourceFile, name, '@angular/core');
        }
    });
    return tracker.recordChanges().get(sourceFile) || [];
}
/**
 * Migrates a class away from constructor injection.
 * @param node Class to be migrated.
 * @param constructor Reference to the class' constructor node.
 * @param superCall Reference to the constructor's `super()` call, if any.
 * @param options Options used to configure the migration.
 * @param memberIndentation Indentation string of the members of the class.
 * @param prependToClass Text that should be prepended to the class.
 * @param afterInjectCalls Text that will be inserted after the newly-added `inject` calls.
 * @param removedStatements Statements that have been removed from the constructor already.
 * @param removedMembers Class members that have been removed by the migration.
 * @param localTypeChecker Type checker set up for the specific file.
 * @param printer Printer used to output AST nodes as strings.
 * @param tracker Object keeping track of the changes made to the file.
 */
function migrateClass(node, constructor, superCall, options, memberIndentation, prependToClass, afterInjectCalls, removedStatements, removedMembers, localTypeChecker, printer, tracker) {
    const sourceFile = node.getSourceFile();
    const unusedParameters = getConstructorUnusedParameters(constructor, localTypeChecker, removedStatements);
    const superParameters = superCall
        ? getSuperParameters(constructor, superCall, localTypeChecker)
        : null;
    const removedStatementCount = removedStatements.size;
    const firstConstructorStatement = constructor.body?.statements.find((statement) => !removedStatements.has(statement));
    const innerReference = superCall || firstConstructorStatement || constructor;
    const innerIndentation = leading_space.getLeadingLineWhitespaceOfNode(innerReference);
    const prependToConstructor = [];
    const afterSuper = [];
    for (const param of constructor.parameters) {
        const usedInSuper = superParameters !== null && superParameters.has(param);
        const usedInConstructor = !unusedParameters.has(param);
        const usesOtherParams = parameterReferencesOtherParameters(param, constructor.parameters, localTypeChecker);
        migrateParameter(param, options, localTypeChecker, printer, tracker, superCall, usedInSuper, usedInConstructor, usesOtherParams, memberIndentation, innerIndentation, prependToConstructor, prependToClass, afterSuper);
    }
    // Delete all of the constructor overloads since below we're either going to
    // remove the implementation, or we're going to delete all of the parameters.
    for (const member of node.members) {
        if (ts__default["default"].isConstructorDeclaration(member) && member !== constructor) {
            removedMembers.add(member);
            tracker.removeNode(member, true);
        }
    }
    if (canRemoveConstructor(options, constructor, removedStatementCount, prependToConstructor, superCall)) {
        // Drop the constructor if it was empty.
        removedMembers.add(constructor);
        tracker.removeNode(constructor, true);
    }
    else {
        // If the constructor contains any statements, only remove the parameters.
        // We always do this no matter what is passed into `backwardsCompatibleConstructors`.
        stripConstructorParameters(constructor, tracker);
        if (prependToConstructor.length > 0) {
            if (firstConstructorStatement ||
                (innerReference !== constructor &&
                    innerReference.getStart() >= constructor.getStart() &&
                    innerReference.getEnd() <= constructor.getEnd())) {
                tracker.insertText(sourceFile, (firstConstructorStatement || innerReference).getFullStart(), `\n${prependToConstructor.join('\n')}\n`);
            }
            else {
                tracker.insertText(sourceFile, constructor.body.getStart() + 1, `\n${prependToConstructor.map((p) => innerIndentation + p).join('\n')}\n${innerIndentation}`);
            }
        }
    }
    if (afterSuper.length > 0 && superCall !== null) {
        // Note that if we can, we should insert before the next statement after the `super` call,
        // rather than after the end of it. Otherwise the string buffering implementation may drop
        // the text if the statement after the `super` call is being deleted. This appears to be because
        // the full start of the next statement appears to always be the end of the `super` call plus 1.
        const nextStatement = getNextPreservedStatement(superCall, removedStatements);
        tracker.insertText(sourceFile, nextStatement ? nextStatement.getFullStart() : constructor.getEnd() - 1, `\n${afterSuper.join('\n')}\n` + (nextStatement ? '' : memberIndentation));
    }
    // Need to resolve this once all constructor signatures have been removed.
    const memberReference = node.members.find((m) => !removedMembers.has(m)) || node.members[0];
    // If `backwardsCompatibleConstructors` is enabled, we maintain
    // backwards compatibility by adding a catch-all signature.
    if (options.backwardsCompatibleConstructors) {
        const extraSignature = `\n${memberIndentation}/** Inserted by Angular inject() migration for backwards compatibility */\n` +
            `${memberIndentation}constructor(...args: unknown[]);`;
        // The new signature always has to be right before the constructor implementation.
        if (memberReference === constructor) {
            prependToClass.push(extraSignature);
        }
        else {
            tracker.insertText(sourceFile, constructor.getFullStart(), '\n' + extraSignature);
        }
    }
    // Push the block of code that should appear after the `inject`
    // calls now once all the members have been generated.
    prependToClass.push(...afterInjectCalls);
    if (prependToClass.length > 0) {
        if (removedMembers.size === node.members.length) {
            tracker.insertText(sourceFile, 
            // If all members were deleted, insert after the last one.
            // This allows us to preserve the indentation.
            node.members.length > 0
                ? node.members[node.members.length - 1].getEnd() + 1
                : node.getEnd() - 1, `${prependToClass.join('\n')}\n`);
        }
        else {
            // Insert the new properties after the first member that hasn't been deleted.
            tracker.insertText(sourceFile, memberReference.getFullStart(), `\n${prependToClass.join('\n')}\n`);
        }
    }
}
/**
 * Migrates a single parameter to `inject()` DI.
 * @param node Parameter to be migrated.
 * @param options Options used to configure the migration.
 * @param localTypeChecker Type checker set up for the specific file.
 * @param printer Printer used to output AST nodes as strings.
 * @param tracker Object keeping track of the changes made to the file.
 * @param superCall Call to `super()` from the class' constructor.
 * @param usedInSuper Whether the parameter is referenced inside of `super`.
 * @param usedInConstructor Whether the parameter is referenced inside the body of the constructor.
 * @param memberIndentation Indentation string to use when inserting new class members.
 * @param innerIndentation Indentation string to use when inserting new constructor statements.
 * @param prependToConstructor Statements to be prepended to the constructor.
 * @param propsToAdd Properties to be added to the class.
 * @param afterSuper Statements to be added after the `super` call.
 */
function migrateParameter(node, options, localTypeChecker, printer, tracker, superCall, usedInSuper, usedInConstructor, usesOtherParams, memberIndentation, innerIndentation, prependToConstructor, propsToAdd, afterSuper) {
    if (!ts__default["default"].isIdentifier(node.name)) {
        return;
    }
    const name = node.name.text;
    const replacementCall = createInjectReplacementCall(node, options, localTypeChecker, printer, tracker);
    const declaresProp = parameterDeclaresProperty(node);
    // If the parameter declares a property, we need to declare it (e.g. `private foo: Foo`).
    if (declaresProp) {
        // We can't initialize the property if it's referenced within a `super` call or  it references
        // other parameters. See the logic further below for the initialization.
        const canInitialize = !usedInSuper && !usesOtherParams;
        const prop = ts__default["default"].factory.createPropertyDeclaration(cloneModifiers(node.modifiers?.filter((modifier) => {
            // Strip out the DI decorators, as well as `public` which is redundant.
            return !ts__default["default"].isDecorator(modifier) && modifier.kind !== ts__default["default"].SyntaxKind.PublicKeyword;
        })), name, 
        // Don't add the question token to private properties since it won't affect interface implementation.
        node.modifiers?.some((modifier) => modifier.kind === ts__default["default"].SyntaxKind.PrivateKeyword)
            ? undefined
            : node.questionToken, canInitialize ? undefined : node.type, canInitialize ? ts__default["default"].factory.createIdentifier(PLACEHOLDER) : undefined);
        propsToAdd.push(memberIndentation +
            replaceNodePlaceholder(node.getSourceFile(), prop, replacementCall, printer));
    }
    // If the parameter is referenced within the constructor, we need to declare it as a variable.
    if (usedInConstructor) {
        if (usedInSuper) {
            // Usages of `this` aren't allowed before `super` calls so we need to
            // create a variable which calls `inject()` directly instead...
            prependToConstructor.push(`${innerIndentation}const ${name} = ${replacementCall};`);
            // ...then we can initialize the property after the `super` call.
            if (declaresProp) {
                afterSuper.push(`${innerIndentation}this.${name} = ${name};`);
            }
        }
        else if (declaresProp) {
            // If the parameter declares a property (`private foo: foo`) and is used inside the class
            // at the same time, we need to ensure that it's initialized to the value from the variable
            // and that we only reference `this` after the `super` call.
            const initializer = `${innerIndentation}const ${name} = this.${name};`;
            if (superCall === null) {
                prependToConstructor.push(initializer);
            }
            else {
                afterSuper.push(initializer);
            }
        }
        else {
            // If the parameter is only referenced in the constructor, we
            // don't need to declare any new properties.
            prependToConstructor.push(`${innerIndentation}const ${name} = ${replacementCall};`);
        }
    }
    else if (usesOtherParams && declaresProp) {
        const toAdd = `${innerIndentation}this.${name} = ${replacementCall};`;
        if (superCall === null) {
            prependToConstructor.push(toAdd);
        }
        else {
            afterSuper.push(toAdd);
        }
    }
}
/**
 * Creates a replacement `inject` call from a function parameter.
 * @param param Parameter for which to generate the `inject` call.
 * @param options Options used to configure the migration.
 * @param localTypeChecker Type checker set up for the specific file.
 * @param printer Printer used to output AST nodes as strings.
 * @param tracker Object keeping track of the changes made to the file.
 */
function createInjectReplacementCall(param, options, localTypeChecker, printer, tracker) {
    const moduleName = '@angular/core';
    const sourceFile = param.getSourceFile();
    const decorators = nodes.getAngularDecorators(localTypeChecker, ts__default["default"].getDecorators(param) || []);
    const literalProps = [];
    const type = param.type;
    let injectedType = '';
    let typeArguments = type && hasGenerics(type) ? [type] : undefined;
    let hasOptionalDecorator = false;
    if (type) {
        // Remove the type arguments from generic type references, because
        // they'll be specified as type arguments to `inject()`.
        if (ts__default["default"].isTypeReferenceNode(type) && type.typeArguments && type.typeArguments.length > 0) {
            injectedType = type.typeName.getText();
        }
        else if (ts__default["default"].isUnionTypeNode(type)) {
            injectedType = (type.types.find((t) => !ts__default["default"].isLiteralTypeNode(t)) || type.types[0]).getText();
        }
        else {
            injectedType = type.getText();
        }
    }
    for (const decorator of decorators) {
        if (decorator.moduleName !== moduleName) {
            continue;
        }
        const firstArg = decorator.node.expression.arguments[0];
        switch (decorator.name) {
            case 'Inject':
                if (firstArg) {
                    const injectResult = migrateInjectDecorator(firstArg, type, localTypeChecker);
                    injectedType = injectResult.injectedType;
                    if (injectResult.typeArguments) {
                        typeArguments = injectResult.typeArguments;
                    }
                }
                break;
            case 'Attribute':
                if (firstArg) {
                    const constructorRef = tracker.addImport(sourceFile, 'HostAttributeToken', moduleName);
                    const expression = ts__default["default"].factory.createNewExpression(constructorRef, undefined, [firstArg]);
                    injectedType = printer.printNode(ts__default["default"].EmitHint.Unspecified, expression, sourceFile);
                    typeArguments = undefined;
                }
                break;
            case 'Optional':
                hasOptionalDecorator = true;
                literalProps.push(ts__default["default"].factory.createPropertyAssignment('optional', ts__default["default"].factory.createTrue()));
                break;
            case 'SkipSelf':
                literalProps.push(ts__default["default"].factory.createPropertyAssignment('skipSelf', ts__default["default"].factory.createTrue()));
                break;
            case 'Self':
                literalProps.push(ts__default["default"].factory.createPropertyAssignment('self', ts__default["default"].factory.createTrue()));
                break;
            case 'Host':
                literalProps.push(ts__default["default"].factory.createPropertyAssignment('host', ts__default["default"].factory.createTrue()));
                break;
        }
    }
    // The injected type might be a `TypeNode` which we can't easily convert into an `Expression`.
    // Since the value gets passed through directly anyway, we generate the call using a placeholder
    // which we then replace with the raw text of the `TypeNode`.
    const injectRef = tracker.addImport(param.getSourceFile(), 'inject', moduleName);
    const args = [ts__default["default"].factory.createIdentifier(PLACEHOLDER)];
    if (literalProps.length > 0) {
        args.push(ts__default["default"].factory.createObjectLiteralExpression(literalProps));
    }
    let expression = ts__default["default"].factory.createCallExpression(injectRef, typeArguments, args);
    if (hasOptionalDecorator && options.nonNullableOptional) {
        const hasNullableType = param.questionToken != null || (param.type != null && isNullableType(param.type));
        // Only wrap the expression if the type wasn't already nullable.
        // If it was, the app was likely accounting for it already.
        if (!hasNullableType) {
            expression = ts__default["default"].factory.createNonNullExpression(expression);
        }
    }
    // If the parameter is initialized, add the initializer as a fallback.
    if (param.initializer) {
        expression = ts__default["default"].factory.createBinaryExpression(expression, ts__default["default"].SyntaxKind.QuestionQuestionToken, param.initializer);
    }
    return replaceNodePlaceholder(param.getSourceFile(), expression, injectedType, printer);
}
/**
 * Migrates a parameter based on its `@Inject()` decorator.
 * @param firstArg First argument to `@Inject()`.
 * @param type Type of the parameter.
 * @param localTypeChecker Type checker set up for the specific file.
 */
function migrateInjectDecorator(firstArg, type, localTypeChecker) {
    let injectedType = firstArg.getText();
    let typeArguments = null;
    // `inject` no longer officially supports string injection so we need
    // to cast to any. We maintain the type by passing it as a generic.
    if (ts__default["default"].isStringLiteralLike(firstArg)) {
        typeArguments = [type || ts__default["default"].factory.createKeywordTypeNode(ts__default["default"].SyntaxKind.AnyKeyword)];
        injectedType += ' as any';
    }
    else if (ts__default["default"].isCallExpression(firstArg) &&
        ts__default["default"].isIdentifier(firstArg.expression) &&
        firstArg.arguments.length === 1) {
        const callImport = imports.getImportOfIdentifier(localTypeChecker, firstArg.expression);
        const arrowFn = firstArg.arguments[0];
        // If the first parameter is a `forwardRef`, unwrap it for a more
        // accurate type and because it's no longer necessary.
        if (callImport !== null &&
            callImport.name === 'forwardRef' &&
            callImport.importModule === '@angular/core' &&
            ts__default["default"].isArrowFunction(arrowFn)) {
            if (ts__default["default"].isBlock(arrowFn.body)) {
                const returnStatement = arrowFn.body.statements.find((stmt) => ts__default["default"].isReturnStatement(stmt));
                if (returnStatement && returnStatement.expression) {
                    injectedType = returnStatement.expression.getText();
                }
            }
            else {
                injectedType = arrowFn.body.getText();
            }
        }
    }
    else if (type &&
        (ts__default["default"].isTypeReferenceNode(type) ||
            ts__default["default"].isTypeLiteralNode(type) ||
            ts__default["default"].isTupleTypeNode(type) ||
            (ts__default["default"].isUnionTypeNode(type) && type.types.some(ts__default["default"].isTypeReferenceNode)))) {
        typeArguments = [type];
    }
    return { injectedType, typeArguments };
}
/**
 * Removes the parameters from a constructor. This is a bit more complex than just replacing an AST
 * node, because `NodeArray.pos` includes any leading whitespace, but `NodeArray.end` does **not**
 * include trailing whitespace. Since we want to produce somewhat formatted code, we need to find
 * the end of the arguments ourselves. We do it by finding the next parenthesis after the last
 * parameter.
 * @param node Constructor from which to remove the parameters.
 * @param tracker Object keeping track of the changes made to the file.
 */
function stripConstructorParameters(node, tracker) {
    if (node.parameters.length === 0) {
        return;
    }
    const constructorText = node.getText();
    const lastParamText = node.parameters[node.parameters.length - 1].getText();
    const lastParamStart = constructorText.indexOf(lastParamText);
    // This shouldn't happen, but bail out just in case so we don't mangle the code.
    if (lastParamStart === -1) {
        return;
    }
    for (let i = lastParamStart + lastParamText.length; i < constructorText.length; i++) {
        const char = constructorText[i];
        if (char === ')') {
            tracker.replaceText(node.getSourceFile(), node.parameters.pos, node.getStart() + i - node.parameters.pos, '');
            break;
        }
    }
}
/**
 * Creates a type checker scoped to a specific file.
 * @param sourceFile File for which to create the type checker.
 */
function getLocalTypeChecker(sourceFile) {
    const options = { noEmit: true, skipLibCheck: true };
    const host = ts__default["default"].createCompilerHost(options);
    host.getSourceFile = (fileName) => (fileName === sourceFile.fileName ? sourceFile : undefined);
    const program = ts__default["default"].createProgram({
        rootNames: [sourceFile.fileName],
        options,
        host,
    });
    return program.getTypeChecker();
}
/**
 * Prints out an AST node and replaces the placeholder inside of it.
 * @param sourceFile File in which the node will be inserted.
 * @param node Node to be printed out.
 * @param replacement Replacement for the placeholder.
 * @param printer Printer used to output AST nodes as strings.
 */
function replaceNodePlaceholder(sourceFile, node, replacement, printer) {
    const result = printer.printNode(ts__default["default"].EmitHint.Unspecified, node, sourceFile);
    return result.replace(PLACEHOLDER, replacement);
}
/**
 * Clones an optional array of modifiers. Can be useful to
 * strip the comments from a node with modifiers.
 */
function cloneModifiers(modifiers) {
    return modifiers?.map((modifier) => {
        return ts__default["default"].isDecorator(modifier)
            ? ts__default["default"].factory.createDecorator(modifier.expression)
            : ts__default["default"].factory.createModifier(modifier.kind);
    });
}
/**
 * Clones the name of a property. Can be useful to strip away
 * the comments of a property without modifiers.
 */
function cloneName(node) {
    switch (node.kind) {
        case ts__default["default"].SyntaxKind.Identifier:
            return ts__default["default"].factory.createIdentifier(node.text);
        case ts__default["default"].SyntaxKind.StringLiteral:
            return ts__default["default"].factory.createStringLiteral(node.text, node.getText()[0] === `'`);
        case ts__default["default"].SyntaxKind.NoSubstitutionTemplateLiteral:
            return ts__default["default"].factory.createNoSubstitutionTemplateLiteral(node.text, node.rawText);
        case ts__default["default"].SyntaxKind.NumericLiteral:
            return ts__default["default"].factory.createNumericLiteral(node.text);
        case ts__default["default"].SyntaxKind.ComputedPropertyName:
            return ts__default["default"].factory.createComputedPropertyName(node.expression);
        case ts__default["default"].SyntaxKind.PrivateIdentifier:
            return ts__default["default"].factory.createPrivateIdentifier(node.text);
        default:
            return node;
    }
}
/**
 * Determines whether it's safe to delete a class constructor.
 * @param options Options used to configure the migration.
 * @param constructor Node representing the constructor.
 * @param removedStatementCount Number of statements that were removed by the migration.
 * @param prependToConstructor Statements that should be prepended to the constructor.
 * @param superCall Node representing the `super()` call within the constructor.
 */
function canRemoveConstructor(options, constructor, removedStatementCount, prependToConstructor, superCall) {
    if (options.backwardsCompatibleConstructors || prependToConstructor.length > 0) {
        return false;
    }
    const statementCount = constructor.body
        ? constructor.body.statements.length - removedStatementCount
        : 0;
    return (statementCount === 0 ||
        (statementCount === 1 && superCall !== null && superCall.arguments.length === 0));
}
/**
 * Gets the next statement after a node that *won't* be deleted by the migration.
 * @param startNode Node from which to start the search.
 * @param removedStatements Statements that have been removed by the migration.
 * @returns
 */
function getNextPreservedStatement(startNode, removedStatements) {
    const body = nodes.closestNode(startNode, ts__default["default"].isBlock);
    const closestStatement = nodes.closestNode(startNode, ts__default["default"].isStatement);
    if (body === null || closestStatement === null) {
        return null;
    }
    const index = body.statements.indexOf(closestStatement);
    if (index === -1) {
        return null;
    }
    for (let i = index + 1; i < body.statements.length; i++) {
        if (!removedStatements.has(body.statements[i])) {
            return body.statements[i];
        }
    }
    return null;
}
/**
 * Applies the internal-specific migrations to a class.
 * @param node Class being migrated.
 * @param constructor The migrated class' constructor.
 * @param localTypeChecker File-specific type checker.
 * @param tracker Object keeping track of the changes.
 * @param printer Printer used to output AST nodes as text.
 * @param removedStatements Statements that have been removed by the migration.
 * @param removedMembers Class members that have been removed by the migration.
 * @param prependToClass Text that will be prepended to a class.
 * @param afterInjectCalls Text that will be inserted after the newly-added `inject` calls.
 * @param memberIndentation Indentation string of the class' members.
 */
function applyInternalOnlyChanges(node, constructor, localTypeChecker, tracker, printer, removedStatements, removedMembers, prependToClass, afterInjectCalls, memberIndentation) {
    const result = findUninitializedPropertiesToCombine(node, constructor, localTypeChecker);
    if (result === null) {
        return;
    }
    const preserveInitOrder = shouldCombineInInitializationOrder(result.toCombine, constructor);
    // Sort the combined members based on the declaration order of their initializers, only if
    // we've determined that would be safe. Note that `Array.prototype.sort` is in-place so we
    // can just call it conditionally here.
    if (preserveInitOrder) {
        result.toCombine.sort((a, b) => a.initializer.getStart() - b.initializer.getStart());
    }
    result.toCombine.forEach(({ declaration, initializer }) => {
        const initializerStatement = nodes.closestNode(initializer, ts__default["default"].isStatement);
        const newProperty = ts__default["default"].factory.createPropertyDeclaration(cloneModifiers(declaration.modifiers), cloneName(declaration.name), declaration.questionToken, declaration.type, initializer);
        // If the initialization order is being preserved, we have to remove the original
        // declaration and re-declare it. Otherwise we can do the replacement in-place.
        if (preserveInitOrder) {
            tracker.removeNode(declaration, true);
            removedMembers.add(declaration);
            afterInjectCalls.push(memberIndentation +
                printer.printNode(ts__default["default"].EmitHint.Unspecified, newProperty, declaration.getSourceFile()));
        }
        else {
            tracker.replaceNode(declaration, newProperty);
        }
        // This should always be defined, but null check it just in case.
        if (initializerStatement) {
            tracker.removeNode(initializerStatement, true);
            removedStatements.add(initializerStatement);
        }
    });
    result.toHoist.forEach((decl) => {
        prependToClass.push(memberIndentation + printer.printNode(ts__default["default"].EmitHint.Unspecified, decl, decl.getSourceFile()));
        tracker.removeNode(decl, true);
        removedMembers.add(decl);
    });
    // If we added any hoisted properties, separate them visually with a new line.
    if (prependToClass.length > 0) {
        prependToClass.push('');
    }
}

function migrate(options) {
    return async (tree) => {
        const basePath = process.cwd();
        const pathToMigrate = compiler_host.normalizePath(p.join(basePath, options.path));
        let allPaths = [];
        if (pathToMigrate.trim() !== '') {
            allPaths.push(pathToMigrate);
        }
        if (!allPaths.length) {
            throw new schematics.SchematicsException('Could not find any tsconfig file. Cannot run the inject migration.');
        }
        for (const tsconfigPath of allPaths) {
            runInjectMigration(tree, tsconfigPath, basePath, pathToMigrate, options);
        }
    };
}
function runInjectMigration(tree, tsconfigPath, basePath, pathToMigrate, schematicOptions) {
    if (schematicOptions.path.startsWith('..')) {
        throw new schematics.SchematicsException('Cannot run inject migration outside of the current project.');
    }
    const program = compiler_host.createMigrationProgram(tree, tsconfigPath, basePath);
    const sourceFiles = program
        .getSourceFiles()
        .filter((sourceFile) => sourceFile.fileName.startsWith(pathToMigrate) &&
        compiler_host.canMigrateFile(basePath, sourceFile, program));
    if (sourceFiles.length === 0) {
        throw new schematics.SchematicsException(`Could not find any files to migrate under the path ${pathToMigrate}. Cannot run the inject migration.`);
    }
    for (const sourceFile of sourceFiles) {
        const changes = migrateFile(sourceFile, schematicOptions);
        if (changes.length > 0) {
            const update = tree.beginUpdate(p.relative(basePath, sourceFile.fileName));
            for (const change of changes) {
                if (change.removeLength != null) {
                    update.remove(change.start, change.removeLength);
                }
                update.insertRight(change.start, change.text);
            }
            tree.commitUpdate(update);
        }
    }
}

exports.migrate = migrate;