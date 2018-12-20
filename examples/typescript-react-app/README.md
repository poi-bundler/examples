# TypeScript React App

This example shows how to use [TypeScript](http://typescriptlang.org) in a [React.js](https://reactjs.org) app with Poi.

## Details

If you want to use Babel to compile TypeScript code, check out the [Babel TypeScript React App](../babel-typescript-react-app) example.

This example uses [ts-loader](https://github.com/TypeStrong/ts-loader) to transpile TypeScript at build time, and uses [fork-ts-checker-webpack-plugin](https://github.com/Realytics/fork-ts-checker-webpack-plugin) to perform type-checking as well. [TSLint](https://palantir.github.io/tslint/) is also enabled by default, you can simply delete [./tslint.json](./tslint.json) to disable this feature.

## Usage

In this directory run:

```bash
yarn
yarn dev
```

## Script

### `yarn dev`

Start dev server to preview your app.

### `yarn build`

Build your app for production use.
