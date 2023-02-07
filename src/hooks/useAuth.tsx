import { onAuthStateChanged, User } from 'firebase/auth';
import { useState, useEffect } from 'react';
import { auth } from '../firebase/firebase';

export const useAuth = () => {
  //   const [userId, setUserId] = useState<User | null>(null);
  const [userId, setUserId] = useState<string>('');

  useEffect(() => {
    const unsubscribeFromAuthStatusChanged = onAuthStateChanged(
      auth,
      (user) => {
        if (user) {
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/firebase.User
          const uid = user.uid;

          setUserId(uid);
          // ...
        } else {
          // User is signed out
          setUserId('');
        }
      }
    );
    return unsubscribeFromAuthStatusChanged;
  }, []);

  return userId;
};

//https://github.com/NikValdez/react-native-firebase-auth/tree/main/src/navigation
