import { BuilderOutput } from '@angular-devkit/architect';
import { JsonObject } from '@angular-devkit/core';
import { StylePreprocessorOptions } from '@angular-devkit/build-angular';
import { CLIOptions } from '@storybook/types';
import { AssetPattern, StyleElement } from '@angular-devkit/build-angular/src/builders/browser/schema';
export type StorybookBuilderOptions = JsonObject & {
    browserTarget?: string | null;
    tsConfig?: string;
    docs: boolean;
    compodoc: boolean;
    compodocArgs: string[];
    styles?: StyleElement[];
    stylePreprocessorOptions?: StylePreprocessorOptions;
    assets?: AssetPattern[];
} & Pick<CLIOptions, 'outputDir' | 'configDir' | 'loglevel' | 'quiet' | 'webpackStatsJson' | 'disableTelemetry'>;
export type StorybookBuilderOutput = JsonObject & BuilderOutput & {};
declare const _default: import("@angular-devkit/architect/src/internal").Builder<any>;
export default _default;
