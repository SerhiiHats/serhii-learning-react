import React, {createContext, useState} from 'react';

export const AuthContext = createContext(null);
export const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null);

  const sigIn = (newUser, cb) => {
    setUser(newUser);
    cb();
  }

  const signOut = (cb) => {
    setUser(null);
    cb();
  }

  const value = {user, sigIn, signOut}

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

