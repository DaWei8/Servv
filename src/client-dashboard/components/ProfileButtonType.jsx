/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import addIcon from "../../assets/icons/add.svg";
// import "./components.scss";

const ProfileButtonType = (props) => {
  return (
    <Link className="profile-button-type" to={props.buttonLink}>
      {/* <div className=""> */}
      <div className="add-button-icon">
        <img src={addIcon} alt="add icon" />
      </div>
      <p className="profile-button-text">{props.buttonContent}</p>
      {/* </div> */}
    </Link>
  );
};

export default ProfileButtonType;
