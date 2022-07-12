import React from "react";
import "../../styles/mobilenav.css";

function MobileNav() {
  return (
    <nav className="mobileNav">
      <div className="link">About</div>
      <div className="link">Projects</div>
      <div className="link">Contact</div>
      <div className="link">Resume</div>
    </nav>
  );
}

export default MobileNav;
