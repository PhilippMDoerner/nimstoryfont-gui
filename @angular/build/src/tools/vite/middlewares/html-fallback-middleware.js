"use strict";
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.dev/license
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.angularHtmlFallbackMiddleware = angularHtmlFallbackMiddleware;
const utils_1 = require("../utils");
const ALLOWED_FALLBACK_METHODS = Object.freeze(['GET', 'HEAD']);
function angularHtmlFallbackMiddleware(req, _res, next) {
    // Similar to how it is handled in vite
    // https://github.com/vitejs/vite/blob/main/packages/vite/src/node/server/middlewares/htmlFallback.ts#L15C19-L15C45
    if (!req.method || !ALLOWED_FALLBACK_METHODS.includes(req.method)) {
        // No fallback for unsupported request methods
        next();
        return;
    }
    if (req.url) {
        const mimeType = (0, utils_1.lookupMimeTypeFromRequest)(req.url);
        if (mimeType === 'text/html' || mimeType === 'application/xhtml+xml') {
            // eslint-disable-next-line no-console
            console.warn(`Request for HTML file "${req.url}" was received but no asset found. Asset may be missing from build.`);
        }
        else if (mimeType) {
            // No fallback for request of asset-like files
            next();
            return;
        }
    }
    if (!req.headers.accept ||
        req.headers.accept.includes('text/html') ||
        req.headers.accept.includes('text/*') ||
        req.headers.accept.includes('*/*')) {
        req.url = '/index.html';
    }
    next();
}