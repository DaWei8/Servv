const NewProjectDescription = () => {
  return (
    <div className=" min-w-[320px] flex flex-col flex-auto gap-[10px] ">
      <h2 className=" text-[18px] font-[600] ">Job Description</h2>
      <div className=" flex flex-col gap-[10px] ">
        <div className=" flex flex-col gap-[6px] p-[8px] shadow-3xl ">
          <h3 className=" text-main-color text-[14px] font-[600] ">Painting</h3>
          <p>
            I want to do several things this that this that this lorem ipsum
            dolor sit imet. I will do several things this that this that this
            lorem ipsum dolor sit imet.
          </p>
        </div>
        <div className=" flex flex-col gap-[6px] p-[8px] shadow-3xl ">
          <h3 className="text-main-color text-[14px] font-[600] ">Roofing</h3>
          <p>Current Location</p>
        </div>
        <div className=" min-h-[120px] flex border-[1px] rounded-[10px] border-solid border-primary-button-color-blue flex-col gap-[6px] p-[8px] shadow-3xl ">
          <h3 className=" text-main-color text-[14px] font-[600] ">Duration</h3>
          <p>
            I want to do several things this that this that this lorem ipsum
            dolor sit imet. I will do several things this that this that this
            lorem ipsum dolor sit imet.
          </p>
        </div>
      </div>
    </div>
  );
}

export default NewProjectDescription