// require("dotenv").config();

import ClientProjectSubSection from "../components/ClientProjectSubSection";
import ProjectChildPage from "./ProjectChildPage";
import ProjectStatusCard from "./ProjectStatusCard";
import projectImage from "../../assets/images/project-picture-frame.png";
import addIcon from "../../assets/icons/add.svg";
// import cancelRed from "../../assets/icons/cancel-red.svg";

import { useRef } from "react";
import { useProject } from "./ProjectContext";

import axios from "axios";
import {
  StyledFormDiv,
  StyledInput,
  StyledInputImage,
} from "../utils/constants";
import { useNavigate } from "react-router-dom";
import { states } from "../../../dist/assets/data/locations";

const ClientProjectNewProject = () => {
  const { formData, setFormData, projectRequirements, setProjectRequirements } =
    useProject();
  const navigate = useNavigate();

  const createNewProject = async (data) => {
    // e.preventDefault();
    const url = "http://localhost:5000/api/projects/createproject";
    axios
      .post(url, data)
      .then(() => navigate("../"))
      .catch((error) => {
        console.error("David Project Error :", error);
      });
  };

  const imageInputRef = useRef(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    validateFormData(formData) === true
      ? createNewProject({ ...formData }).then(() =>
          console.log("Form submitted:", formData)
        )
      : alert("fill in a project title and description");
  };

  const validateFormData = () => {
    return formData.title && formData.description ? true : false;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    console.log(formData);
  };

  const handleProjectRequirementsChange = (e) => {
    const { name, value } = e.target;
    setProjectRequirements({ ...projectRequirements, [name]: value });
    setFormData({ ...formData, requirements: projectRequirements });
    console.log(formData);
  };

  const handleDisplayImageChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
    console.log(formData.displayImage);
  };

  const handleImageChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
    console.log(formData.images);
  };

  return (
    <ProjectChildPage
      childLink={"Project Name"}
      childContent={
        // form page
        <form className="flex flex-col flex-auto " onSubmit={handleSubmit}>
          <div className=" flex flex-auto flex-col py-[20px] gap-[20px] ">
            <ClientProjectSubSection
              title="Project Name"
              button={
                <div
                  onClick={handleSubmit}
                  className=" ml-auto w-fit flex items-center primary-button-blue gap-[10px] "
                >
                  <p className=" text-primary-text-color-white ">
                    Save Project
                  </p>
                </div>
              }
              childrenContent={
                <div className=" flex flex-wrap flex-auto flex-row gap-[20px] px-[10px] ">
                  <div className=" flex flex-1 w-[30%] min-w-[300px] ">
                    <div className=" min-w-[320px] flex flex-col flex-auto gap-[10px] ">
                      <h2 className=" text-[18px] font-[600] ">
                        Basic Information
                      </h2>
                      <div className=" flex flex-col gap-[10px] ">
                        <label className=" flex flex-col gap-[6px] p-[8px] ">
                          <h3 className=" text-[14px] font-[600] ">
                            Project name
                          </h3>
                          <StyledInput
                            type="text"
                            name="title"
                            value={formData.title}
                            onChange={handleInputChange}
                          />
                        </label>
                        <label className=" flex flex-col gap-[6px] p-[8px] ">
                          <h3 className=" text-[14px] font-[600] ">
                            Project description
                          </h3>
                          <StyledInput
                            type="text"
                            name="description"
                            value={formData.description}
                            onChange={handleInputChange}
                          />
                        </label>
                        <label className=" flex flex-col gap-[6px] p-[8px] ">
                          <h3 className="  text-[14px] font-[600] ">
                            Project duration
                          </h3>
                          <StyledInput
                            type="text"
                            name="duration"
                            value={formData.duration}
                            onChange={handleInputChange}
                          />
                        </label>
                      </div>
                    </div>
                  </div>

                  <div className=" flex flex-1 w-[30%] min-w-[300px] ">
                    <div className=" min-w-[320px] flex flex-col flex-auto gap-[10px] ">
                      <h2 className=" text-[18px] font-[600] ">Requirements</h2>
                      <div className=" flex flex-col gap-[10px] ">
                        <div className=" flex flex-row gap-[10px] ">
                          <StyledFormDiv>
                            <h3 className=" text-[14px] font-[600] w-max ">
                              Gender
                            </h3>
                            <select
                              name="gender"
                              onSelect={handleProjectRequirementsChange}
                              className=" form-input h-[50px] border-grey-400 border-solid border-[0.5px] px-[4px] bg-primary-bg-color-white rounded-[4px] "
                            >
                              <option
                                // onChange={handleInputChange}
                                defaultValue="any"
                              >
                                Any
                              </option>
                              <option
                                // onChange={handleInputChange}
                                defaultValue="male"
                              >
                                Male
                              </option>
                              <option
                                // onChange={handleInputChange}
                                defaultValue="female"
                              >
                                Female
                              </option>
                            </select>
                          </StyledFormDiv>
                          <StyledFormDiv>
                            <h3 className=" text-[14px] font-[600] w-max ">
                              Work Category
                            </h3>
                            <StyledInput
                              type="text"
                              name="category"
                              defaultValue={formData.requirements.category}
                              onChange={handleProjectRequirementsChange}
                            />
                          </StyledFormDiv>
                          <StyledFormDiv>
                            <h3 className=" text-[14px] font-[600] w-max ">
                              Budget
                            </h3>
                            <StyledInput
                              type="text"
                              name="budget"
                              defaultValue={formData.requirements.budget}
                              onChange={handleProjectRequirementsChange}
                            />
                          </StyledFormDiv>
                        </div>
                        <StyledFormDiv>
                          <h3 className=" text-[14px] font-[600] ">
                            Locations
                          </h3>
                          <select
                            name="gender"
                            onSelect={handleProjectRequirementsChange}
                            className=" form-input h-[50px] border-grey-400 border-solid border-[0.5px] px-[4px] bg-primary-bg-color-white rounded-[4px] "
                          >
                            {states.map((state, i) => (
                              <option
                                key={i}
                        
                                defaultValue={`${state}`}
                              >
                                {state}
                              </option>
                            ))}
                          </select>
                        </StyledFormDiv>
                        <StyledFormDiv>
                          <h3 className=" text-[14px] font-[600] ">
                            Other requirements
                          </h3>
                          <StyledInput
                            type="text"
                            name="otherRequirements"
                            defaultValue={
                              formData.requirements.otherRequirements
                            }
                            onChange={handleProjectRequirementsChange}
                          />
                        </StyledFormDiv>
                      </div>
                    </div>
                  </div>

                  <div className=" flex flex-1 w-[30%] min-w-[300px] ">
                    <div className="min-w-[320px] flex flex-col flex-auto gap-[10px] ">
                      <h2 className=" text-[18spx] font-[600] ">
                        Project Images
                      </h2>
                      <p>
                        Maximum of four Images that are related to your project
                      </p>
                      <div className=" flex gap-[10px] ">
                        <div className="relative rounded-[10px] flex-auto min-h-[200px]  flex items-center p-0 justify-between bg-transparent-blue-10 ">
                          {/* <label className=" w-full h-full " label="image-input"> */}
                          <StyledInputImage
                            type="file"
                            defaultValue={formData.displayImage}
                            onChange={handleDisplayImageChange}
                            name="displayImage"
                            id="image"
                          />
                          {/* </label> */}
                        </div>
                        <div className="flex flex-col gap-[10px] ">
                          <div className=" relative rounded-[10px] w-[90px] flex-auto flex items-center justify-between bg-transparent-blue-10 ">
                            {/* <label label="image-input"> */}
                            <StyledInputImage
                              type="file"
                              defaultValue={formData.images[1]}
                              onChange={handleImageChange}
                              name="projectImage1"
                              id="image"
                            />
                            {/* </label> */}
                          </div>
                          <div className=" relative rounded-[10px] w-[90px] flex-auto flex items-center justify-between bg-transparent-blue-10 ">
                            {/* <label label="image-input"> */}
                            <StyledInputImage
                              type="file"
                              defaultValue={formData.images[2]}
                              onChange={handleImageChange}
                              name="projectImage2"
                              id="image"
                            />
                            {/* </label> */}
                          </div>
                          <div className=" relative rounded-[10px] w-[90px] flex-auto flex items-center justify-between bg-transparent-blue-10 ">
                            {/* <label label="image-input"> */}
                            <StyledInputImage
                              type="file"
                              defaultValue={formData.images[2]}
                              onChange={handleImageChange}
                              name="projectImage3"
                              id="image"
                            />
                            {/* </label> */}
                          </div>
                        </div>
                      </div>
                      <div
                        onClick={() => imageInputRef.current.click()}
                        className=" w-fit flex items-center primary-button-blue gap-[10px] "
                      >
                        <img
                          className=" w-[14px] "
                          src={addIcon}
                          alt="image for project"
                        />
                        <p className=" text-primary-text-color-white ">
                          Add picture
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              }
            />
            <ClientProjectSubSection
              title="Project Status"
              childrenContent={
                <div className=" flex flex-wrap flex-auto flex-row gap-[10px] px-[10px] ">
                  <div className=" flex flex-1 ">
                    <ProjectStatusCard
                      rating={"4.0"}
                      image={projectImage}
                      title={"Home Refurbishing"}
                      date={"10 Dec"}
                    />
                  </div>
                </div>
              }
            />
          </div>
        </form>
      }
    />
  );
};

export default ClientProjectNewProject;
