"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const architect_1 = require("@angular-devkit/architect");
const rxjs_1 = require("rxjs");
const operators_1 = require("rxjs/operators");
const find_up_1 = require("find-up");
const read_pkg_up_1 = require("read-pkg-up");
const cli_1 = require("@storybook/cli");
const telemetry_1 = require("@storybook/telemetry");
const core_server_1 = require("@storybook/core-server");
const run_compodoc_1 = require("../utils/run-compodoc");
const error_handler_1 = require("../utils/error-handler");
(0, telemetry_1.addToGlobalContext)('cliVersion', cli_1.versions.storybook);
exports.default = (0, architect_1.createBuilder)(commandBuilder);
function commandBuilder(options, context) {
    return (0, rxjs_1.from)(setup(options, context)).pipe((0, operators_1.switchMap)(({ tsConfig }) => {
        const runCompodoc$ = options.compodoc
            ? (0, run_compodoc_1.runCompodoc)({ compodocArgs: options.compodocArgs, tsconfig: tsConfig }, context).pipe((0, operators_1.mapTo)({ tsConfig }))
            : (0, rxjs_1.of)({});
        return runCompodoc$.pipe((0, operators_1.mapTo)({ tsConfig }));
    }), (0, operators_1.map)(({ tsConfig }) => {
        (0, cli_1.getEnvConfig)(options, {
            staticDir: 'SBCONFIG_STATIC_DIR',
            outputDir: 'SBCONFIG_OUTPUT_DIR',
            configDir: 'SBCONFIG_CONFIG_DIR',
        });
        const { browserTarget, stylePreprocessorOptions, styles, configDir, docs, loglevel, outputDir, quiet, webpackStatsJson, disableTelemetry, assets, } = options;
        const standaloneOptions = {
            packageJson: (0, read_pkg_up_1.sync)({ cwd: __dirname }).packageJson,
            configDir,
            ...(docs ? { docs } : {}),
            loglevel,
            outputDir,
            quiet,
            disableTelemetry,
            angularBrowserTarget: browserTarget,
            angularBuilderContext: context,
            angularBuilderOptions: {
                ...(stylePreprocessorOptions ? { stylePreprocessorOptions } : {}),
                ...(styles ? { styles } : {}),
                ...(assets ? { assets } : {}),
            },
            tsConfig,
            webpackStatsJson,
        };
        return standaloneOptions;
    }), (0, operators_1.switchMap)((standaloneOptions) => runInstance({ ...standaloneOptions, mode: 'static' })), (0, operators_1.map)(() => {
        return { success: true };
    }));
}
async function setup(options, context) {
    let browserOptions;
    let browserTarget;
    if (options.browserTarget) {
        browserTarget = (0, architect_1.targetFromTargetString)(options.browserTarget);
        browserOptions = await context.validateOptions(await context.getTargetOptions(browserTarget), await context.getBuilderNameForTarget(browserTarget));
    }
    return {
        tsConfig: options.tsConfig ??
            (0, find_up_1.sync)('tsconfig.json', { cwd: options.configDir }) ??
            browserOptions.tsConfig,
    };
}
function runInstance(options) {
    return (0, rxjs_1.from)((0, core_server_1.withTelemetry)('build', {
        cliOptions: options,
        presetOptions: { ...options, corePresets: [], overridePresets: [] },
        printError: error_handler_1.printErrorDetails,
    }, () => (0, core_server_1.buildStaticStandalone)(options))).pipe((0, operators_1.catchError)((error) => (0, rxjs_1.throwError)((0, error_handler_1.errorSummary)(error))));
}
