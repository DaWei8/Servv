/* eslint-disable react/prop-types */
import StarRating from "../../components/starRating";
import profilePicture from "../../assets/images/testimonial_1.png";
import { serviceReview } from "../../data/Datasets";

export default function ArtisanReviews() {
  return (
    <div className=" flex flex-col gap-[10px]  ">
      <div className="pr-[20px] overflow-y-scroll  focus:scroll-auto scroll-smooth stroke-main-color rounded-[10px] max-h-[500px] ">
        {serviceReview.map((content, index) => {
          return (
            <ReviewCard
              key={index}
              clientName={content.client}
              rating={content.rating}
              review={content.review}
            />
          );
        })}
      </div>
      <button className=" primary-button-blue h-[50px] ">Get in touch</button>
    </div>
  );
}

const ReviewCard = (props) => {
  return (
    <div className=" flex flex-col py-[28px] px-[16px] gap-[10px] duration-[500] rounded-[8px] shadow-3xl ">
      <div className=" flex justify-between w-full ">
        <div className=" flex flex-row gap-[10px] ">
          <img
            src={profilePicture}
            className=" w-[54px] h-[54px] rounded-[50%] "
            alt="profile image"
          />

          <div>
            <h3 className="font-[600] text-[16px] ">{props.clientName}</h3>
            <p>Client</p>
          </div>
        </div>

        <StarRating number={props.rating} />
      </div>
      <p className=" leading-[200%] text-[16px] ">{props.review}</p>
    </div>
  );
};
