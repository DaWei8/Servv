import { useState } from 'react'
import Login from './log-in/Login';
import SignUp from './sign-up/SignUp';

import "./AuthPage.scss"
import { Route, Routes } from 'react-router-dom';

const AuthPage = () => {

  // const [userValidationStatus, setUserValidationStatus] = useState({
  //   isLoggedIn : true,
  //   isClient: true,
  //   isArtisan: false,
  //   isAgency: false,
  // });

  // const [selectedAuthOption, setSelectedAuthOption] = useState(false);

  // setUserValidationStatus.isLoggedIn = false;

  return (
    <div className='auth-page'>

      <Routes>
        <Route path="/" Component={Login} />
        <Route path="/signup" Component={SignUp} />
      </Routes>
      {/* {
        userValidationStatus.isLoggedIn !== true ?
        <Login /> : <SignUp />

      } */}
    </div>
  )
}

export default AuthPage