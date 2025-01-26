"use strict";
// THIS FILE IS AUTOMATICALLY GENERATED. TO UPDATE THIS FILE YOU NEED TO CHANGE THE
// CORRESPONDING JSON SCHEMA FILE, THEN RUN devkit-admin build (or bazel build ...).
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExperimentalPlatform = exports.OutputMode = exports.OutputHashing = exports.InlineStyleLanguage = exports.I18NTranslation = exports.CrossOrigin = exports.Type = void 0;
/**
 * The type of budget.
 */
var Type;
(function (Type) {
    Type["All"] = "all";
    Type["AllScript"] = "allScript";
    Type["Any"] = "any";
    Type["AnyComponentStyle"] = "anyComponentStyle";
    Type["AnyScript"] = "anyScript";
    Type["Bundle"] = "bundle";
    Type["Initial"] = "initial";
})(Type || (exports.Type = Type = {}));
/**
 * Define the crossorigin attribute setting of elements that provide CORS support.
 */
var CrossOrigin;
(function (CrossOrigin) {
    CrossOrigin["Anonymous"] = "anonymous";
    CrossOrigin["None"] = "none";
    CrossOrigin["UseCredentials"] = "use-credentials";
})(CrossOrigin || (exports.CrossOrigin = CrossOrigin = {}));
/**
 * How to handle duplicate translations for i18n.
 *
 * How to handle missing translations for i18n.
 */
var I18NTranslation;
(function (I18NTranslation) {
    I18NTranslation["Error"] = "error";
    I18NTranslation["Ignore"] = "ignore";
    I18NTranslation["Warning"] = "warning";
})(I18NTranslation || (exports.I18NTranslation = I18NTranslation = {}));
/**
 * The stylesheet language to use for the application's inline component styles.
 */
var InlineStyleLanguage;
(function (InlineStyleLanguage) {
    InlineStyleLanguage["Css"] = "css";
    InlineStyleLanguage["Less"] = "less";
    InlineStyleLanguage["Sass"] = "sass";
    InlineStyleLanguage["Scss"] = "scss";
})(InlineStyleLanguage || (exports.InlineStyleLanguage = InlineStyleLanguage = {}));
/**
 * Define the output filename cache-busting hashing mode.
 */
var OutputHashing;
(function (OutputHashing) {
    OutputHashing["All"] = "all";
    OutputHashing["Bundles"] = "bundles";
    OutputHashing["Media"] = "media";
    OutputHashing["None"] = "none";
})(OutputHashing || (exports.OutputHashing = OutputHashing = {}));
/**
 * Defines the build output target. 'static': Generates a static site for deployment on any
 * static hosting service. 'server': Produces an application designed for deployment on a
 * server that supports server-side rendering (SSR).
 */
var OutputMode;
(function (OutputMode) {
    OutputMode["Server"] = "server";
    OutputMode["Static"] = "static";
})(OutputMode || (exports.OutputMode = OutputMode = {}));
/**
 * Specifies the platform for which the server bundle is generated. This affects the APIs
 * and modules available in the server-side code.
 *
 * - `node`:  (Default) Generates a bundle optimized for Node.js environments.
 * - `neutral`: Generates a platform-neutral bundle suitable for environments like edge
 * workers, and other serverless platforms. This option avoids using Node.js-specific APIs,
 * making the bundle more portable.
 *
 * Please note that this feature does not provide polyfills for Node.js modules.
 * Additionally, it is experimental, and the schematics may undergo changes in future
 * versions.
 */
var ExperimentalPlatform;
(function (ExperimentalPlatform) {
    ExperimentalPlatform["Neutral"] = "neutral";
    ExperimentalPlatform["Node"] = "node";
})(ExperimentalPlatform || (exports.ExperimentalPlatform = ExperimentalPlatform = {}));