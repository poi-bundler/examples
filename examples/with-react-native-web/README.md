# React Native for Web example

This example shows how to use [react-native-web](https://github.com/necolas/react-native-web) which allows you to develop React components for native and web without rewriting existing code.

## Details

Poi works with `react-native-web` without config, feel free to import `react-native` in your code since it's aliased to `react-native-web` by default.

This example adds two addtional babel plugins:

- `react-hot-loader/babel` for hot reloading React components.
- `babel-plugin-react-native-web` for removing unused dependencies from `react-native-web`, e.g. `react-art`.

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
