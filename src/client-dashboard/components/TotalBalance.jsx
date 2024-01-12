/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import SeeMore from "../../assets/icons/see-more.svg";

const TotalBalance = () => {
  return (
    <div className="total-balance-card flex flex-col lg:max-w-[240px] md:max-w-[200px] w-[165px] h-[130px] rounded-[10px] bg-pale-blue-grey p-[10px] flex-auto  ">
      <p className="title text-[10px] ">Total balance</p>
      <h1 className="balance lg:text-[22px] text-[20px] font-[600] ">$201,000.83</h1>
      <p className="text-[10px] mt-auto " >
        <Link className=" flex gap-[5px] " to="">
          See more <img src={SeeMore} alt="link to another page" />
        </Link>
      </p>
    </div>
  );
};

export default TotalBalance;
