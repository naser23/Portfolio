import React from "react";
import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faWindowMaximize } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
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
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="projectPage"
      >
        <div className="pageContent">
          <h1 className="projectTitle">{project.name}</h1>
          <img
            className="mainImage"
            src={project.pictures.one}
            alt={project.name}
          />
          <div className="technologies">
            {project.technologies.map((tool) => (
              <p className="tool" key={project.technologies.indexOf(tool)}>
                {tool}
              </p>
            ))}
          </div>
          <p className="description">{project.description}</p>
          <section className="links">
            <a href={project.siteLink} target="_new" className="liveSite">
              <FontAwesomeIcon
                icon={faWindowMaximize}
                className="icon"
              ></FontAwesomeIcon>
              Demo
            </a>
            <a href={project.Repo} target="_new" className="Repo">
              <FontAwesomeIcon icon={faCode} className="icon"></FontAwesomeIcon>
              <p>Code</p>
            </a>
          </section>
        </div>
      </motion.main>
    )
  );
}

export default ProjectPage;
