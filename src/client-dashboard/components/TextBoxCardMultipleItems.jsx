/* eslint-disable react/prop-types */

// import "./components.scss"



const TextBoxCardMultipleItems = (props) => {
  return (
    <div className="text-box-card-multiple flex flex-col gap-[8px] p-[8px] shadow-md rounded-[6px] ">
      <h3 className=" text-[14px] font-[600] ">{props.title}</h3>
      <div className=" flex gap-[8px] flex-wrap ">
        {props.content.map((content, index) => (
          <div className="flex bg-pale-blue-grey rounded-[5px] " key={index}>
            <p className=" px-[10px] py-[5px]  " >{content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TextBoxCardMultipleItems;
