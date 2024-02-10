// require("dotenv").config();

import ClientProjectSubSection from "../components/ClientProjectSubSection";
import ProjectChildPage from "./ProjectChildPage";
import ProjectStatusCard from "./ProjectStatusCard";
import projectImage from "../../assets/images/project-picture-frame.png";
import addIcon from "../../assets/icons/add.svg";
import cancelRed from "../../assets/icons/cancel-red.svg";

import { useRef, useState } from "react";
import ProjectContextProvider from "./ProjectContext";
import styled from "styled-components";

const StyledInput = styled.input`
  padding: 8px;
  font-size: 2px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 14px;
  line-height: 1.5;
  background-color: transparent;
  color: #26334d;
  width: 100%;
  height: 50px;
  box-sizing: border-box;
`;
const StyledInputImage = styled.input`
  display: flex;
  flex-direction: column;
  border-radius: 4px;
  font-size: 14px;
  line-height: 1.5;
  background-color: transparent;
  color: #26334d;
  width: 100%;
  box-sizing: border-box;
`;

const StyledFormDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  padding: 8px;
  border-radius: 8px;
  box-shadow: -5px 15px 15px 0px rgba(41, 74, 113, 0.05);
  font-size: 14px;
  color: #26334d;
  width: 100%;
  box-sizing: border-box;
