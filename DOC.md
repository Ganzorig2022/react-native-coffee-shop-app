> https://github.com/expo/eas-cli

```bash
npx expo start --dev-client
```

## 1 - Creating React-native App with EXPO and Typescript

> https://reactnative.dev/docs/typescript

```bash
npx create-expo-app --template
```

## 2 - Create development builds (for publishing app to APP STORE)

```bash
npm install -g eas-cli
```

> https://docs.expo.dev/development/create-development-builds/

```bash
npx expo install expo-dev-client
```

> https://www.revenuecat.com/docs/reactnative

```bash
npm install --save react-native-purchases
```

## 3 - Installing TAILWIND CSS

1. https://www.nativewind.dev/quick-starts/expo
2. https://www.nativewind.dev/getting-started/typescript

## 4 - REACT NATIVE NAGIVATION

> https://reactnavigation.org/docs/getting-started/

1. Installing dependencies into an Expo managed project

```bash
npm install @react-navigation/native
```

```bash
npx expo install react-native-screens react-native-safe-area-context
```

---

2. Wrapping your app in NavigationContainer​ (see "/App.tsx")

---

3. Installing the native stack navigator library
   > https://reactnavigation.org/docs/native-stack-navigator

```bash
npm install @react-navigation/native-stack
```

---

## React Native Dropdown Picker

https://hossein-zare.github.io/react-native-dropdown-picker-website/docs/usage

## React-native-elements (Cross Platform React Native UI toolkit)

MUI shig...

> https://reactnativeelements.com/

> https://reactnativeelements.com/docs/installation#existing-expo-project

## REDUX TOOLKIT

> An Existing App
> https://redux-toolkit.js.org/introduction/getting-started

1. Installing

```bash
npm install @reduxjs/toolkit
```

```bash
npm install react-redux
```

---

2. Wrap your application with the Provider

> https://redux-toolkit.js.org/tutorials/rtk-query/#wrap-your-application-with-the-provider

---

3.  Creating Store, Slice, Hooks etc.

> https://redux-toolkit.js.org/tutorials/typescript

## REACT NATIVE OTP INPUTS

> https://www.npmjs.com/package/@twotalltotems/react-native-otp-input

```bash
https://www.npmjs.com/package/@twotalltotems/react-native-otp-input
```

## ENV - react-native-dotenv

> https://www.npmjs.com/package/react-native-dotenv

## React Native Firebase

1. Installing firebase app

> https://rnfirebase.io/

```bash
npm install --save @react-native-firebase/app
```

2. Adding Custom Native Code (because Expo Go doesn't support it)

> https://docs.expo.dev/development/create-development-builds/

3. Creating development builds (because it requires)

> https://docs.expo.dev/development/create-development-builds/

```bash
npm install -g eas-cli
```

```bash
npx expo install expo-dev-client
```

4. **Create and install the development build on an Android Emulator**

```bash
eas build --profile development --platform android
```

4. Installing Google Sign-In library

> https://rnfirebase.io/auth/social-auth

```bash
npx expo install @react-native-google-signin/google-signin
```

5. "/app.json" dotor huulna

```js
 "plugins": ["@react-native-google-signin/google-signin"]
```

6. **Create and install the development build on an IOS Emulator** Herwee IOS dr setup hiiwel
   "eas.json" dotor

```js
 "simulator": true
```

7. Credentials --> Android --> set up a new keystore--> Create a new Build Credentials Config --> ENTER --> ENTER --> SHA1 : 2E:51:43:B1:D2:91:74:BF:15:F6:77:D2:22:40:87:B5:3B:40:A3:B9-iig

8. firebase console --> Android App --> copyd-no

```bash
npx eas credentials
```

huulna.

<!-- https://www.youtube.com/watch?v=d_Vf41Sb0v0 -->
<!-- https://www.youtube.com/watch?v=d_Vf41Sb0v0&t=513s -->

```bash
eas build --profile development-simulator --platform ios
```

<!-- https://www.youtube.com/watch?v=EaVG6wVZPyY&t=1007s -->
