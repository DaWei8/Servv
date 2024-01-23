import starIcon from "../assets/icons/star.svg";

export default function StarRating() {
  return (
    <div className=" flex gap-[1px] flex-row ">
      <img className=" w-[20px] h-[20px] " src={starIcon} alt=" star icon " />
      <img className=" w-[20px] h-[20px] " src={starIcon} alt=" star icon " />
      <img className=" w-[20px] h-[20px] " src={starIcon} alt=" star icon " />
      <img className=" w-[20px] h-[20px] " src={starIcon} alt=" star icon " />
      <img className=" w-[20px] h-[20px] " src={starIcon} alt=" star icon " />
    </div>
  );
}
