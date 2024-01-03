/* eslint-disable no-unused-vars */
import logo from "../../assets/images/company-logo.png";
import backgroundImg from "../../assets/icons/bg-logo.png";
import QuoteMark from "../../assets/icons/quote.svg";
import validMark from "../../assets/icons/valid-mark.svg";

import { useState } from "react";
import { Link } from "react-router-dom";

function Login() {
  const [formData, setFormData] = useState({
    firstname: "",
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

  const [selectedOption, setSelectedOption] = useState(false);

  const validateFormData = (formData) => {
    if (!formData.mobilenumber) {
      errors.mobilenumber = "Number is required";
    }
    if (!formData.email) {
      errors.mobilenumber = "Email is required";
    }
    if (!formData.password) {
      errors.mobilenumber = "password is required";
    }
    return errors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
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
      <div className=" flex flex-row md:max-w-[80vw] mx-auto md:p-[20px] md:rounded-[20px] md:shadow-3xl ">
        <div className=" relative overflow-x-hidden text-primary-text-color-white login-left hidden md:flex flex-col bg-primary-bg-color-blue py-[96px] px-[34px] w-fit rounded-[10px] max-h-[90vh] ">
          <div className="login-company-logo max-w-[400px] flex flex-col gap-[25px] ">
            {/* <Link to="../login"> */}
            <img
              className="company-logo w-[120px] "
              src={logo}
              alt="company logo"
            />
            {/* </Link> */}
            <p className=" leading-[200%] ">
              At Servv, we believe in the power of connecting people with
              skilled artisans right in their local communities.
            </p>
          </div>
          <img
            className=" absolute flex self-center justify-self max-w-[500px] -rotate-[30deg] "
            src={backgroundImg}
            alt="background image"
          />
          <div className=" mt-[100px] ">
            <LoginTestimonialCard />
          </div>
        </div>

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
          <h1 className=" text-main-color text-[30px] flex font-semibold mb-[20px] ">
            Login
          </h1>
          <div className=" flex flex-row gap-[15px] items-center ">
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
                {errors.email && <span>{errors.email}</span>}
              </label>

              <label className=" flex flex-col gap-[10px] " htmlFor="">
                Password
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className=" h-[50px] rounded-[5px] bg-pale-blue-grey border-l-1 border-t-0 border-b-0 border-r-0 border-solid border-l-main-color"
                />
              </label>

              <div className=" flex flex-row flex-auto w-full items-baseline justify-end gap-[10px] ">
                <p>Forgot Password?</p>
                <button
                  onClick={handleSignupSelect}
                  className=" text-main-color "
                >
                  Recover password
                </button>
              </div>
            </div>
          ) : (
            <div className=" flex flex-col md:w-[500px] gap-[20px] text-[14px] ">
              <label className=" flex flex-col gap-[10px] " htmlFor="">
                Mobile number
                <input
                  type="text"
                  name="mobilenumber"
                  value={formData.mobilenumber}
                  onChange={handleChange}
                  className=" h-[50px] rounded-[5px] bg-pale-blue-grey border-l-1 border-t-0 border-b-0 border-r-0 border-solid border-l-main-color "
                />
              </label>

              <label className=" flex flex-col gap-[10px] " htmlFor="">
                Password
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className=" h-[50px] rounded-[5px] bg-pale-blue-grey border-l-1 border-t-0 border-b-0 border-r-0 border-solid border-main-color "
                />
              </label>

              <div className=" flex flex-row flex-auto w-full items-baseline justify-end gap-[10px] ">
                <p>Forgot Password?</p>
                <button
                  onClick={handleSignupSelect}
                  className=" text-main-color "
                >
                  Recover password
                </button>
              </div>
            </div>
          )}

          <button
            onClick={handleSubmit}
            className="submit-btn float-right h-[50px] py-[15px] mt-[100px] bg-primary-button-color-blue flex items-center justify-center "
            type="submit"
          >
            <Link
              style={{
                display: "flex",
                color: "#fff",
              }}
              to="/artisanPage"
            >
              Login
            </Link>
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;

const LoginTestimonialCard = () => (
  <div className=" backdrop-blur-[10px] max-w-[400px] bg-transparent-bg-blur px-[25px] rounded-[15px] py-[35px] ">
    <div className="testimonial-name-and-title mb-[10px] ">
      <h2 className="person-name text-[24px] font-semibold ">Idowu Taiwo</h2>
      <p className="person-title">Mobile Car Detailing</p>
      <img
        className=" md:w-[48px] w-[38px] absolute right-[25px] top-[45px] "
        src={QuoteMark}
        alt="quote mark"
      />
    </div>
    <div className="person-testimony text-[14px] ">
      Serv has been the best thing to happen to me this year. I have gone from
      loan to loan. Now i have cleared all debts and I can now take care of my
      family.
    </div>
  </div>
);
