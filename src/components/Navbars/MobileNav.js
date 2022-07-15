import React from "react";
import ResumeButton from "../ResumeButton";
import "../../styles/mobilenav.css";

function MobileNav() {
  return (
    <nav className="mobileNav">
      <div className="linkArea">
        <div className="mobileLink">About</div>
        <div className="mobileLink">Projects</div>
        <div className="mobileLink">Contact</div>
        <button className="resumeButtonMobile">Resume</button>
      </div>
    </nav>
  );
}

export default MobileNav;
