import React, { useContext, useEffect, useState, createContext } from 'react';
import { auth, googleAuth } from '../firebase/firebase.config';
import {
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  signInWithPopup,
} from 'firebase/auth';

const AuthContext = createContext();
export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState({});

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setIsLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const signUp = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const logIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logOut = () => {
    return signOut(auth);
  };

  const googleSignIn = () => {
    return signInWithPopup(auth, googleAuth);
  };

  const value = { user, signUp, logIn, logOut, googleSignIn };
  return (
    <AuthContext.Provider value={value}>
      {!isLoading ? (
        children
      ) : (
        <p
          style={{
            fontFamily: 'var(--ff-secondary)',
            fontSize: 'var(--fs-700)',
            fontWeight: 'var(--fw-semibold)',
            textAlign: 'center',
            marginTop: '20%',
            color: 'var(--clr-accent-primary-400)',
            overflow: 'hidden',
          }}>
          Loading...
        </p>
      )}
    </AuthContext.Provider>
  );
};
