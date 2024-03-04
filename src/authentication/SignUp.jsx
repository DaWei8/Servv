import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import LeftFillerComponent from "./LeftFillerComponent";
import backButton from "../assets/icons/prev-arrow.svg";
import eyeOnIcon from "../assets/icons/eye-on.svg";
import eyeOffIcon from "../assets/icons/eye-off.svg";
import axios from "axios";

const SignUp = () => {
  const [formData, setFormData] = useState({
    mobileNumber: "",
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    location: "",
    isWorker: {
      isRegistered: false,
      isActive: false,
      isFlagged: false,
    },
    isClient: true,
    isAgency: {
      isRegistered: false,
      isActive: false,
      isFlagged: false,
    },
    isLoggedin: false,
    govtIDvalid: false,
  });
  const [errors, setErrors] = useState({
    email: "",
    mobileNumber: "",
  });

  const [hidePassword, setHidePassword] = useState(true);
  const navigate = useNavigate();

  // const checkUser = async (email) => {

  //   const data = { ...formData };
  //   const response = await axios.get("http://localhost:5000/task/api/users", {
  //     formData,
  //   });
  //   try {
  //     if (response.status === 200) {
  //       return true;
  //     } else {
  //       return false;
  //     }
  //   } catch (error) {
  //     console.error("User Check Error: ", error);
  //   }
  // };

  const createNewUser = async () => {
    // e.preventDefault();
    const url = "http://localhost:5000/api/users";
    const data = { ...formData };
    axios
      .post(url, data)
      .then(() => navigate("/auth/login"))
      .catch((error) => console.error("User Check Error: ", error));
    // if (checkUser) console.log("creating new user", data);
    // else await axios.post(url, data);
  };

  // handles data submission to the database
  const handleSubmit = (e) => {
    e.preventDefault();
    validateFormData(formData) === true ? createNewUser() : console.log(errors);
  };

  // handle change of the form
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateFormData = (form) => {
    const emailRegex = /^[a-z0-9]+.*[a-z0-9]*@[a-z0-9]+.(com|org|net|me)/;
    // const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
    const mobileNumberRegex = /0(7|8|9)(0|1)+[0-9]/;

    if (!emailRegex.test(form.email)) {
      setErrors({ ...errors, email: "Invalid email" });
      console.log(errors.email);
    }

    if (!mobileNumberRegex.test(form.mobileNumber)) {
      setErrors({ ...errors, mobileNumber: "Invalid mobile number" });
      console.log(errors.mobileNumber);
    }

    return (
      emailRegex.test(form.email) &&
      mobileNumberRegex.test(formData.mobileNumber)
    );
  };

  return (
    <div className="w-screen flex flex-col items-center justify-around ">
      <div className="flex items-center flex-row mx-auto md:p-[20px] md:rounded-[20px] md:shadow-3xl ">
        <LeftFillerComponent />
        <form
          className="flex flex-col  px-[20px] md:w-auto  md:py-[40px] py-[100px] md:h-auto h-screen"
          onSubmit={(e) => handleSubmit(e)}
          method="post"
        >
          <div className="flex flex-row gap-[15px] mb-[10px] items-center text-[14px] ">
            <Link to="/">
              <img className=" w-[40px] " src={backButton} alt="back button" />
            </Link>
            Already have an account?
            <div className=" text-main-color ">
              <Link to="../login">Login</Link>
            </div>
          </div>
          <h1 className="text-[30px] font-semibold mb-[20px] ">
            <span className=" text-main-color ">Create </span>Account
          </h1>
          <div className="flex flex-col md:w-[500px] w-[330px] gap-[20px] text-[14px] mb-[30px] ">
            <label className=" flex flex-col gap-[5px] " htmlFor="">
              First name
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={(e) => handleChange(e)}
                className=" form-input "
              />
            </label>
            <label className=" flex flex-col gap-[5px]" htmlFor="">
              Last name
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={(e) => handleChange(e)}
                className=" form-input "
              />
            </label>
            <label className=" flex flex-col gap-[5px] " htmlFor="">
              Email{" "}
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={(e) => handleChange(e)}
                // required
                // pattern="/^[a-z0-9]+.*[a-z0-9]*@[a-z0-9]+.(com|org|net|me)/"
                className=" form-input"
              ></input>
              {/* {errors.email && <span>{errors.email}</span>} */}
            </label>
            <label className=" flex flex-col gap-[5px] " htmlFor="">
              Mobile number
              <input
                type="text"
                name="mobileNumber"
                value={formData.mobileNumber}
                onChange={(e) => handleChange(e)}
                maxLength="11"
                minLength="11"
                // required
                // pattern="/^(?=.{11}$)0+(7|8|9)+(0|1)+[0-9]/"
                className="form-input "
              ></input>
            </label>
            <label className=" flex flex-col gap-[5px] " htmlFor="">
              <span role="alert" aria-hidden="true">
                Password
              </span>
              <div className="relative">
                <input
                  type={hidePassword ? "password" : "text"}
                  name="password"
                  value={formData.password}
                  onChange={(e) => handleChange(e)}
                  minLength="8"
                  required
                  className="form-input"
                />
                <div
                  className="absolute top-0 right-0 h-full w-[50px] flex items-center justify-center"
                  onClick={() => setHidePassword(!hidePassword)}
                >
                  {hidePassword ? (
                    <img src={eyeOffIcon} alt="eye closed icon" />
                  ) : (
                    <img src={eyeOnIcon} alt="eye on icon" />
                  )}
                </div>
              </div>
            </label>
          </div>

          <button
            type="submit"
            onClick={(e) => handleSubmit(e)}
            className=" mt-auto bg-primary-button-color-blue text-primary-text-color-white py-[15px] max-h-[50px] w-full justify-center flex flex-auto items-center "
          >
            {/* <Link
              className=" text-primary-text-color-white "
              to="../confirm-otp"
            > */}
            Create Account
            {/* </Link> */}
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
