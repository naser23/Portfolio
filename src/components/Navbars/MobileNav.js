import { Link } from "react-router-dom";
import React from "react";

import "../../styles/mobilenav.css";

function MobileNav({ onClick }) {
  return (
    <nav className="mobileNav">
      <div className="linkArea">
        <Link to="/" className="mobileLink" onClick={onClick}>
          About
        </Link>
        <Link to="/projects" className="mobileLink" onClick={onClick}>
          Projects
        </Link>
        <Link to="/contact" className="mobileLink" onClick={onClick}>
          Contact
        </Link>
        <button className="resumeButtonMobile">Resume</button>
      </div>
    </nav>
  );
}

export default MobileNav;
