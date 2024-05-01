"use client"
import React, { createContext, useState } from 'react';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [showModal, setShowModal] = useState(false);

  const toggleLoginModal = () => {
    setShowModal(!showModal);
  };

  return (
    <AuthContext.Provider value={{ showModal, toggleLoginModal }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
