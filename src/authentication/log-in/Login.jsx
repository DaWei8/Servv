/* eslint-disable no-unused-vars */
import "./log-in.scss";
import logo from "../../assets/images/company-logo.png";
import backgroundImg from "../../assets/images/vector.png";
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

  // const [selectSignupOption, setSelectSignupOption] = useState(false);

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
    <div className="auth-container">
      <div className="auth-login ">
        <div className="login-left">
          <div className="login-company-logo">
            <Link to="../login">
              <img className="company-logo" src={logo} alt="company logo" />
            </Link>
            <p className="company-text">
              At Servv, we believe in the power of connecting people with
              skilled artisans right in their local communities.
            </p>
          </div>
          <img
            className="background-pattern-mark"
            src={backgroundImg}
            alt="background image"
          />
          <div className="testimonial-cards">
            <LoginTestimonialCard />
          </div>
        </div>

        {/* form for login  */}
        <form
          id="login-form"
          name="login-form"
          className="login-form"
          onSubmit={handleSubmit}
          autoComplete=""
          action="submit"
          method="post"
        >
          <h1>
            <span>Login</span>
          </h1>
          <div className="dont-have-account">
            Dont have an account?
            <button onClick={handleSignupSelect}>
              <Link to="../signup">Create Account</Link>
            </button>
          </div>

          <div className="use-number-or-mail">
            <button
              onClick={handleMailSelection}
              value="useMail"
              className="use-email-btn"
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
                // color :
                // selectedOption !== true ? "transparent" : "rgba(180, 204, 252, 0.30)"
              }}
            >
              Use Phone Number
            </button>
          </div>

          {selectedOption !== true ? (
            <div>
              <label htmlFor="">
                Email{" "}
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                ></input>
                {errors.email && <span>{errors.email}</span>}
              </label>

              <label htmlFor="">
                Password
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                ></input>
              </label>

              <div className="forgot-password">
                Forgot Password?{" "}
                <button onClick={handleSignupSelect}> Recover password</button>{" "}
              </div>
            </div>
          ) : (
            <div>
              <label htmlFor="">
                Mobile number
                <input
                  type="text"
                  name="mobilenumber"
                  value={formData.mobilenumber}
                  onChange={handleChange}
                ></input>
              </label>

              <label htmlFor="">
                Password
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                ></input>
              </label>

              <div className="forgot-password">
                Forgot Password?{" "}
                <button onClick={handleSignupSelect}> Recover password</button>{" "}
              </div>
            </div>
          )}

          <button onClick={handleSubmit} className="submit-btn" type="submit" >
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
  <div className="login-testimoial-card">
    <div className="testimonial-name-and-title">
      <h2 className="person-name">Idowu Taiwo</h2>
      <p className="person-title">Mobile Car Detailing</p>
    </div>
    <div className="person-testimony">
      Serv has been the best thing to happen to me this year. I have gone from
      loan to loan. Now i have cleared all debts and I can now take care of my
      family.
    </div>
  </div>
);
