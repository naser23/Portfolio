import React from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import "../styles/contact.css";

function Contact() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ ease: "easeInOut", duration: 0.2 }}
      exit={{ opacity: 0 }}
      className="contactPage"
    >
      <div className="contactPageContent">
        <h1 className="contactHeader">Get In Touch</h1>
        <p className="contactParagraph">
          If you have any opportunities or feedback for me I would be happy to
          recieve it. I'll get back to you ASAP. Lets build something great
          together!
        </p>
        <a className="contactButton" href="mailto:naserabdulkadir0@gmail.com">
          Say Hello!
        </a>
        <div className="socials">
          <a className="link" target="_new" href="https://github.com/naser23">
            <FontAwesomeIcon icon={faGithub} className="socialIcon" />
          </a>
          <a
            className="link"
            target="_new"
            href="https://www.linkedin.com/in/naser-abdulkadir"
          >
            <FontAwesomeIcon icon={faLinkedin} className="socialIcon" />
          </a>
        </div>
      </div>
    </motion.main>
  );
}

export default Contact;
