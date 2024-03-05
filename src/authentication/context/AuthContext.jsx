/* eslint-disable react/prop-types */
// import axios from "axios";
// import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

export const AuthContext = createContext(null);

const AuthContextProvider = ({ children }) => {
  const [userName, setUserName] = useState("");

  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const [unAuthorisedAction, setUnAuthorisedAction] = useState(true);
  
  useEffect(() => {
    // Retrieve login state from localStorage or sessionStorage
    const storedLoginState = localStorage.getItem("isLoggedIn");
    if (storedLoginState === "true") {
      setIsAuthenticated(true);
    }
  }, []);

  const login = (email) => {
    
    console.log("Login auth");
    setIsAuthenticated(true);
    setUserName(email);
    localStorage.setItem("isLoggedIn", true);
  };
  const logout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem("isLoggedIn");
  };

  const unAuthorisedClick = () => {
    setUnAuthorisedAction(isAuthenticated);
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        userName,
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
