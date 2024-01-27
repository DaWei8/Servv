/* eslint-disable react/prop-types */

const MarketPageProjectSection2 = (props) => {
  return (
    <div
      className={
        " flex flex-col gap-[5px] w-full items-center "
      }
    >
      <div className="max-w-[1134px] flex flex-col gap-[10px] ">
        <div className=" flex justify-between items-start ">
          <h2 className=" text-[20px] font-[600] ">{props.categoryTitle}</h2>
        </div>
        <div className=" gap-[20px] justify-between flex flex-auto overflow-x-scroll ">
          {props.projectList}
        </div>
      </div>
    </div>
  );
};

export default MarketPageProjectSection2;
