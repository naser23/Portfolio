import React from "react";
import "../styles/landing.css";

function Landing() {
  return (
    <section className="landingPage">
      <div className="landingPageContent">
        <h1 className="nameHeader">
          Naser <br /> Abdulkadir
        </h1>
        <h3 className="landingSubHeader">Software Developer</h3>
        <p className="landingParagraph">
          Hello! Im an aspiring Web Developer based out of Alexandria, VA. I
          have a passion for web development and I'm looking to show my skills
          and learn as much as I can. Click below to learn more about me!
        </p>
        <button className="aboutButton">About</button>
      </div>
    </section>
  );
}

export default Landing;
