/* eslint-disable react/prop-types */
import starIcon from "../assets/icons/star.svg";

export default function StarRating(props) {
  // props.number = 3;

  return (
    <div className=" flex gap-[1px] flex-row ">
      {props.number == 5 ? (
        <>
          <img
            className=" w-[20px] h-[20px] "
            src={starIcon}
            alt=" star icon "
          />
          <img
            className=" w-[20px] h-[20px] "
            src={starIcon}
            alt=" star icon "
          />
          <img
            className=" w-[20px] h-[20px] "
            src={starIcon}
            alt=" star icon "
          />
          <img
            className=" w-[20px] h-[20px] "
            src={starIcon}
            alt=" star icon "
          />
          <img
            className=" w-[20px] h-[20px] "
            src={starIcon}
            alt=" star icon "
          />{" "}
        </>
      ) : props.number == 4 ? (
        <>
          <img
            className=" w-[20px] h-[20px] "
            src={starIcon}
            alt=" star icon "
          />
          <img
            className=" w-[20px] h-[20px] "
            src={starIcon}
            alt=" star icon "
          />
          <img
            className=" w-[20px] h-[20px] "
            src={starIcon}
            alt=" star icon "
          />
          <img
            className=" w-[20px] h-[20px] "
            src={starIcon}
            alt=" star icon "
          />{" "}
        </>
      ) : props.number == 3 ? (
        <>
          <img
            className=" w-[20px] h-[20px] "
            src={starIcon}
            alt=" star icon "
          />
          <img
            className=" w-[20px] h-[20px] "
            src={starIcon}
            alt=" star icon "
          />
          <img
            className=" w-[20px] h-[20px] "
            src={starIcon}
            alt=" star icon "
          />{" "}
        </>
      ) : props.number == 2 ? (
        <>
          <img
            className=" w-[20px] h-[20px] "
            src={starIcon}
            alt=" star icon "
          />
          <img
            className=" w-[20px] h-[20px] "
            src={starIcon}
            alt=" star icon "
          />{" "}
        </>
      ) : props.number <= 1 ? (
        <>
          <img
            className=" w-[20px] h-[20px] "
            src={starIcon}
            alt=" star icon "
          />
        </>
      ) : (
        <>
          <img
            className=" w-[20px] h-[20px] "
            src={starIcon}
            alt=" star icon "
          />
        </>
      )}
    </div>
  );
}
