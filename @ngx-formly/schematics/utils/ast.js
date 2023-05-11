"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.findModuleFromOptions = exports.getStylesPath = exports.getIndexHtmlPath = exports.addModuleImportToModule = exports.addModuleImportToRootModule = exports.parseSourceFile = void 0;
const core_1 = require("@angular-devkit/core");
const schematics_1 = require("@angular-devkit/schematics");
const ts = require("typescript");
const ast_utils_1 = require("@schematics/angular/utility/ast-utils");
const change_1 = require("@schematics/angular/utility/change");
const ng_ast_utils_1 = require("@schematics/angular/utility/ng-ast-utils");
const find_module_1 = require("@schematics/angular/utility/find-module");
const workspace_1 = require("@schematics/angular/utility/workspace");
/** Reads file given path and returns TypeScript source file. */
function parseSourceFile(host, path) {
    const buffer = host.read(path);
    if (!buffer) {
        throw new schematics_1.SchematicsException(`Could not find file for path: ${path}`);
    }
    return ts.createSourceFile(path, buffer.toString(), ts.ScriptTarget.Latest, true);
}
exports.parseSourceFile = parseSourceFile;
/** Import and add module to root app module. */
function addModuleImportToRootModule(host, moduleName, src, project) {
    const modulePath = (0, ng_ast_utils_1.getAppModulePath)(host, project.architect.build.options.main);
    addModuleImportToModule(host, modulePath, moduleName, src);
}
exports.addModuleImportToRootModule = addModuleImportToRootModule;
/**
 * Import and add module to specific module path.
 * @param host the tree we are updating
 * @param modulePath src location of the module to import
 * @param moduleName name of module to import
 * @param src src location to import
 */
function addModuleImportToModule(host, modulePath, moduleName, src) {
    const moduleSource = parseSourceFile(host, modulePath);
    if (!moduleSource) {
        throw new schematics_1.SchematicsException(`Module not found: ${modulePath}`);
    }
    const changes = (0, ast_utils_1.addImportToModule)(moduleSource, modulePath, moduleName, src);
    const recorder = host.beginUpdate(modulePath);
    changes.forEach((change) => {
        if (change instanceof change_1.InsertChange) {
            recorder.insertLeft(change.pos, change.toAdd);
        }
    });
    host.commitUpdate(recorder);
}
exports.addModuleImportToModule = addModuleImportToModule;
/** Gets the app index.html file */
function getIndexHtmlPath(host, project) {
    const buildTarget = project.architect.build.options;
    if (buildTarget.index && buildTarget.index.endsWith('index.html')) {
        return buildTarget.index;
    }
    throw new schematics_1.SchematicsException('No index.html file was found.');
}
exports.getIndexHtmlPath = getIndexHtmlPath;
/** Get the root stylesheet file. */
function getStylesPath(host, project) {
    const buildTarget = project.architect['build'];
    if (buildTarget.options && buildTarget.options.styles && buildTarget.options.styles.length) {
        const styles = buildTarget.options.styles.map(s => typeof s === 'string' ? s : s.input);
        // First, see if any of the assets is called "styles.(le|sc|c)ss", which is the default
        // "main" style sheet.
        const defaultMainStylePath = styles.find(a => /styles\.(c|le|sc)ss/.test(a));
        if (defaultMainStylePath) {
            return (0, core_1.normalize)(defaultMainStylePath);
        }
        // If there was no obvious default file, use the first style asset.
        const fallbackStylePath = styles.find(a => /\.(c|le|sc)ss/.test(a));
        if (fallbackStylePath) {
            return (0, core_1.normalize)(fallbackStylePath);
        }
    }
    throw new schematics_1.SchematicsException('No style files could be found into which a theme could be added');
}
exports.getStylesPath = getStylesPath;
/** Wraps the internal find module from options with undefined path handling  */
function findModuleFromOptions(host, options) {
    return __awaiter(this, void 0, void 0, function* () {
        const workspace = yield (0, workspace_1.getWorkspace)(host);
        if (!options.project) {
            options.project = Array.from(workspace.projects.keys())[0];
        }
        const project = workspace.projects.get(options.project);
        if (options.path === undefined) {
            options.path = `/${project.root}/src/app`;
        }
        return (0, find_module_1.findModuleFromOptions)(host, options);
    });
}
exports.findModuleFromOptions = findModuleFromOptions;
//# sourceMappingURL=ast.js.map