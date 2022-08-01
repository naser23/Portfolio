import { createContext, useState } from "react";
const ProjectContext = createContext();

export function ProjectProvider({ children }) {
  const [projectDetails, setProjectDetails] = useState({
    project: "",
  });

  const [sessionData, setSessionData] = useState();
  const { project } = projectDetails;

  return (
    <ProjectContext.Provider
      value={{ project, sessionData, setSessionData, setProjectDetails }}
    >
      {children}
    </ProjectContext.Provider>
  );
}

export default ProjectContext;
