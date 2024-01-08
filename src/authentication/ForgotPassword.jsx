/* eslint-disable no-unused-vars */
import { useState } from "react";
import { Link } from "react-router-dom";
import LeftFillerComponent from "./LeftFillerComponent";

export default function ForgotPassword() {
  const [formData, setFormData] = useState({
    email: "",
  });

  const [errors, setErrors] = useState({
    email: "Email is not valid. Enter a valid email address.",
  });

  let regex = RegExp("[a-z0-9]+@[a-z]+\\.[a-z]{2,3}");

  const [confirmState, setConfirmState] = useState(false);

  const validateFormData = (formData) => {

    regex.test(formData.email) !== false
        ? setConfirmState(true)
        : setConfirmState(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
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
        >
          <h1 className="text-[30px] font-semibold mb-[20px] ">
            <span className=" text-main-color ">Forgot </span>Password
          </h1>
          <div className="flex flex-row gap-[15px] mb-[50px] items-center text-[14px] ">
            Don’t worry! Please enter the email address associated with your
            account.
          </div>

          <div className=" flex flex-col md:w-[500px] gap-[20px] text-[14px] ">
            <label className=" flex flex-col gap-[10px] " htmlFor="">
              Email{" "}
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className=" h-[50px] rounded-[5px] bg-pale-blue-grey border-l-1 border-t-0 border-b-0 border-r-0 border-solid border-l-main-color "
              />
              {confirmState !== true ? (
                <span className=" text-red-600 ">{errors.email}</span>
              ) : (
                <span className=" text-default-green " >Email is valid</span>
              )}
            </label>
          </div>
          <button
            onClick={handleSubmit.bind(this)}
            className="submit-btn float-right h-[50px] py-[15px] mt-[100px] bg-primary-button-color-blue flex items-center justify-center "
            type="submit"
          >
            <Link
              style={{
                display: "flex",
                color: "#fff",
              }}
              to={confirmState !== true ? "./" : "../reset-password"}
            >
              Proceed
            </Link>
          </button>
        </form>
      </div>
    </div>
  );
}
