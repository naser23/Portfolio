import React from "react";
import { useContext, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faWindowMaximize } from "@fortawesome/free-solid-svg-icons";
import ProjectContext from "../ProjectContext";
import "../styles/projectpage.css";

function ProjectPage() {
  const { project, sessionData, setProjectDetails, setSessionData } =
    useContext(ProjectContext);

  useEffect(() => {
    const data = window.sessionStorage.getItem("project");
    setProjectDetails({
      project: JSON.parse(data),
    });
  }, []);

  return (
    project && (
      <main className="projectPage">
        <div className="pageContent">
          <h1 className="projectTitle">{project.name}</h1>
          <img
            className="mainImage"
            src={project.pictures.one}
            alt={project.name}
          />
          <p className="description">{project.description}</p>
          <section className="links">
            <div className="technologies"></div>
            <div className="liveSite">
              <FontAwesomeIcon
                icon={faWindowMaximize}
                className="icon"
              ></FontAwesomeIcon>
              <p>Demo</p>
            </div>
            <div className="Repo">
              <FontAwesomeIcon icon={faCode} className="icon"></FontAwesomeIcon>
              <p>Code</p>
            </div>
          </section>
        </div>
      </main>
    )
  );
}

export default ProjectPage;
