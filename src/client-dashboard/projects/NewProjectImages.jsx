import { Link } from "react-router-dom";
import addIcon from "../../assets/icons/add.svg";
import cancelRed from "../../assets/icons/cancel-red.svg";
import newProjectImage from "../../assets/images/new-project-image.png";
import ImageUpload from "react-image-upload";
import axios from "axios";

import { useContext, useState } from "react";
import { ProjectContext } from "./ProjectContext";


export default function NewProjectImages() {
  const { formData, setFormData } = useContext(ProjectContext);
  const [displayImage, setDisplayImage] = useState(null);
  const [projectImages, setProjectImages] = useState([]);

  const handleImageUpload = async () => {
    const formData = new FormData();
    formData.append("image", setDisplayImage);

    try {
      const response = await axios.post(
        "http://localhost:5000/task/api/create-project",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(response.data);
    } catch (error) {
      console.error(error);  
    }
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setFormData({ ...formData, projectImage: reader.result });
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="min-w-[320px] flex flex-col flex-auto gap-[10px] ">
      <h2 className=" text-[18spx] font-[600] ">Project Images</h2>
      <p>Maximum of four Images that are related to your project</p>
      <div className=" flex gap-[10px] ">
        <div className=" rounded-[10px] overflow-hidden max-w-[280px] min-h-[280px] flex items-center justify-between bg-transparent-blue-10 ">
          <ImageUpload
            id="projectImage"
            label="Choose an image"
            withIcon={true}
            buttonText={"Choose an image"}
            buttonClassName="primary-button-blue"
            onChange={handleImageUpload}
            imgClass="w-full h-full"
            maxFileSize={5242880} // 5MB
            maxFileCount={1}
            imageFormat="jpg, jpeg, png"
            withPreview={true}
            singleImage={true}
            labelClass="absolute w-[24px] p-[5px] rounded-[20px] h-[24px] bg-red-500 right-[10px] top-[10px]"
            cancelImage={cancelRed}
            cancelClassName="absolute w-[24px] p-[5px] rounded-[20px] h-[24px] bg-red-500 right-[10px] top-[10px] "
            alt="cancel icon"
            errorMessage="Maximum of four Images that are related to your project"
          />
        </div>
        <div className="flex flex-col gap-[10px] ">
          <div className=" rounded-[10px] overflow-hidden max-w-[90px] flex-auto flex items-center justify-between bg-transparent-blue-10 ">
            <ImageUpload
              id="projectImage"
              label="Choose an image"
              withIcon={true}
              buttonText={"Choose an image"}
              buttonClassName="primary-button-blue"
              onChange={handleImageUpload}
              imgClass="w-full h-full"
              maxFileSize={5242880} // 5MB
              maxFileCount={1}
              imageFormat="jpg, jpeg, png"
              withPreview={true}
              singleImage={true}
              labelClass="absolute w-[24px] p-[5px] rounded-[20px] h-[24px] bg-red-500 right-[10px] top-[10px]"
              cancelImage={cancelRed}
              cancelClassName="absolute w-[24px] p-[5px] rounded-[20px] h-[24px] bg-red-500 right-[10px] top-[10px] "
              alt="cancel icon"
              errorMessage="Maximum of four Images that are related to your project"
            />
          </div>
          <div className=" rounded-[10px] overflow-hidden max-w-[90px] flex-auto flex items-center justify-between bg-transparent-blue-10 ">
            <ImageUpload
              id="projectImage"
              label="Choose an image"
              withIcon={true}
              buttonText={"Choose an image"}
              buttonClassName="primary-button-blue"
              onChange={handleImageUpload}
              imgClass="w-full h-full"
              maxFileSize={5242880} // 5MB
              maxFileCount={1}
              imageFormat="jpg, jpeg, png"
              withPreview={true}
              singleImage={true}
              labelClass="absolute w-[24px] p-[5px] rounded-[20px] h-[24px] bg-red-500 right-[10px] top-[10px]"
              cancelImage={cancelRed}
              cancelClassName="absolute w-[24px] p-[5px] rounded-[20px] h-[24px] bg-red-500 right-[10px] top-[10px] "
              alt="cancel icon"
              errorMessage="Maximum of four Images that are related to your project"
            />
          </div>
          <div className="  ">
            <input type="file" />
          </div>
        </div>
      </div>
      <div>
        <label htmlFor="">
          {" "}
          <img className=" w-[14px] " src={addIcon} alt="image for project" />
          <p className=" text-primary-text-color-white ">Add picture</p>
        </label>
        <input
          type="file"
          className=" w-fit flex items-center primary-button-blue gap-[10px] "
        ></input>
      </div>
    </div>
  );
}
