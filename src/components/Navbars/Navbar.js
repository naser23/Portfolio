import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";
import MobileNav from "./MobileNav";
import ResumeButton from "../ResumeButton";
import "../../styles/navbar.css";

function Navbar() {
  const [navOpen, setNavOpen] = useState(false);
  function onClick() {
    setNavOpen(!navOpen);
  }

  return (
    <>
      <nav className="Navbar">
        <div
          className={!navOpen ? "hamburgerButton" : "hamburgerButton is-active"}
          onClick={onClick}
        >
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
        </div>
        <AnimatePresence>
          {navOpen && (
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              transition={{ ease: "easeInOut", duration: 0.2 }}
              exit={{ x: "-100%" }}
              className="motionComponent"
            >
              <MobileNav onClick={onClick} />
            </motion.div>
          )}
        </AnimatePresence>
        <div className="navLinks">
          <Link className="link" to="/">
            About
          </Link>
          <Link className="link" to="/projects">
            Projects
          </Link>
          <Link className="link" to="/contact">
            Contact
          </Link>

          {/* <NavLink to="/" className="link">
            About
          </NavLink>
          <NavLink to="/projects" className="link">
            Projects
          </NavLink>
          <NavLink to="/contact" className="link">
            Contact
          </NavLink> */}

          <ResumeButton />
        </div>
      </nav>
    </>
  );
}

export default Navbar;
