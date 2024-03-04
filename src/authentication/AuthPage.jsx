// import { useState } from 'react'
import ConfirmOTP from "./ConfirmOTP";
import ForgotPassword from "./ForgotPassword";
import Login from "./Login";
import ResetPassword from "./ResetPassword";
import SignUp from "./SignUp";
// import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";

const AuthPage = () => {
  return (
    <div className="flex w-screen items-center flex-col">
      <Routes>
        <Route path={"/"} exact Component={Login} />
        <Route path={"/login"} exact Component={Login} />
        <Route path="/signup" exact Component={SignUp} />
        <Route path="/confirm-otp" exact Component={ConfirmOTP} />
        <Route path="/forgot-password" exact Component={ForgotPassword} />
        <Route path="/reset-password" exact Component={ResetPassword} />
      </Routes>
    </div>
  );
};



export default AuthPage;

// AuthContext.js
