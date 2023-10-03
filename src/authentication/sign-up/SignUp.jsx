import "./sign-up.scss";
import logo from "../../assets/images/company-logo.png";
import backgroundImg from "../../assets/images/vector.png";
// import validMark from "../../assets/icons/valid-mark.svg";

import { useState } from "react";
import { Link } from "react-router-dom";

function SignUp() {
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
    <div className="auth-signup ">
      <div className="signup-left">
        <div className="signupcompany-logo">
          <img className="company-logo" src={logo} alt="company logo" />
          <p className="company-text">
            At Servv, we believe in the power of connecting people with skilled
            artisans right in their local communities.
          </p>
        </div>
        <img
          className="background-pattern-mark"
          src={backgroundImg}
          alt="background image"
        />
        <div className="testimonial-cards">
          <SignUpTestimonialCard />
        </div>
      </div>

      <form
        className="signup-form"
        onSubmit={handleSubmit}
        action=""
        method="get"
      >
        <h1>Create Account</h1>
        <div className="already-have-account">
          Already have an account?
          <Link to="/login">
            <button onClick={handleLoginSelect}>Login</button>
          </Link>
        </div>

        <label htmlFor="">
          First name
          <input
            type="text"
            name="firstname"
            value={formData.firstname}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="">
          Last name
          <input
            type="text"
            name="lastname"
            value={formData.lastname}
            onChange={handleChange}
          />
        </label>
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
        <button onClick={handleSubmit} className="submit-btn" type="submit">
          Create Account
        </button>
      </form>
    </div>
  );
}

export default SignUp;

const SignUpTestimonialCard = () => (
  <div className="signup-testimoial-card">
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
