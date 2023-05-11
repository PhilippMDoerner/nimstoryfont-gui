"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.runCompodoc = void 0;
const rxjs_1 = require("rxjs");
const path = __importStar(require("path"));
const cli_1 = require("@storybook/cli");
const hasTsConfigArg = (args) => args.indexOf('-p') !== -1;
const hasOutputArg = (args) => args.indexOf('-d') !== -1 || args.indexOf('--output') !== -1;
// path.relative is necessary to workaround a compodoc issue with
// absolute paths on windows machines
const toRelativePath = (pathToTsConfig) => {
    return path.isAbsolute(pathToTsConfig) ? path.relative('.', pathToTsConfig) : pathToTsConfig;
};
const runCompodoc = ({ compodocArgs, tsconfig }, context) => {
    return new rxjs_1.Observable((observer) => {
        const tsConfigPath = toRelativePath(tsconfig);
        const finalCompodocArgs = [
            ...(hasTsConfigArg(compodocArgs) ? [] : ['-p', tsConfigPath]),
            ...(hasOutputArg(compodocArgs) ? [] : ['-d', `${context.workspaceRoot || '.'}`]),
            ...compodocArgs,
        ];
        const packageManager = cli_1.JsPackageManagerFactory.getPackageManager();
        try {
            const stdout = packageManager.runPackageCommand('compodoc', finalCompodocArgs, context.workspaceRoot);
            context.logger.info(stdout);
            observer.next();
            observer.complete();
        }
        catch (e) {
            context.logger.error(e);
            observer.error();
        }
    });
};
exports.runCompodoc = runCompodoc;
