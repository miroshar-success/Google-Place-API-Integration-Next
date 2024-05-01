"use client"
import React, { createContext, useState } from 'react';

const AuthContext = createContext({});

const AuthProvider = ({ children }) => {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showSignUpModal, setShowSignUpModal] = useState(false);

  const toggleLoginModal = () => {
   setShowLoginModal(!showLoginModal);
  };

  const toggleSignUpModal = () => {
   setShowSignUpModal(!showSignUpModal);
 };

  return (
    <AuthContext.Provider value={{ showLoginModal, showSignUpModal, toggleLoginModal, toggleSignUpModal }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
