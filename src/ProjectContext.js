import { createContext, useState } from "react";

const ProjectContext = createContext();

export function ProjectProvider({ children }) {
  const [projectDetails, setProjectDetails] = useState({
    projectName: "",
    project: "",
  });

  const { project, projectName } = projectDetails;

  return (
    <ProjectContext.Provider
      value={{ project, projectName, setProjectDetails }}
    >
      {children}
    </ProjectContext.Provider>
  );
}

export default ProjectContext;
