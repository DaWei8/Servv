/* eslint-disable no-unused-vars */
import { useState } from "react";
import { Link } from "react-router-dom";
import LeftFillerComponent from "./LeftFillerComponent";
import backButton from "../assets/icons/prev-arrow.svg";

export default function Login() {

  
  const [formData, setFormData] = useState({
    mobilenumber: "",
    email: "",
    password: "",
  });

  const [usertypeState, setUsertypeState] = useState({
    client: Boolean,
    artisan: Boolean,
  });

  const [errors, setErrors] = useState({
    mobilenumber: "",
    email: "",
    password: "",
  });

  const [selectedOption, setSelectedOption] = useState(false);

  const validateFormData = (formData) => {
    if (formData.email === "client@email.com")
      console.log("This is a cherry banana");
    if (formData.email === "client@email.com" && formData.password === "1234")
      setUsertypeState({
        client: true,
        artisan: false,
      });
    else if (
      formData.email === "artisan@email.com" &&
      formData.password === "1234"
    )
      setUsertypeState({
        client: false,
        artisan: true,
      });
    else
      setUsertypeState({
        client: false,
        artisan: false,
      });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    validateFormData(formData);
    const errors = validateFormData(formData);
  };

  const handleSignupSelect = (e) => {
    // setSelectSignupOption(true);
    e.preventDefault();
  };

  const handleMailSelection = (e) => {
    e.preventDefault();
    setSelectedOption(false);
  };

  const handleNumberSelection = (e) => {
    e.preventDefault();
    setSelectedOption(true);
  };

  return (
    <div className=" w-fit flex flex-col items-center justify-around  ">
      <div className=" flex flex-row mx-auto md:p-[20px] md:rounded-[20px] md:shadow-3xl ">
        <LeftFillerComponent />
        {/* form for login  */}
        <form
          id="login-form"
          name="login-form"
          className="login-form flex flex-col  px-[20px] md:w-auto  md:py-[40px] py-[100px] md:h-auto h-screen  "
          onSubmit={handleSubmit}
          autoComplete=""
          action="submit"
          method="post"
        >
          <h1 className=" text-main-color text-[30px] flex font-semibold mb-[20px] ">
            Login
          </h1>
          <div className=" flex flex-row gap-[15px] items-center ">
            <Link to="/">
              <img className=" w-[40px] " src={backButton} alt="back button" />
            </Link>
            <p>Dont have an account?</p>
            <button className=" text-main-color " onClick={handleSignupSelect}>
              <Link to="../signup">Create Account</Link>
            </button>
          </div>

          <div className=" mt-[50px] flex gap-[20px] mb-[20px] items-center justify-center ">
            <button
              onClick={handleMailSelection}
              value="useMail"
              className="use-email-btn  "
              style={{
                background:
                  selectedOption !== true
                    ? "rgba(180, 204, 252, 0.30)"
                    : "transparent",
              }}
            >
              Use Email
            </button>
            OR
            <button
              className="use-number-btn"
              onClick={handleNumberSelection}
              value="usePhone"
              style={{
                background:
                  selectedOption !== true
                    ? "transparent"
                    : "rgba(180, 204, 252, 0.30)",
              }}
            >
              Use Phone Number
            </button>
          </div>

          {selectedOption !== true ? (
            <div className=" flex flex-col items-center justify-center md:w-[500px] gap-[20px] text-[14px] ">
              <label className=" flex flex-col w-full gap-[10px] " htmlFor="">
                Email{" "}
                <input
                  type="email"
                  autoComplete="true"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className=" h-[50px] rounded-[5px] bg-pale-blue-grey border-l-1 border-t-0 border-b-0 border-r-0 border-solid border-l-main-color "
                />
                {errors.email && <span>{errors.email}</span>}
              </label>

              <label className=" flex flex-col w-full gap-[10px] " htmlFor="">
                Password
                <input
                  type="password"
                  autoComplete="true"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className=" h-[50px] rounded-[5px] bg-pale-blue-grey border-l-1 border-t-0 border-b-0 border-r-0 border-solid border-l-main-color"
                />
              </label>

              <div className=" flex flex-row flex-auto w-full items-baseline justify-end gap-[20px] ">
                <p>Forgot Password?</p>

                <Link  to="../forgot-password">
                  <p className=" text-main-color " >Reset password</p>
                </Link>
              </div>
            </div>
          ) : (
            <div className=" flex flex-col items-center justify-center md:w-[500px] gap-[20px] text-[14px] ">
              <label className=" flex flex-col w-full gap-[10px] " htmlFor="">
                Mobile number
                <input
                  type="text"
                  autoComplete="true"
                  name="mobilenumber"
                  value={formData.mobilenumber}
                  onChange={handleChange}
                  className=" h-[50px] rounded-[5px] bg-pale-blue-grey border-l-1 border-t-0 border-b-0 border-r-0 border-solid border-l-main-color "
                />
              </label>

              <label className=" flex flex-col w-full gap-[10px] " htmlFor="">
                Password
                <input
                  type="password"
                  autoComplete="true"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className=" h-[50px] rounded-[5px] bg-pale-blue-grey border-l-1 border-t-0 border-b-0 border-r-0 border-solid border-main-color "
                />
              </label>

              <div className=" flex flex-row flex-auto w-full items-baseline justify-end gap-[10px] ">
                <p>Forgot Password?</p>
                <button
                  // onClick={handleSignupSelect}
                  type=" button "
                  className=" text-main-color "
                >
                  <Link
                    style={{
                      display: "flex",
                    }}
                    to="../forgot-password"
                  >
                    Reset password
                  </Link>
                </button>
              </div>
            </div>
          )}

          <Link
            // onClick={handleSubmit}
            className=" rounded-[10px] float-right h-[50px] py-[15px] mt-[100px] w-full bg-primary-button-color-blue flex items-center justify-center "
            style={{
              display: "flex",
              color: "#fff",
            }}
            onClick={() => validateFormData(formData)}
            // onSubmit={ usertypeState.client === false && usertypeState.artisan === false ? alert("Hello\nThis is a multiline alert") : alert("Login\nSuccessful") }
            to={
              usertypeState.artisan === true
                ? "/artisanPage"
                : usertypeState.client === true
                ? "/clientPage"
                : "./"
            }
          >
            Login
          </Link>
          {/* </button> */}
        </form>
      </div>
    </div>
  );
}
