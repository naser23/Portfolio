import React from "react";
import { motion } from "framer-motion";
import "../styles/landing.css";

function Landing() {
  return (
    <section className="landingPage">
      <motion.div
        className="landingPageContent"
        initial={{ opacity: 0.5 }}
        animate={{ opactiy: 1 }}
        transition={{ duration: 0.2 }}
      >
        <h1 className="nameHeader">
          Naser <br /> Abdulkadir
        </h1>
        <h3 className="landingSubHeader">Software Developer</h3>
        <p className="landingParagraph">
          Hello! Im an aspiring Web Developer based out of Alexandria, VA. I
          have a passion for web development and I'm looking to show my skills
          and learn as much as I can. Click below to learn more about me!
        </p>
      </motion.div>
    </section>
  );
}

export default Landing;
