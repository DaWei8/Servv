const NewProjectRequirements = () => {
  return (
    <div className=" min-w-[320px] flex flex-col flex-auto gap-[10px] ">
      <h2 className=" text-[18px] font-[600] ">Requirements</h2>
      <div className=" flex flex-col gap-[10px] ">
        <div className=" flex flex-row gap-[20px] ">
          <div className=" flex flex-col gap-[6px] rounded-[8px] p-[8px] shadow-3xl ">
            <h3 className=" text-[14px] font-[600] ">Gender</h3>
            <p>Male only</p>
          </div>
          <div className=" flex flex-col gap-[6px] rounded-[8px] p-[8px] shadow-3xl ">
            <h3 className=" text-[14px] font-[600] ">Work Category</h3>
            <p>Unspecified</p>
          </div>
          <div className=" flex flex-col gap-[6px] rounded-[8px] p-[8px] shadow-3xl ">
            <h3 className=" text-[14px] font-[600] ">Budget</h3>
            <p>N50,000</p>
          </div>
        </div>
        <div className=" flex flex-col gap-[6px] rounded-[8px] p-[8px] shadow-3xl ">
          <h3 className=" text-[14px] font-[600] ">Locations</h3>
          {/* <TextBoxCardMultipleItems content={{}} /> */}
          <p>Current Location</p>
        </div>
        <div className=" h-[120px] flex border-[1px] rounded-[8px] border-solid border-primary-button-color-blue flex-col gap-[6px] p-[8px] shadow-3xl ">
          <h3 className=" text-[14px] font-[600] ">Other requirements</h3>
          {/* <TextBoxCardMultipleItems content={{}} /> */}
          <p>Description of other requirements</p>
        </div>
      </div>
    </div>
  );
};

export default NewProjectRequirements;
