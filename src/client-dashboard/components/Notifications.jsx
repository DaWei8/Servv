/* eslint-disable react/prop-types */
import servvIcon from "../../assets/icons/servv.svg";
import chatIcon from "../../assets/icons/messages-3.svg";
// import "./components.scss"
import { Link } from "react-router-dom";

const Notifications = () => {
  return (
    <div className=" lg:flex flex-col backdrop-blur-[40px] bg-[#B4CCFC1A] md:min-w-full lg:w-[450px] lg:max-w-[350px] gap-[12px] w-[91vw] p-[10px] rounded-[10px]">
      <div className="message-overlay-heading flex justify-between ">
        <h1 className=" text-[20px] font-[600] ">Notifications</h1>
        <p className=" text-main-color ">
          <Link>Read all</Link>
        </p>
      </div>
      <div className="message-overlay-container flex flex-col gap-[8px] flex-auto ">
        <NotificationCard
          icon={servvIcon}
          message="Allison dabiels just sent you a message"
          time="10m ago"
          stateIcon={chatIcon}
        />
        <NotificationCard
          icon={servvIcon}
          message="Allison dabiels just sent you a message"
          time="10m ago"
          stateIcon={chatIcon}
        />
        <NotificationCard
          icon={servvIcon}
          message="Allison dabiels just sent you a message"
          time="10m ago"
          stateIcon={chatIcon}
        />
        <NotificationCard
          icon={servvIcon}
          message="Allison dabiels just sent you a message"
          time="10m ago"
          stateIcon={chatIcon}
        />
        <NotificationCard
          icon={servvIcon}
          message="Allison dabiels just sent you a message"
          time="10m ago"
          stateIcon={chatIcon}
        />
      </div>
    </div>
  );
};

const NotificationCard = (props) => {
  return (
    <Link
      to={props.contentPageLink}
      className="message-card-container shadow-3xl p-[12px] flex gap-[10px] items-start flex-auto rounded-[10px] bg-white "
    >
      <img
        className="message-icon bg-white md:hidden lg:block w-[40px] h-[40px] rounded-[50%] p-[5px] "
        src={props.icon}
        alt="message icon"
      />
      <div className="message-and-time flex flex-col w-[70%] ">
        <p className="message leading-normal text-[12px] ">{props.message}</p>
        <p className="time leading-[150%] text-[10px] text-main-color ">
          {props.time}
        </p>
      </div>
      <img
        className="state-icon ml-auto w-[26px] h-[26px] "
        src={props.stateIcon}
        alt="state icon"
      />
    </Link>
  );
};

export default Notifications;
