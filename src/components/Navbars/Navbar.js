import React from "react";
import { useState } from "react";
import MobileNav from "./MobileNav";
import ResumeButton from "../ResumeButton";
import { motion, AnimatePresence } from "framer-motion";
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
              <MobileNav />
            </motion.div>
          )}
        </AnimatePresence>
        <div className="navLinks">
          <div className="link">About</div>
          <div className="link">Projects</div>
          <div className="link">Contact</div>
          <ResumeButton />
        </div>
      </nav>
    </>
  );
}

export default Navbar;
