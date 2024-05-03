"use client";
import React, { createContext, useState } from "react";

const AuthContext = createContext({});

const AuthProvider = ({ children }) => {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showSignUpModal, setShowSignUpModal] = useState(false);
  const [showNotificationModal, setShowNotificationModal] = useState(false);
  const [showActivityModal, setShowActivityModal] = useState(false);

  const toggleLoginModal = () => {
    setShowLoginModal(!showLoginModal);
  };

  const toggleSignUpModal = () => {
    setShowSignUpModal(!showSignUpModal);
  };

  const toggleNotificationModal = () => {
    setShowNotificationModal(!showNotificationModal);
  };

  const toggleActivityModal = () => {
    setShowActivityModal(!showActivityModal);
  };

  return (
    <AuthContext.Provider
      value={{
        showLoginModal,
        showSignUpModal,
        showNotificationModal,
        showActivityModal,
        toggleLoginModal,
        toggleSignUpModal,
        toggleNotificationModal,
        toggleActivityModal,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
