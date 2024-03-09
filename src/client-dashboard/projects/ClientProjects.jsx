/* eslint-disable react/prop-types */
// import "./ClientProjects.scss";
import { Route, Routes } from "react-router-dom";
import ClientProjectHome from "./ClientProjectHome";
import ClientProjectNewProject from "./ClientProjectNewProject";
import ClientProjectInfo from "./ClientProjectInfo";
import { ProjectContextProvider } from "./ProjectContext";

const ClientProjects = () => {
  return (
    <div className=" flex flex-col w-screen flex-auto ">
      <ProjectContextProvider>
        <Routes>
          <Route path="/" Component={ClientProjectHome} />
          <Route path="/newproject" Component={ClientProjectNewProject} />
          <Route path="/projectinfo/*" Component={ClientProjectInfo} />
        </Routes>
      </ProjectContextProvider>
    </div>
  );
};

export default ClientProjects;
