import React, { createContext, useContext, useState } from "react";
import { Loginn, SignUp } from "../firebasee/firebase"; // assuming these are correctly named in your firebase file

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = async (email, password) => {
    try {
      console.log("Attempting to log in with password:", password);
      const response = await Loginn(email, password);
      setUser(response);
      return response;
    } catch (error) {
      console.error('Login Error:', error);
      throw error;
    }
  };

  const signup = async (name, email, password) => {
    try {
      const response = await SignUp(name, email, password); 
      setUser(response);
      return response;
    } catch (error) {
      console.error('Signup Error:', error);
      throw error;
    }
  };

  return (
    <AuthContext.Provider value={{ user, login, signup }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
