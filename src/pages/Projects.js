import React from "react";
import "../styles/projects.css";

function Projects() {
  return (
    <main className="projectsPage">
      <section className="projectsPageContent">
        <h1 className="header">Projects</h1>
        <div className="projectsArea">
          <div className="project">
            <img
              className="projectImg"
              src="https://www.abyssalchronicles.com/gallery/albums/userpics/10002/Muzet_school.jpg"
              alt="muzet"
            />
            <p>Entertainment Web App</p>
          </div>
          <div className="project">
            <img
              className="projectImg"
              src="https://www.abyssalchronicles.com/gallery/albums/userpics/10002/Muzet_school.jpg"
              alt="muzet"
            />
            <p>Quiz App</p>
          </div>
          <div className="project">
            <img
              className="projectImg"
              src="https://www.abyssalchronicles.com/gallery/albums/userpics/10002/Muzet_school.jpg"
              alt="muzet"
            />
            <p>Space Tourism Website</p>
          </div>
          <div className="project">
            <img
              className="projectImg"
              src="https://www.abyssalchronicles.com/gallery/albums/userpics/10002/Muzet_school.jpg"
              alt="muzet"
            />
            <p>Name</p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Projects;
