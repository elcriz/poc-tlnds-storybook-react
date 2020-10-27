# The Learning Network Design System (React Storybook POC)

Use this (experimental) design system to make your service or product consistent with The Learning Network (TLN) guidelines for styling and UI patterns. The goal is to make buidling durable UIs that meet TLN specs more productive and satisfying.

## Table of Contents

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
<!-- (@see https://github.com/thlorenz/doctoc) -->

- [Disclaimer](#disclaimer)
- [Available Storybook scripts](#available-storybook-scripts)
  - [`yarn storybook`](#yarn-storybook)
  - [`yarn build-storybook`](#yarn-build-storybook)
  - [`doctoc`](#doctoc)
- [Available create-react-app scripts](#available-create-react-app-scripts)
  - [`yarn test`](#yarn-test)
  - [`yarn build`](#yarn-build)
  - [`yarn eject`](#yarn-eject)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Disclaimer

This project is a POC and was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) and Storybook. It shows how Storybook could work for TLN, when implemented in React. The components provided are React components, based on the (Angular) code for the Learnspace "landing page" concept. They are by no means finished!

## Available Storybook scripts

In the project directory, you can run:

### `yarn storybook`

Runs the Storybook implementation in development mode.<br />
Open [http://localhost:6006/?path=/docs/introduction--page](http://localhost:6006/?path=/docs/introduction--page) to view it in the browser. This url will take you to the introduction page.

### `yarn build-storybook`

Builds the Storybook app for production.

### `doctoc`

Generates and updates the automatically generated tables of contents in Markdown and `MDX` files. You might need to specify a file path. See [DocToc documentation](https://github.com/thlorenz/doctoc) for details.

## Available create-react-app scripts

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.
