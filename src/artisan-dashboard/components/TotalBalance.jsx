/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import SeeMore from "../../assets/icons/see-more.svg";
import "./components.scss"

const TotalBalance = () => {
  return (
    <div className="total-balance-card">
      <p className="title">Total balance</p>
      <h1 className="balance">$201,000.83</h1>
      <p>
        <Link to="">
          See more <img src={SeeMore} alt="link to another page" />
        </Link>
      </p>
    </div>
  );
};

export default TotalBalance;
