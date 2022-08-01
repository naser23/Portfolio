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
        <a
          href="https://drive.google.com/file/d/19w_hjkloU8QgHb9fCbFOHA8arfkoOQkt/view?usp=sharing
"
          target="_new"
          className="resumeButtonMobile"
        >
          Resume
        </a>
      </div>
    </nav>
  );
}

export default MobileNav;
