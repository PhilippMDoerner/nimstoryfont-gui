import * as t from '@babel/types';
import * as generate from '@babel/generator';
import { ComponentAnnotations, StoryAnnotations } from '@storybook/types';
import * as parser from '@babel/parser';
import { ParserOptions } from '@babel/parser';

interface CsfOptions {
    fileName?: string;
    makeTitle: (userTitle: string) => string;
}
declare class NoMetaError extends Error {
    constructor(ast: t.Node, fileName?: string);
}
interface StaticMeta extends Pick<ComponentAnnotations, 'id' | 'title' | 'includeStories' | 'excludeStories' | 'tags'> {
    component?: string;
}
interface StaticStory extends Pick<StoryAnnotations, 'name' | 'parameters' | 'tags'> {
    id: string;
}
declare class CsfFile {
    _ast: t.File;
    _fileName: string;
    _makeTitle: (title: string) => string;
    _meta?: StaticMeta;
    _stories: Record<string, StaticStory>;
    _metaAnnotations: Record<string, t.Node>;
    _storyExports: Record<string, t.VariableDeclarator | t.FunctionDeclaration>;
    _metaStatement: t.Statement | undefined;
    _metaNode: t.Expression | undefined;
    _storyStatements: Record<string, t.ExportNamedDeclaration>;
    _storyAnnotations: Record<string, Record<string, t.Node>>;
    _templates: Record<string, t.Expression>;
    _namedExportsOrder?: string[];
    imports: string[];
    constructor(ast: t.File, { fileName, makeTitle }: CsfOptions);
    _parseTitle(value: t.Node): string;
    _parseMeta(declaration: t.ObjectExpression, program: t.Program): void;
    getStoryExport(key: string): t.Node;
    parse(): this;
    get meta(): StaticMeta;
    get stories(): StaticStory[];
}
declare const loadCsf: (code: string, options: CsfOptions) => CsfFile;
interface FormatOptions {
    sourceMaps?: boolean;
}
declare const formatCsf: (csf: CsfFile, options?: FormatOptions) => string | generate.GeneratorResult;
declare const readCsf: (fileName: string, options: CsfOptions) => Promise<CsfFile>;
declare const writeCsf: (csf: CsfFile, fileName?: string) => Promise<void>;

declare class ConfigFile {
    _ast: t.File;
    _code: string;
    _exports: Record<string, t.Expression>;
    _exportDecls: Record<string, t.VariableDeclarator>;
    _exportsObject: t.ObjectExpression | undefined;
    _quotes: 'single' | 'double' | undefined;
    fileName?: string;
    hasDefaultExport: boolean;
    constructor(ast: t.File, code: string, fileName?: string);
    parse(): this;
    getFieldNode(path: string[]): t.Node;
    getFieldProperties(path: string[]): t.ObjectProperty[];
    getFieldValue(path: string[]): any;
    getSafeFieldValue(path: string[]): any;
    setFieldNode(path: string[], expr: t.Expression): void;
    /**
     * Returns the name of a node in a given path, supporting the following formats:
     * 1. { framework: 'value' }
     * 2. { framework: { name: 'value', options: {} } }
     */
    /**
     * Returns the name of a node in a given path, supporting the following formats:
     * @example
     * // 1. { framework: 'framework-name' }
     * // 2. { framework: { name: 'framework-name', options: {} }
     * getNameFromPath(['framework']) // => 'framework-name'
     */
    getNameFromPath(path: string[]): string | undefined;
    /**
     * Returns an array of names of a node in a given path, supporting the following formats:
     * @example
     * const config = {
     *   addons: [
     *     'first-addon',
     *     { name: 'second-addon', options: {} }
     *   ]
     * }
     * // => ['first-addon', 'second-addon']
     * getNamesFromPath(['addons'])
     *
     */
    getNamesFromPath(path: string[]): string[] | undefined;
    /**
     * Given a node and a fallback property, returns a **non-evaluated** string value of the node.
     * 1. { node: 'value' }
     * 2. { node: { fallbackProperty: 'value' } }
     */
    _getPresetValue(node: t.Node, fallbackProperty: string): string;
    removeField(path: string[]): void;
    appendValueToArray(path: string[], value: any): void;
    appendNodeToArray(path: string[], node: t.Expression): void;
    _inferQuotes(): "single" | "double";
    valueToNode(value: any): t.Expression;
    setFieldValue(path: string[], value: any): void;
}
declare const loadConfig: (code: string, fileName?: string) => ConfigFile;
declare const formatConfig: (config: ConfigFile) => string;
declare const readConfig: (fileName: string) => Promise<ConfigFile>;
declare const writeConfig: (config: ConfigFile, fileName?: string) => Promise<void>;

declare const getStorySortParameter: (previewCode: string) => any;

interface EnrichCsfOptions {
    disableSource?: boolean;
    disableDescription?: boolean;
}
declare const enrichCsfStory: (csf: CsfFile, key: string, options?: EnrichCsfOptions) => void;
declare const enrichCsfMeta: (csf: CsfFile, options?: EnrichCsfOptions) => void;
declare const enrichCsf: (csf: CsfFile, options?: EnrichCsfOptions) => void;
declare const extractSource: (node: t.Node) => string;
declare const extractDescription: (node?: t.Node) => string;

declare const parserOptions: ParserOptions;
declare const babelParse: (code: string) => any;
declare const babelParseExpression: (code: string) => parser.ParseResult<t.Expression>;

export { ConfigFile, CsfFile, CsfOptions, EnrichCsfOptions, NoMetaError, StaticMeta, StaticStory, babelParse, babelParseExpression, enrichCsf, enrichCsfMeta, enrichCsfStory, extractDescription, extractSource, formatConfig, formatCsf, getStorySortParameter, loadConfig, loadCsf, parserOptions, readConfig, readCsf, writeConfig, writeCsf };
