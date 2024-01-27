import { useState } from "react";

/* eslint-disable react/prop-types */
export default function AboutService() {
  const [selectedOpt, setSelectedOpt] = useState(true);

  return (
    <div className=" flex flex-col gap-[30px] p-[10px] ">
      <div className=" flex flex-col gap-[5px] ">
        <h2 className=" text-[20px] font-[600] ">Disclaimer</h2>
        <p>
          At Mobile Shine, we do not repair cars or service cars. We strictly
          adhere to our packages!
        </p>
      </div>
      <div className=" flex flex-col gap-[10px] ">
        <h2 className=" text-[20px] font-[600] ">Choose your package</h2>
        <div className=" flex flex-col gap-[10px] ">

          <ServicePackage
            onClicked={() => setSelectedOpt(true)}
            selected={selectedOpt}
          />
          <ServicePackage
            onClicked={() => setSelectedOpt(true)}
            selected={selectedOpt}
          />
          <ServicePackage
            onClicked={() => setSelectedOpt(true)}
            selected={selectedOpt}
          />
        </div>
      </div>
      <div>
        <button className=" primary-button-blue h-[50px] ">Get in touch</button>
      </div>
    </div>
  );
}

const ServicePackage = () => {
  const [selectedOpt, setSelectedOpt] = useState(true);
  return (
    <div
      onClick={() => setSelectedOpt(!selectedOpt)}
      className={
        selectedOpt !== false
          ? " flex flex-row gap-[20px] duration-[500] rounded-[8px] border-l-[4px] border-y-0 border-r-0  border-solid border-l-primary-tab-select-color overflow-hidden shadow-3xl cursor-pointer "
          : " flex flex-row gap-[20px] duration-[500] rounded-[8px] overflow-hidden shadow-3xl cursor-pointer bg-primary-tab-select-color "
      }
    >
      <div className=" flex flex-col gap-[10px] items-start duration-[500] pl-[8px] py-[10px] ">
        <h3 className=" font-[600] ">Basic Package</h3>
        <p className=" leading-[200%] ">
          I will do several things this that this that this lorem ipsum dolor
          sit imet. I will do several things this that this that this lorem
          ipsum dolor sit imet.
        </p>
      </div>
      <div className=" flex flex-col gap-[10px] items-end w-[110px] justify-center px-[16px] bg-primary-tab-select-color ">
        <p className=" w-full text-right " >Price</p>
        <p className=" text-[16px] text-right w-full font-[600] ">N20,000</p>
      </div>
    </div>
  );
};
