import React from "react";
import "../../styles/mobilenav.css";

function MobileNav() {
  return (
    <nav className="mobileNav">
      <div className="linkArea">
        <div className="mobileLink">About</div>
        <div className="mobileLink">Projects</div>
        <div className="mobileLink">Contact</div>
        <div className="mobileLink">Resume</div>
      </div>
    </nav>
  );
}

export default MobileNav;
