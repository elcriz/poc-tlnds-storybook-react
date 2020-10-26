import { withHTML } from '@whitespace/storybook-addon-html/react';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  layout: 'centered',
};

export const decorators = [
  withHTML
];
