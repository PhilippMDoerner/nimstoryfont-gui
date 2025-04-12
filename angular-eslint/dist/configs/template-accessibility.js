"use strict";
/**
 * DO NOT EDIT THIS FILE
 *
 * In order to update this config, please run `pnpm update-rule-configs`.
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const template_base_1 = __importDefault(require("./template-base"));
exports.default = (plugin, parser) => [
    (0, template_base_1.default)(plugin, parser),
    {
        name: 'angular-eslint/template-accessibility',
        rules: {
            '@angular-eslint/template/alt-text': 'error',
            '@angular-eslint/template/click-events-have-key-events': 'error',
            '@angular-eslint/template/elements-content': 'error',
            '@angular-eslint/template/interactive-supports-focus': 'error',
            '@angular-eslint/template/label-has-associated-control': 'error',
            '@angular-eslint/template/mouse-events-have-key-events': 'error',
            '@angular-eslint/template/no-autofocus': 'error',
            '@angular-eslint/template/no-distracting-elements': 'error',
            '@angular-eslint/template/role-has-required-aria': 'error',
            '@angular-eslint/template/table-scope': 'error',
            '@angular-eslint/template/valid-aria': 'error',
        },
    },
];
