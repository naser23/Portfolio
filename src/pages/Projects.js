import React from "react";
import { useContext } from "react";
import ProjectContext from "../ProjectContext";
import { motion } from "framer-motion";
import { projects } from "../data";
import "../styles/projects.css";
import { useNavigate } from "react-router-dom";

function Projects() {
  const { setProjectDetails } = useContext(ProjectContext);
  const navigate = useNavigate();

  function showProjectInfo(project) {
    window.sessionStorage.setItem("project", JSON.stringify(project));
    setProjectDetails({
      project: project,
    });

    navigate(`/${project.name}`);
  }

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ ease: "easeInOut", duration: 0.2 }}
      exit={{ opacity: 0 }}
      className="projectsPage"
    >
      <section className="projectsPageContent">
        <h1 className="header">Projects</h1>
        <div className="projectsArea">
          {projects.map((project) => (
            <div className="project" key={projects.indexOf(project)}>
              <div className="slideshow">
                <img
                  className="projectImg"
                  src={project.pictures.one}
                  alt={project.name}
                />
              </div>
              <div className="projectOverlay">
                <img
                  className="overlayImg"
                  src={project.pictures.one}
                  alt={project.name}
                />
                <button
                  className="viewProject"
                  onClick={() => showProjectInfo(project)}
                >
                  View Project
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </motion.main>
  );
}

export default Projects;
