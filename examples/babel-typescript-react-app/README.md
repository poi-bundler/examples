# Babel TypeScript React App

This example shows how to use Babel to compile [TypeScript](http://typescriptlang.org) in a [React.js](https://reactjs.org) app with Poi.

## Details

If you want an example for using ES6 with React.js, check out the [React App](../react-app) example.

Poi also works out-of-the-box with TypeScript because it transpiles `.ts` and `.tsx` files with [babel-preset-typescript](https://babeljs.io/docs/en/babel-preset-typescript) by default. You can simply rename your `.js` and `.jsx` files to corresponding TypeScript extensions and they will just work.

Please keep in mind that your code is transpiled without type-checking. It's possible to enable type-checking in your editor by adding a `tsconfig.json` the one we use [here](./tsconfig.json). If you want type-checking at compile time, please check out the [TypeScript React App](../typescript-react-app) example instead.

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
