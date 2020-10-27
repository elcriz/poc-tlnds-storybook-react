module.exports = {
    'stories': [
        '../src/**/*.stories.@(js|mdx|jsx|ts|tsx)'
    ],
    'addons': [

        // Official
        '@storybook/addon-docs',
        '@storybook/addon-controls',
        '@storybook/addon-links',
        '@storybook/addon-essentials',
        '@storybook/preset-create-react-app',

        // Community
        '@whitespace/storybook-addon-html/register',
    ]
};
