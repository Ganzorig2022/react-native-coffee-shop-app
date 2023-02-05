import React, { useState, createContext, ReactNode, useContext } from 'react';

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
