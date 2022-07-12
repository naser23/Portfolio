import React from "react";
import { useState } from "react";
import MobileNav from "./MobileNav";
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
        {navOpen && <MobileNav />}
      </nav>
    </>
  );
}

export default Navbar;
