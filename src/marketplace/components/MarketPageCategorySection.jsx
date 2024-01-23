/* eslint-disable react/prop-types */

const MarketPageCategorySection = (props) => {
  return (
    <div className={props.bgSettings}>
      <div className="max-w-[1134px]">
        <div className=" gap-[20px] justify-between flex flex-auto ">
          {props.projectList}
        </div>
      </div>
    </div>
  );
};

export default MarketPageCategorySection;
