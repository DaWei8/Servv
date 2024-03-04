import { Link } from "react-router-dom";
import backButton from "../assets/icons/prev-arrow.svg";

// import validMark from "../../assets/icons/valid-mark.svg";

import LeftFillerComponent from "./LeftFillerComponent";

export default function ConfirmOTP() {
  return (
    <div className="w-screen flex flex-col items-center justify-around ">
      <div className="flex flex-row md:max-w-[80vw] mx-auto md:p-[20px] md:rounded-[20px] md:shadow-3xl">
        <LeftFillerComponent />
        <div className=" flex flex-col items-center login-form md:px-[70px] px-[20px] md:w-auto w-full md:py-[40px] py-[100px] md:h-auto h-screen gap-[60px]   ">
          <h1 className=" text-main-color text-[24px] font-[600] mr-auto " >Confirm OTP</h1>
          <p className="text-[14px] flex gap-[5px] font-semibold mb-[20px] text-main-color ">
          <Link to="/">
              <img className=" w-[40px] " src={backButton} alt="back button" />
            </Link>
            <span className=" text-primary-text-color-black ">
              Input the 4 digit OTP sent to
            </span>
            <span>username@email.com</span>
          </p>
          <div className=" flex flex-col ">
            <div
              id="inputs"
              className="inputs flex flex-row gap-[35px] text-[24px] font-[600] "
            >
              <input
                className="input-otp"
                type="text"
                inputMode="numeric"
                maxLength="1"
              />
              <input
                className="input-otp"
                type="text"
                inputMode="numeric"
                maxLength="1"
              />
              <input
                className="input-otp"
                type="text"
                inputMode="numeric"
                maxLength="1"
              />
              <input
                className="input-otp"
                type="text"
                inputMode="numeric"
                maxLength="1"
              />
            </div>
          </div>
          <button
            // onClick={handleSubmit}
            className="submit-btn w-full float-right h-[50px] py-[15px] mt-auto bg-primary-button-color-blue flex items-center justify-center "
            type="submit"
          >
            <Link
              style={{
                display: "flex",
                color: "#fff",
              }}
              to="../login"
            >
              Verify
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
}
