/* eslint-disable react/prop-types */
// import "./components.scss"


const TextBoxCard = (props) => {
  return (
    <div className=" rounded-[6px] flex flex-col gap-[8px] p-[8px] shadow-md md:max-w-[350px] flex-auto ">
      <h3 className=" text-[14px] font-[600] leading-normal ">{props.title}</h3>
      <p className=" text-[14px] leading-normal ">{props.content}</p>
    </div>
  );
};

export default TextBoxCard;
