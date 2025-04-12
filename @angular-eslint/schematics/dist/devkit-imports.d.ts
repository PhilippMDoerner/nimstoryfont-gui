/**
 * In order to prevent the project graph cache from showing up at the root of the user's
 * workspace, we set a custom cache directory before importing anything from `@nx/devkit`.
 *
 * `no-restricted-imports` eslint rule has been configured for this project to prevent
 * accidental imports in other files. All imports should come from here to ensure consistency.
 */
export { convertNxGenerator, offsetFromRoot, readJson, writeJson, } from '@nx/devkit';
export type { ProjectConfiguration, Tree } from '@nx/devkit';
export { wrapAngularDevkitSchematic } from '@nx/devkit/ngcli-adapter';
//# sourceMappingURL=devkit-imports.d.ts.map