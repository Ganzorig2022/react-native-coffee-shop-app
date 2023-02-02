import './src/firebase/firebase'; //firebase config
import 'react-native-get-random-values';
import RootNavigation from './src/navigation'; //index.tsx
import { useEffect } from 'react';
import { LogBox } from 'react-native';
import UserContextProvider from './src/hooks/useAuth';

export type RootStackParamList = {
  Welcome: undefined;
  Home: undefined;
  Details: { productId: string; product: ProductType };
  BottomTabs: undefined;
  SignIn: undefined;
  SignUp: undefined;
  Order: undefined;
  Payment: undefined;
};

export default function App() {
  // Ignore firebase v9 AsyncStorage warning
  useEffect(() => {
    LogBox.ignoreLogs([
      "AsyncStorage has been extracted from react-native core and will be removed in a future release. It can now be installed and imported from '@react-native-async-storage/async-storage' instead of 'react-native'. See https://github.com/react-native-async-storage/async-storage",
    ]);
  }, []);
  return (
    <>
      <UserContextProvider>
        <RootNavigation />
      </UserContextProvider>
    </>
  );
}
