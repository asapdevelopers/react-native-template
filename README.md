#  React native template
This project is a template for React-native and includes a bridge for Android and iOS to use the native [JWPlayer SDks](https://www.jwplayer.com/video-solutions/mobile-sdk/) with React

![Image of RNTemplate](https://i.imgur.com/T6teKO8.png | width=100)

[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](http://standardjs.com/)
* Standard compliant React Native App Utilizing [Ignite](https://github.com/infinitered/ignite)

## What's included?
* A [react-native](https://facebook.github.io/react-native/) app for Android and iOS
* [Redux](https://redux.js.org/docs/introduction/) integration to manage the store
* [Redux-saga](https://redux-saga.js.org/) integration to handle side-effects (i.e. asynchronous requests to the Backend)
* A bridge for Android and iOS to use the native [JWPlayer SDks](https://www.jwplayer.com/video-solutions/mobile-sdk/) with React native
* Support for multiple languages using [react-native-i18n](https://github.com/AlexanderZaytsev/react-native-i18n)
* Font-awesome icons support using [react-native-vector-icons](https://github.com/oblador/react-native-vector-icons)
* It implements app navigation using [react-navigation](https://github.com/react-navigation/react-navigation)

## How to Setup
```
git clone this repo:
cd to the cloned repo:
Install the Application with `yarn` or `npm i`
```

## How to Run App

1. cd to the repo
2. Run Build for either OS
  * for iOS
    * run `react-native run-ios`
  * for Android
    * Run Genymotion
    * run `react-native run-android`

## Secrets

This project uses [react-native-config](https://github.com/luggit/react-native-config) to expose config variables to your javascript code in React Native. You can store API keys
and other sensitive information in a `.env` file:

```
API_URL=https://myapi.com
GOOGLE_MAPS_API_KEY=abcdefgh
```

and access them from React Native like so:

```
import Secrets from 'react-native-config'

Secrets.API_URL  // 'https://myapi.com'
Secrets.GOOGLE_MAPS_API_KEY  // 'abcdefgh'
```

The `.env` file is ignored by git keeping those secrets out of your repo.

### Get started:
1. Copy .env.example to .env
2. Add your config variables
3. Follow instructions at [https://github.com/luggit/react-native-config#setup](https://github.com/luggit/react-native-config#setup)
4. Done!
