<h1 align="center">
  <a href="https://akveo.github.io/react-native-ui-kitten/">
    <img alt="hello_eva" src="https://user-images.githubusercontent.com/19741953/83339189-b34fb080-a2a1-11ea-9449-bf86ce88b598.png" width="300px" />
  </a>
</h1>

<h2 align="center">
  Hello World in React Native UI Kitten based on Eva Design System
</h2>

<p align="center">
  UI Kitten is a customizable React Native UI Library based on Eva Design System specifications, with 30+ UI components, 2     visual themes, and other supporting modules.
</p>

<p align="center">
  <a href="https://github.com/victorsoares96">
    <img alt="Made by Victor Soares" src="https://img.shields.io/badge/made%20by-victorsoares96-blue">
    <img alt="Version 1.0" src="https://img.shields.io/badge/version-1.0-brightgreen">
    <img alt="shield" src="https://img.shields.io/david/victorsoares96/hello_world_eva">
    <img alt="size" src="https://img.shields.io/github/languages/code-size/victorsoares96/hello_world_eva">
  </a>
</p>

## About

Ideal for those who do not want to waste time setting up an environment to start an application, as well as for those who are starting. This hello_world includes an icon pack, theme switcher (dark / light) and the TabNavigation navigation system by React Navigation.

## Build with

- Core
  - [React Native](https://reactnative.dev)
- Navigation
  - [React Navigation v5.x](https://reactnavigation.org)
- UI Theme
  - [UI Kitten 5.0.0](https://akveo.github.io/react-native-ui-kitten)

## Instructions
- `git clone https://github.com/victorsoares96/hello_world_eva.git`
- `cd hello_world_eva`
- `npm i`

### Android
- `react-native run-android`

### iOS
- `npx pod-install ios`
- `react-native run-ios`

## Rename Project
- `npx react-native-rename "new_name"`
- In root project `app.json` file, change:
``` json
{
  "name": "helloworldpaper",
  "displayName": "helloworldpaper"
}
```
to:
``` json
{
  "name": "new_name",
  "displayName": "new_name"
}
```
- In iOS run `npx pod-install ios` again

## Features

- [X] Tab Navigation (React Navigation v5.x)
- [X] Theme Switcher (Light/Dark) (React Theme Context)
- [X] EvaIconsPack (Eva Design System)
