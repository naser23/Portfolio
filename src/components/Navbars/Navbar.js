import React from "react";
import { useState } from "react";
import MobileNav from "./MobileNav";
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
          <div className="link">Resume</div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
