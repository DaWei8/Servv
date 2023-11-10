/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import SeeMore from "../../assets/icons/see-more.svg";
import "./components.scss"

const BalanceCard = (props) => {
  return (
    <div className="balance-card">
      <h3 className="title">{props.title}</h3>
      <p>Balance</p>
      <h1 className="balance">{props.balance}</h1>
      <p>
        <Link to="">
          See more <img src={SeeMore} alt="link to another page" />
        </Link>
      </p>
    </div>
  );
};

export default BalanceCard;
