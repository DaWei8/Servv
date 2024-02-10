import { useState } from "react";

const NewProjectBasicInformation = () => {
  const [formDataSegment, setformDataSegment] = useState([]);
  return (
    <div className=" min-w-[320px] flex flex-col flex-auto gap-[10px] ">
      <h2 className=" text-[18px] font-[600] ">Basic Information</h2>
      <div className=" flex flex-col gap-[10px] ">
        <label className=" flex flex-col gap-[6px] p-[8px] shadow-3xl ">
          <h3 className=" text-main-color text-[14px] font-[600] ">
            Project name
          </h3>
          <input type="text"></input>
        </label>
        <label className=" flex flex-col gap-[6px] p-[8px] shadow-3xl ">
          <h3 className=" text-main-color text-[14px] font-[600] ">
            Project name
          </h3>
          <input type="text"></input>
        </label>
        <label className=" flex flex-col gap-[6px] p-[8px] shadow-3xl ">
          <h3 className=" text-main-color text-[14px] font-[600] ">
            Project name
          </h3>
          <input type="text"></input>
        </label>
      </div>
    </div>
  );
};

export default NewProjectBasicInformation;
