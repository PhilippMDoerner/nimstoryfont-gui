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
  backgrounds: {default: 'light'}
}