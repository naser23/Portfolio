import React from "react";
import { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faWindowMaximize } from "@fortawesome/free-solid-svg-icons";

import ProjectContext from "../ProjectContext";
import "../styles/projectpage.css";

function Modal() {
  const { project } = useContext(ProjectContext);

  return (
    <main className="projectPage">
      <h1 className="projectTitle">{project.name}</h1>
      <img className="mainImage" src={project.pictures[0]} alt={project.name} />
      <p className="description">{project.description}</p>
      <section className="links">
        <div className="Repo">
          <FontAwesomeIcon icon={faCode} className="icon"></FontAwesomeIcon>
          <p>Source Code</p>
        </div>
        <div className="liveSite">
          <FontAwesomeIcon
            icon={faWindowMaximize}
            className="icon"
          ></FontAwesomeIcon>
          <p>Live Site</p>
        </div>
      </section>
    </main>
  );
}

export default Modal;
