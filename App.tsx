import './src/firebase/firebase'; //firebase config
import 'react-native-get-random-values';
import RootNavigation from './src/navigation'; //index.tsx
import { useEffect } from 'react';
import { LogBox, Alert } from 'react-native';
import UserContextProvider from './src/context/authProvider';
import { RecoilRoot } from 'recoil';
import messaging from '@react-native-firebase/messaging';

export type RootStackParamList = {
  Welcome: undefined;
  Home: undefined;
  Details: { productId: string; product: ProductType };
  BottomTabs: undefined;
  SignIn: undefined;
  SignUp: undefined;
  Order: undefined;
  Payment: undefined;
  OTP: undefined;
  Bag: undefined;
};

export default function App() {
  const requestUserPermission = async () => {
    const authStatus = await messaging().requestPermission();
    const enabled =
      authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
      authStatus === messaging.AuthorizationStatus.PROVISIONAL;

    if (enabled) {
      console.log('Authorization status:', authStatus);
    }
  };

  useEffect(() => {
    if (requestUserPermission()) {
      //return fcm token for the device
      messaging()
        .getToken()
        .then((token) => {
          console.log(token);
        });
    } else {
      console.log('Failed token status');
    }

    // Check whether an initial notification is available
    messaging()
      .getInitialNotification()
      .then((remoteMessage) => {
        if (remoteMessage) {
          console.log(
            'Notification caused app to open from quit state:',
            remoteMessage.notification
          );
        }
      });

    messaging().onNotificationOpenedApp(async (remoteMessage) => {
      console.log(
        'Notification caused app to open from background state:',
        remoteMessage.notification
      );
    });

    // Register background handler
    messaging().setBackgroundMessageHandler(async (remoteMessage) => {
      console.log('Message handled in the background!', remoteMessage);
    });

    const unsubscribe = messaging().onMessage(async (remoteMessage) => {
      Alert.alert('A new FCM message arrived!', JSON.stringify(remoteMessage));
    });

    return unsubscribe;
  }, []);

  // Ignore firebase v9 AsyncStorage warning
  useEffect(() => {
    LogBox.ignoreLogs([
      "AsyncStorage has been extracted from react-native core and will be removed in a future release. It can now be installed and imported from '@react-native-async-storage/async-storage' instead of 'react-native'. See https://github.com/react-native-async-storage/async-storage",
    ]);
  }, []);
  return (
    <>
      <UserContextProvider>
        <RecoilRoot>
          <RootNavigation />
        </RecoilRoot>
      </UserContextProvider>
    </>
  );
}
