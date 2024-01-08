

import { useState } from "react";
import { Link } from "react-router-dom";
import LeftFillerComponent from "./LeftFillerComponent";

function SignUp() {
  const [formData, setFormData] = useState({
    firstname: " ",
    lastname: "",
    mobilenumber: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    mobilenumber: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateFormData = (formData) => {
    const errors = {};

    if (!formData.mobilenumber) {
      errors.mobilenumber = "Email is required";
    }
    if (!formData.email) {
      errors.mobilenumber = "Email is required";
    }
    if (!formData.password) {
      errors.mobilenumber = "Email is required";
    }

    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const errors = validateFormData(formData);

    if (Object.keys(errors).length > 0) {
      setErrors(errors);
    } else {
      //submit the form data to the server
    }
    console.log(formData);
  };

  const handleLoginSelect = (e) => {
    e.preventDefault();
  };

  return (
    <div className="w-screen flex flex-col items-center justify-around ">
      <div className="flex flex-row mx-auto md:p-[20px] md:rounded-[20px] md:shadow-3xl">
        <LeftFillerComponent />
        <form
          className="flex flex-col md:px-[70px] px-[20px] md:w-auto w-full flex-auto md:py-[40px] py-[100px] md:h-auto h-screen"
          onSubmit={handleSubmit}
          action=""
          method="get"
        >
          <h1 className="text-[30px] font-semibold mb-[20px] ">
            <span className=" text-main-color ">Create </span>Account
          </h1>
          <div className="flex flex-row gap-[15px] mb-[50px] items-center text-[14px] " >
            Already have an account?
            <button
              onClick={handleLoginSelect}
              className=" text-main-color "
            >
              <Link to="../login">Login</Link>
            </button>
          </div>

          <div className="flex flex-col md:w-[500px] w-[330px] gap-[20px] text-[14px] mb-[30px] ">
            <label className=" flex flex-col gap-[10px] "  htmlFor="">
              First name
              <input
                type="text"
                name="firstname"
                value={formData.firstname}
                onChange={handleChange}
                className=" h-[42px] rounded-[5px] bg-pale-blue-grey border-l-1 border-t-0 border-b-0 border-r-0 border-solid border-l-main-color "
              />
            </label>
            <label className=" flex flex-col gap-[10px] "  htmlFor="">
              Last name
              <input
                type="text"
                name="lastname"
                value={formData.lastname}
                onChange={handleChange}
                className=" h-[42px] rounded-[5px] bg-pale-blue-grey border-l-1 border-t-0 border-b-0 border-r-0 border-solid border-l-main-color "
              />
            </label>
            <label className=" flex flex-col gap-[10px] "  htmlFor="">
              Email{" "}
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className=" h-[42px] rounded-[5px] bg-pale-blue-grey border-l-1 border-t-0 border-b-0 border-r-0 border-solid border-l-main-color "
              ></input>
              {errors.email && <span>{errors.email}</span>}
            </label>
            <label className=" flex flex-col gap-[10px] "  htmlFor="">
              Mobile number
              <input
                type="text"
                name="mobilenumber"
                value={formData.mobilenumber}
                onChange={handleChange}
                className=" h-[42px] rounded-[5px] bg-pale-blue-grey border-l-1 border-t-0 border-b-0 border-r-0 border-solid border-l-main-color "
              ></input>
            </label>
            <label className=" flex flex-col gap-[10px] "  htmlFor="">
              Password
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className=" h-[42px] rounded-[5px] bg-pale-blue-grey border-l-1 border-t-0 border-b-0 border-r-0 border-solid border-l-main-color "
              ></input>
            </label>
          </div>

          <button onClick={handleSubmit} className=" mt-auto bg-primary-button-color-blue text-primary-text-color-white py-[15px] max-h-[50px] w-full justify-center flex flex-auto items-center " type="submit">
            <Link className=" text-primary-text-color-white " to="../confirm-otp">Create Account</Link>
          </button>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
