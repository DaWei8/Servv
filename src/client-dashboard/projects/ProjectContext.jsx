/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

export const ProjectContext = createContext();

export default function ProjectContextProvider({ children }) {
  const [formData, setFormData] = useState([
    {
      projectTitle: "",
      projectStatus: "",
      projectDescription: "",
      projectRequirements: "",
      displayImage: null,
      projectImages: [null],
    },
  ]);
  return (
    <ProjectContext.Provider value={(formData, setFormData)}>
      {children}
    </ProjectContext.Provider>
  );
}
