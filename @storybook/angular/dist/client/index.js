"use strict";
/// <reference types="webpack-env" />
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
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.applicationConfig = exports.componentWrapperDecorator = exports.moduleMetadata = void 0;
require("./globals");
// eslint-disable-next-line import/export
__exportStar(require("./public-api"), exports);
// eslint-disable-next-line import/export
__exportStar(require("./public-types"), exports);
var decorators_1 = require("./decorators");
Object.defineProperty(exports, "moduleMetadata", { enumerable: true, get: function () { return decorators_1.moduleMetadata; } });
Object.defineProperty(exports, "componentWrapperDecorator", { enumerable: true, get: function () { return decorators_1.componentWrapperDecorator; } });
Object.defineProperty(exports, "applicationConfig", { enumerable: true, get: function () { return decorators_1.applicationConfig; } });
// optimization: stop HMR propagation in webpack
module?.hot?.decline();
