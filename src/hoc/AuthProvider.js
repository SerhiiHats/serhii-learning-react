import React, {createContext, useState} from 'react';

export const AuthContext = createContext(null);
export const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null);

  const signIn = (newUser, cb) => {
    setUser(newUser);
    cb();
  }

  const signOut = (cb) => {
    setUser(null);
    cb();
  }

  const value = {user, signIn, signOut} //  Это value может получить любой компонент через чук useContext, приложение нужно обернуть в AuthProvider

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

