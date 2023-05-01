import { HttpClientModule } from '@angular/common/http';
import { importProvidersFrom } from '@angular/core';
import { applicationConfig } from '@storybook/angular';

export const parameters = {
  viewMode: 'docs',
  actions: {argTypesRegex: "^on[A-Z].*"},
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  docs: {
    inlineStories: true, // forces full height of component in docs
  },
  storySort: {
    method: 'alphabetical',
    order: [
      'Introduction',
      'Styleguide',
      'Atoms',
      [ 'README', 'MOCK', '*'],
      'Molecules',
      [ 'README', 'MOCK', '*'],
      'Organisms',
      [ 'README', 'MOCK', '*'],
    ],
    locales: 'en-US',
  },
  backgrounds: {
    default: 'light',
    values: [
      { name: 'grey', value: '#666666'},
    ],
  },
}

const decorators = [
  applicationConfig({
    providers: [importProvidersFrom(HttpClientModule)] // Imports httpclient module globally, needed for overview things in formly
  })
];

const preview = {
  parameters: parameters,
  decorators: decorators,
};

export default preview;