`;

const ClientProjectNewProject = () => {
  const [formData, setFormData] = useState({
    projectTitle: "",
    projectDescription: "",
    projectRequirements: {
      gender: "",
      workCategory: "",
      budget: "",
      location: "",
      otherRequirements: "",
    },
    displayImage: "",
    projectImages: [],
  });

  const imageInputRef = useRef(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("Form submitted:", formData);
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleDisplayImageChange = (event) => {
    event.preventDefault();
  };

  const handleImageChange = (event) => {
    event.preventDefault();
  };

  return (
    <ProjectContextProvider>
      <ProjectChildPage
        childLink={"Project Name"}
        childContent={
          // form page
          <form className="flex flex-col flex-auto " onSubmit={handleSubmit}>
            <div className=" flex flex-auto flex-col py-[20px] gap-[20px] ">
              <ClientProjectSubSection
                title="Project Name"
                button={
                  <div className=" ml-auto w-fit flex items-center primary-button-blue gap-[10px] ">
                    <p className=" text-primary-text-color-white ">
                      Save Project
                    </p>
                  </div>
                }
                childrenContent={
                  <div className=" flex flex-wrap flex-auto flex-row gap-[20px] px-[10px] ">
                    <div className=" flex flex-1 w-[30%] min-w-[300px] ">
                      <ProjectContextProvider>
                        <div className=" min-w-[320px] flex flex-col flex-auto gap-[10px] ">
                          <h2 className=" text-[18px] font-[600] ">
                            Basic Information
                          </h2>
                          <div className=" flex flex-col gap-[10px] ">
                            <label className=" flex flex-col gap-[6px] p-[8px] shadow-3xl ">
                              <h3 className=" text-[14px] font-[600] ">
                                Project name
                              </h3>
                              <StyledInput
                                type="text"
                                name="projectTitle"
                                value={formData.projectTitle}
                                onChange={handleInputChange}
                              />
                            </label>
                            <label className=" flex flex-col gap-[6px] p-[8px] shadow-3xl ">
                              <h3 className=" text-[14px] font-[600] ">
                                Project description
                              </h3>
                              <StyledInput
                                type="text"
                                name="projectDescription"
                                value={formData.projectDescription}
                                onChange={handleInputChange}
                              />{" "}
                            </label>
                            <label className=" flex flex-col gap-[6px] p-[8px] shadow-3xl ">
                              <h3 className="  text-[14px] font-[600] ">
                                Project duration
                              </h3>
                              <StyledInput
                                type="text"
                                name="projectDuration"
                                value={formData.projectDuration}
                                onChange={handleInputChange}
                              />{" "}
                            </label>
                          </div>
                        </div>
                      </ProjectContextProvider>
                    </div>

                    <div className=" flex flex-1 w-[30%] min-w-[300px] ">
                      <ProjectContextProvider>
                        <div className=" min-w-[320px] flex flex-col flex-auto gap-[10px] ">
                          <h2 className=" text-[18px] font-[600] ">
                            Requirements
                          </h2>
                          <div className=" flex flex-col gap-[10px] ">
                            <div className=" flex flex-row gap-[10px] ">
                              <StyledFormDiv>
                                <h3 className=" text-[14px] font-[600] ">
                                  Gender
                                </h3>
                                <select
                                  name="genderSelector"
                                  className=" h-[50px] border-grey-400 border-solid border-[0.5px] px-[4px] bg-primary-bg-color-white rounded-[4px] "
                                >
                                  <option defaultValue="male">Male</option>
                                  <option defaultValue="female">Female</option>
                                  <option defaultValue="any">Any</option>
                                </select>
                              </StyledFormDiv>
                              <StyledFormDiv>
                                <h3 className=" text-[14px] font-[600] ">
                                  Work Category
                                </h3>
                                <StyledInput
                                  type="text"
                                  name="work-category"
                                  value={
                                    formData.projectRequirements.workCategory
                                  }
                                  onChange={handleInputChange}
                                />
                              </StyledFormDiv>
                              <StyledFormDiv>
                                <h3 className=" text-[14px] font-[600] ">
                                  Budget
                                </h3>
                                <StyledInput
                                  type="text"
                                  name="budget"
                                  value={formData.projectRequirements.budget}
                                  onChange={handleInputChange}
                                />
                              </StyledFormDiv>
                            </div>
                            <StyledFormDiv>
                              <h3 className=" text-[14px] font-[600] ">
                                Locations
                              </h3>
                              <StyledInput
                                type="text"
                                name="location"
                                value={formData.projectRequirements.location}
                                onChange={handleInputChange}
                              />
                            </StyledFormDiv>
                            <StyledFormDiv>
                              <h3 className=" text-[14px] font-[600] ">
                                Other requirements
                              </h3>
                              <StyledInput
                                type="text"
                                name="otherRequirements"
                                value={
                                  formData.projectRequirements.otherRequirements
                                }
                                onChange={handleInputChange}
                              />
                            </StyledFormDiv>
                          </div>
                        </div>
                      </ProjectContextProvider>
                    </div>

                    <div className=" flex flex-1 w-[30%] min-w-[300px] ">
                      <ProjectContextProvider>
                        <div className="min-w-[320px] flex flex-col flex-auto gap-[10px] ">
                          <h2 className=" text-[18spx] font-[600] ">
                            Project Images
                          </h2>
                          <p>
                            Maximum of four Images that are related to your
                            project
                          </p>
                          <div className=" flex gap-[10px] ">
                            <div className="relative rounded-[10px] flex-auto min-h-[200px]  flex items-center p-0 justify-between bg-transparent-blue-10 ">
                              {/* <label className=" w-full h-full " label="image-input"> */}
                              <StyledInputImage
                                type="file"
                                onChange={handleDisplayImageChange}
                                name="image"
                                id="image"
                              />
                              {/* </label> */}
                            </div>
                            <div className="flex flex-col gap-[10px] ">
                              <div className=" relative rounded-[10px] w-[90px] flex-auto flex items-center justify-between bg-transparent-blue-10 ">
                                {/* <label label="image-input"> */}
                                <StyledInputImage
                                  type="file"
                                  onChange={handleImageChange}
                                  name="image"
                                  id="image"
                                />
                                {/* </label> */}
                              </div>
                              <div className=" relative rounded-[10px] w-[90px] flex-auto flex items-center justify-between bg-transparent-blue-10 ">
                                {/* <label label="image-input"> */}
                                <StyledInputImage
                                  type="file"
                                  onChange={handleImageChange}
                                  name="image"
                                  id="image"
                                />
                                {/* </label> */}
                              </div>
                              <div className=" relative rounded-[10px] w-[90px] flex-auto flex items-center justify-between bg-transparent-blue-10 ">
                                {/* <label label="image-input"> */}
                                <StyledInputImage
                                  type="file"
                                  onChange={handleImageChange}
                                  name="image"
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
                      </ProjectContextProvider>
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
    </ProjectContextProvider>
  );
};

export default ClientProjectNewProject;
