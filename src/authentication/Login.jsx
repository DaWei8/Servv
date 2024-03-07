/* eslint-disable no-unused-vars */
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import LeftFillerComponent from "./LeftFillerComponent";
import backButton from "../assets/icons/prev-arrow.svg";
import axios from "axios";
import { useAuth } from "./context/AuthContext";

export default function Login() {
  const navigate = useNavigate();
  const { login, userId } = useAuth();
  // const [userId, setUserId] = useState();
  const [formData, setFormData] = useState({
    mobilenumber: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    mobilenumber: "",
    email: "",
    password: "",
  });

  const [selectedOption, setSelectedOption] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    console.log(JSON.stringify(formData));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const url = "http://localhost:5000/api/users/login";
    const data = {
      email: formData.email,
      mobileNumber: formData.mobilenumber,
      password: formData.password,
    };
    axios
      .post(url, data)
      .then((user) => {
        if (user.data) {
          login({ email: formData.email, user: user.data });
          userId !== "failed"? localStorage.setItem("isLoggedIn", true) : localStorage.setItem("isLoggedIn", false)
          localStorage.setItem("userId", user.data);
          navigate("/");
        } else {
          localStorage.setItem("isLoggedIn", false);
        }
      })
      .catch((error) => console.error("User Check Error: ", error));
  };

  return (
    <div className=" w-fit flex flex-col items-center justify-around  ">
      <div className=" flex items-center flex-row mx-auto md:p-[20px] md:rounded-[20px] md:shadow-3xl ">
        <LeftFillerComponent />
        {/* form for login  */}
        <form
          id="login-form"
          name="login-form"
          className="flex flex-col  px-[20px] md:w-auto  md:py-[40px] py-[100px] md:h-auto h-screen  "
          onSubmit={(e) => handleSubmit(e)}
          autoComplete=""
          method="post"
        >
          <div className=" flex flex-row gap-[15px] mb-[10px] items-center text-[14px] ">
            <img
              onClick={() => navigate("/")}
              className=" w-[32px] "
              src={backButton}
              alt="back button"
            />

            <p>Dont have an account?</p>
            <div
              className=" text-main-color "
              onClick={() => navigate("/auth/signup")}
            >
              Create Account
            </div>
          </div>{" "}
          <h1 className=" text-main-color text-[30px] flex font-semibold mb-[20px] ">
            Login
          </h1>
          <div className=" mt-[10px] flex gap-[20px] mb-[20px] items-center  ">
            <div
              onClick={(e) => setSelectedOption(false)}
              className="use-btn "
              style={{
                background:
                  selectedOption !== true
                    ? "rgba(180, 204, 252, 0.30)"
                    : "transparent",
              }}
            >
              Use Email
            </div>
            OR
            <div
              className="use-btn "
              onClick={(e) => setSelectedOption(true)}
              style={{
                background:
                  selectedOption !== true
                    ? "transparent"
                    : "rgba(180, 204, 252, 0.30)",
              }}
            >
              Use Phone Number
            </div>
          </div>
          {selectedOption !== true ? (
            <div className=" flex flex-col items-center justify-center md:w-[500px] gap-[20px] text-[14px] ">
              <label className=" flex flex-col w-full gap-[5px] " htmlFor="">
                Email{" "}
                <input
                  type="email"
                  autoComplete="true"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className=" form-input "
                />
                {errors.email && <span>{errors.email}</span>}
              </label>

              <label className=" flex flex-col w-full gap-[5px] " htmlFor="">
                Password
                <input
                  type="password"
                  autoComplete="true"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className=" form-input "
                />
              </label>

              <div className=" flex flex-row flex-auto w-full items-baseline justify-end gap-[20px] ">
                <p>Forgot Password?</p>

                <Link to="../forgot-password">
                  <p className=" text-main-color ">Reset password</p>
                </Link>
              </div>
            </div>
          ) : (
            <div className=" flex flex-col items-center justify-center md:w-[500px] gap-[20px] text-[14px] ">
              <label className=" flex flex-col w-full gap-[5px] " htmlFor="">
                Mobile number
                <input
                  type="text"
                  autoComplete="true"
                  name="mobilenumber"
                  value={formData.mobilenumber}
                  onChange={handleChange}
                  className=" form-input "
                  maxLength="11"
                  minLength="11"
                />
              </label>

              <label className=" flex flex-col w-full gap-[5px] " htmlFor="">
                Password
                <input
                  type="password"
                  autoComplete="true"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className=" form-input "
                />
              </label>

              <div className=" flex flex-row flex-auto w-full items-baseline justify-end gap-[20px] ">
                <p>Forgot Password?</p>

                <Link to="../forgot-password">
                  <p className=" text-main-color ">Reset password</p>
                </Link>
              </div>
            </div>
          )}
          <button
            // onClick={handleSubmit}
            className=" rounded-[10px] float-right h-[50px] py-[15px] mt-[100px] w-full bg-primary-button-color-blue flex items-center justify-center "
            style={{
              display: "flex",
              color: "#fff",
            }}
            onClick={(e) => handleSubmit(e)}
          >
            Login
          </button>
          {/* </button> */}
        </form>
      </div>
    </div>
  );
}
