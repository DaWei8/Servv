/* eslint-disable react/prop-types */


export default function ClientProjectSubSection(props) {
  return (
    <div className="_projects">
      <div className=" flex flex-col gap-[20px] ">
        <div className=" flex p-[10px] rounded-[8px] bg-transparent-blue-10 ">
          <h2 className=" text-[20px] flex items-center font-[600] text-primary-text-color-black ">
            {props.title}
          </h2>
          {props.button}
        </div>
        <div className="_projects-collection">
          <div className=" flex flex-wrap gap-[20px] md:justify-normal justify-center items-center  ">
            {props.childrenContent}
          </div>
        </div>
      </div>
    </div>
  );
}
