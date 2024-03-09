import serviceImage from "../../assets/images/project-picture-frame.png";
import StarRating from "../../components/starRating";

export default function WorkerServiceOverviewCard() {
  return (
        <div className="  flex flex-col gap-[12px] bg-primary-bg-color-white rounded-[10px] ">
        <img
          className=" w-full rounded-[8px] max-h-[240px] flex flex-auto "
          src={serviceImage}
          alt=" service image"
        />
        <div className=" flex flex-row justify-between gap-[4px] ">
          <div className=" flex flex-col gap-[5px] ">
            <p className=" text-[16px] font-[600] ">Mobile car detailing</p>
            <p className=" text-[12px] ">Mobile Shine</p>
            <div className=" rounded-[16px] flex items-center gap-[5px] bg-default-green px-[8px] w-fit ">
              <div className=" w-[8px] h-[8px] rounded-[50%] bg-primary-button-color-white "></div>
              <p className=" text-[12px] ">Active</p>
            </div>
          </div>
          <div className=" flex flex-col pl-[10px] pr-[5px] items-end ">
            <StarRating number={4} />
            <p className=" text-[12px] ">
              <span className=" text-[14px] ">4.8/</span>5.0 rating
            </p>
            <p className=" text-[12px] ">19 jobs</p>
          </div>
        </div>
        <div className=" flex flex-col gap-[5px] w-full border-t-2 border-t-primary-button-color-blue border-solid border-x-0 border-b-0 pt-[10px] ">
          <h2 className=" text-[18px] font-[600] ">Overview</h2>
          <p className=" text-[14px] leading-[200%] ">
            At Mobile Shine, we&lsquo;re not just a car detailing service;
            we`&lsquo;re your vehicle&lsquo;s personal spa on wheels,
            bringing a refreshing and rejuvenating experience to your
            doorstep. Our mission is to transform your car into a sparkling
            masterpiece, ensuring it radiates that new car feel, no matter
            its age.
          </p>
        </div>
      </div>
  )
}
