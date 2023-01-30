> https://github.com/expo/eas-cli

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

4. Type checking with **TypeScript**

   > https://reactnavigation.org/docs/typescript

- "/App.tsx" dr

```js
export type RootStackParamList = {
  Home: undefined;
  Paywall: undefined;
  Demo: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();
```

- "/components/ActionRow.tsx" dr "useNavigation dr

```js
export type NavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Home'
>;
```

<!-- 1:20 dr zogsow.... -->
