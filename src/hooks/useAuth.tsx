import React, {
  useEffect,
  useState,
  createContext,
  ReactNode,
  useContext,
  Dispatch,
} from 'react';
import {
  getAuth,
  onAuthStateChanged,
  User as FirebaseUser,
} from 'firebase/auth';

const auth = getAuth();

type Props = {
  children: ReactNode;
};

const UserContext = createContext<UserContextType>({
  isLoggedIn: false,
  setIsLoggedIn: () => {},
});

const UserContextProvider = ({ children }: Props) => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  const value = {
    isLoggedIn,
    setIsLoggedIn,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export default UserContextProvider;
export const useAuthContext = () => useContext(UserContext);

// export const useAuth = () => {
//   // const [user, setUser] = useState<FirebaseUser | null>(null);
//   const [user, setUser] = useState(false);

//   // useEffect(() => {
//   //   const unsubscribeFromAuthStatusChanged = onAuthStateChanged(
//   //     auth,
//   //     (user) => {
//   //       if (user) {
//   //         // User is signed in, see docs for a list of available properties
//   //         // https://firebase.google.com/docs/reference/js/firebase.User
//   //         const uid = user.uid;

//   //         setUser(user);
//   //         // ...
//   //       } else {
//   //         // User is signed out
//   //         setUser(null);
//   //       }
//   //     }
//   //   );
//   //   return unsubscribeFromAuthStatusChanged;
//   // }, []);

//   // return user;
//   return { user, setUser };
//   //daily quota of 50/day
// };

//https://github.com/NikValdez/react-native-firebase-auth/tree/main/src/navigation
