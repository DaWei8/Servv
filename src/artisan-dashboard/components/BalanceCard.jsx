/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import SeeMore from "../../assets/icons/see-more.svg";
// import "./components.scss"

const BalanceCard = (props) => {
  return (
    <div className=" shadow-3xl flex flex-col p-[10px] bg- rounded-[10px] border-solid border-r-0 border-t-0 border-b-0 border-l-[4px] border-l-pale-blue-grey md:max-w-[200px] w-[165px] flex-auto  ">
      <h3 className="title text-[10px] font-[600] ">{props.title}</h3>
      <p className=" text-[10px] text-grey-400 " >Balance</p>
      <h1 className="balance md:text-[24px] text-[20px] font-[600] ">{props.balance}</h1>
      <p className=" mt-auto " >
        <Link className=" text-[10px] gap-[5px] flex " to="">
          See more <img src={SeeMore} alt="link to another page" />
        </Link>
      </p>
    </div>
  );
};

export default BalanceCard;
