/* eslint-disable react/prop-types */
// import axios from "axios";
// import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

export const AuthContext = createContext(null);

const AuthContextProvider = ({ children }) => {
  const [userName, setUserName] = useState("");

  const [userId, setUserId] = useState("");

  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const [unAuthorisedAction, setUnAuthorisedAction] = useState(true);

  useEffect(() => {
    // Retrieve login state from localStorage or sessionStorage
    const storedLoginState = localStorage.getItem("isLoggedIn");
    const storeUserId = localStorage.getItem("userId");
    if (storedLoginState === "true" && storeUserId !== "failed") {
      setIsAuthenticated(true);
      setUserId(storeUserId);
    }
  }, [userId]);

  const login = ({ email: email, user: user }) => {
    const storedLoginState = localStorage.getItem("isLoggedIn");
    const storeUserId = localStorage.getItem("userId");
    // console.log("Login auth");
    if (storedLoginState === "true" && storeUserId !== "failed") {
      setIsAuthenticated(true);
      setUserId(user);
    }

    setUserName(email);
  };
  
  const logout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("userId");
  };

  const unAuthorisedClick = () => {
    setUnAuthorisedAction(isAuthenticated);
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        userName,
        userId,
        unAuthorisedAction,
        unAuthorisedClick,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);

export { AuthContextProvider, useAuth };
