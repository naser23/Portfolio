import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import "../styles/landing.css";

function Landing() {
  const navigate = useNavigate();

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ ease: "easeInOut", duration: 0.2 }}
      exit={{ opacity: 0 }}
      className="landingPage"
    >
      <section className="landingPageContent">
        <h1 className="nameHeader">Naser Abdulkadir</h1>
        <h3 className="landingSubHeader">Software Developer</h3>
        <p className="landingParagraph">
          Hello! My name is Naser Abdulkadir and I'm an aspiring full stack web
          developer. I was looking for a career that would keep me engaged and
          would allow me to be creative and build new things as my skills
          improved. I could tell since my very first project that software
          development was the career I was looking for. Fast forward to today,
          and I have built many more projects and learned much more than I
          thought I could learn from when I started until now.
        </p>
        <button
          className="projectsButton"
          onClick={() => navigate("/projects")}
        >
          Projects
        </button>
      </section>
    </motion.main>
  );
}

export default Landing;
