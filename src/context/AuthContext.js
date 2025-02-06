// src/context/AuthContext.js
import React, { createContext, useContext, useState, useEffect } from "react";

// Create the Context
const AuthContext = createContext();

// Provider to pass the authentication data down the component tree
export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem("jwtToken") ? true : false);

  const login = (token) => {
    localStorage.setItem("jwtToken", token);
    setIsLoggedIn(true);
  };

  const logout = () => {
    localStorage.removeItem("jwtToken");
    setIsLoggedIn(false);
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use the auth context
export const useAuth = () => {
  return useContext(AuthContext);
};
