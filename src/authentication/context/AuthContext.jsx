/* eslint-disable react/prop-types */
// import axios from "axios";
import { createContext, useContext, useState } from "react";

export const AuthContext = createContext(null);

const AuthContextProvider = ({ children }) => {
  
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [unAuthorisedAction, setUnAuthorisedAction] = useState(true);
  const login = () => {
    setIsAuthenticated(true);
  };
  const logout = () => {
    setIsAuthenticated(false);
  };

  const unAuthorisedClick = () => {
    setUnAuthorisedAction(isAuthenticated);
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        unAuthorisedAction,
        unAuthorisedClick,
        setIsAuthenticated,
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


// const AuthProvider = ({children}) => {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);
//   const setAuth = (boolean) => {
//     setIsAuthenticated(boolean);
//   };

// //Auth API logic here//
//   const apiOptions = {
//     url: "/api/users",
//     method: "GET",
//     headers: {
//       token: localStorage.token,
//     },
//   };

//   async function isAuth() {
//     axios(apiOptions)
//       .then((response) => {
//         const resData = response.data;
//         resData === true ? setIsAuthenticated(true) : setIsAuthenticated(false);
//       })
//       .catch((error) => {
//         console.log(error.response);
//       });
//   }

//   useEffect(() => {
//     isAuth();
//   }, []);

//   return (
//     <AuthContext.Provider
//       value={[isAuthenticated, setIsAuthenticated, setAuth]}
//     >
//       {children}
//     </AuthContext.Provider>
//   );
// };