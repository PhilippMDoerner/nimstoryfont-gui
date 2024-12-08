import { CLIOptions } from 'storybook/internal/types';
import { BuilderOutput } from '@angular-devkit/architect';
import { StylePreprocessorOptions } from '@angular-devkit/build-angular';
import { AssetPattern, SourceMapUnion, StyleElement } from '@angular-devkit/build-angular/src/builders/browser/schema';
import { JsonObject } from '@angular-devkit/core';
export type StorybookBuilderOptions = JsonObject & {
    browserTarget?: string | null;
    tsConfig?: string;
    test: boolean;
    docs: boolean;
    compodoc: boolean;
    compodocArgs: string[];
    enableProdMode?: boolean;
    styles?: StyleElement[];
    stylePreprocessorOptions?: StylePreprocessorOptions;
    preserveSymlinks?: boolean;
    assets?: AssetPattern[];
    sourceMap?: SourceMapUnion;
} & Pick<CLIOptions, 'outputDir' | 'configDir' | 'loglevel' | 'quiet' | 'test' | 'webpackStatsJson' | 'statsJson' | 'disableTelemetry' | 'debugWebpack' | 'previewUrl'>;
export type StorybookBuilderOutput = JsonObject & BuilderOutput & {
    [key: string]: any;
};
declare const _default: import("@angular-devkit/architect/src/internal").Builder<JsonObject & {
    browserTarget?: string | null | undefined;
    tsConfig?: string | undefined;
    test: boolean;
    docs: boolean;
    compodoc: boolean;
    compodocArgs: string[];
    enableProdMode?: boolean | undefined;
    styles?: StyleElement[] | undefined;
    stylePreprocessorOptions?: StylePreprocessorOptions | undefined;
    preserveSymlinks?: boolean | undefined;
    assets?: AssetPattern[] | undefined;
    sourceMap?: SourceMapUnion | undefined;
} & Pick<CLIOptions, "statsJson" | "outputDir" | "configDir" | "loglevel" | "quiet" | "test" | "webpackStatsJson" | "disableTelemetry" | "debugWebpack" | "previewUrl">>;
export default _default;
