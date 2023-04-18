module.exports = {
  stories: [
    '../src/**/*.stories.ts',
  ],
  addons: [
    '@storybook/addon-essentials', 
    '@storybook/addon-interactions', 
    '@storybook/addon-a11y', 
    'storybook-preset-inline-svg',
  ],
  framework: '@storybook/angular',
  core: {
    "builder": "@storybook/builder-webpack5",
    "disableTelemetry": true,
  },
};