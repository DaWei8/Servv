/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from "react";

export const ProjectContext = createContext();

const ProjectContextProvider = ({ children }) => {
  const [projectRequirements, setProjectRequirements] = useState({
    location: "",
    gender: "any",
    budget: "none",
    category: "all",
    otherRequirements: "none",
  });
  const [formData, setFormData] = useState({
    user_id: "",
    title: "",
    status: "Pending",
    duration: "",
    description: "",
    displayImage: null,
    images: [null],
    requirements: projectRequirements,
    isApproved: false,
  });
  return (
    <ProjectContext.Provider
      value={{
        formData,
        projectRequirements,
        setFormData,
        setProjectRequirements,
      }}
    >
      {children}
    </ProjectContext.Provider>
  );
};
const useProject = () => useContext(ProjectContext);

export { ProjectContextProvider, useProject };
