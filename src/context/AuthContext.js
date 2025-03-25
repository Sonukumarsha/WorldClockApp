import React, { createContext, useState, useContext, useEffect } from 'react';
import auth from '@react-native-firebase/auth';

const AuthContext = createContext(undefined);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged((currentUser) => {
      setUser(currentUser);
    });
    return subscriber;
  }, []);

  const signOut = async () => {
    try {
      await auth().signOut();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <AuthContext.Provider value={{ 
      user, 
      signOut 
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};