/* eslint-disable no-unused-vars */
import { useState } from "react";
import { Link } from "react-router-dom";
import LeftFillerComponent from "./LeftFillerComponent";

export default function ResetPassword() {
  const [formData, setFormData] = useState({
    confirmPassword: "",
    password: "",
  });

  const [counterState, setCounterState] = useState(0);

  const [confirmState, setConfirmState] = useState(Boolean);
  const [errors, setErrors] = useState({
    password: "Passwords do not match",
    noInput: "Enter your new pasword",
  });

  const validateFormData = (formData) => {
    formData.password != "" &&
    formData.confirmPassword != "" &&
    formData.password == formData.confirmPassword
      ? setConfirmState(true)
      : setConfirmState(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    validateFormData(formData);
    validateFormData(formData);
    console.log(formData.confirmPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setCounterState(counterState + 1);
    validateFormData(formData);
    if (Object.keys(errors).length > 0) {
      setErrors(errors);
    } else {
      //submit the form data to the server
    }
    console.log(formData);
  };

  return (
    <div className=" w-fit flex flex-col items-center justify-around  ">
      <div className=" flex flex-row mx-auto md:p-[20px] md:rounded-[20px] md:shadow-3xl ">
        <LeftFillerComponent />

        {/* form for login  */}
        <form
          id="login-form"
          name="login-form"
          className="login-form flex flex-col md:px-[70px] px-[20px] md:w-auto w-full md:py-[40px] py-[100px] md:h-auto h-screen  "
          onSubmit={handleSubmit}
          autoComplete=""
          action="submit"
          method="post"
          value= "reset"
        >
          <h1 className="text-[30px] font-semibold mb-[20px] ">
            <span className=" text-main-color ">Reset </span>Password
          </h1>

          <div className=" flex flex-col md:w-[500px] w-full min-w-[350px]  gap-[20px] text-[14px] ">
            {formData.password && formData.confirmPassword !== "" ? (
              confirmState !== true ? (
                <span className=" text-red-600 ">{errors.password}</span>
              ) : (
                <span className=" text-default-green ">Passwords match</span>
              )
            ) : (
              <span className={counterState >= 1 ? " text-red-600 " : ""}>
                {errors.noInput}
              </span>
            )}
            <label className=" flex flex-col gap-[10px] " htmlFor="">
              Password
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange.bind()}
                className=" h-[50px] rounded-[5px] bg-pale-blue-grey border-l-1 border-t-0 border-b-0 border-r-0 border-solid border-l-main-color"
              />
            </label>
            <label className=" flex flex-col gap-[10px] " htmlFor="">
              Confirm Password
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange.bind()}
                className=" h-[50px] rounded-[5px] bg-pale-blue-grey border-l-1 border-t-0 border-b-0 border-r-0 border-solid border-l-main-color"
              />
            </label>
          </div>

          <button
            onClick={handleSubmit.bind()}
            className="submit-btn float-right h-[50px] py-[15px] mt-[100px] bg-primary-button-color-blue flex items-center justify-center "
            type="submit"
          >
            <Link
              style={{
                display: "flex",
                color: "#fff",
              }}
              to={confirmState !== true ? "./" : "../login"}
            >
              Submit
            </Link>
          </button>
        </form>
      </div>
    </div>
  );
}
