import React from "react";
import { useState } from "react";
import Entertainment1 from "../Cropped screenshots for portfolio/entertainment-web-app-1.png";
import Entertainment2 from "../Cropped screenshots for portfolio/entertainment-web-app-2.png";
import Entertainment3 from "../Cropped screenshots for portfolio/entertainment-web-app-3.png";
import Space1 from "../Cropped screenshots for portfolio/space-tourism-website-1.png";
import Space2 from "../Cropped screenshots for portfolio/space-tourism-website-2.png";
import Space3 from "../Cropped screenshots for portfolio/space-tourism-website-3.png";
import Quiz1 from "../Cropped screenshots for portfolio/quiz-app-1.png";
import Quiz2 from "../Cropped screenshots for portfolio/quiz-app-2.png";
import Quiz3 from "../Cropped screenshots for portfolio/quiz-app-3.png";
import "../styles/projects.css";

function Projects() {
  const entertainmentScreenshots = [
    Entertainment1,
    Entertainment2,
    Entertainment3,
  ];
  const spaceScreenshots = [Space1, Space2, Space3];
  const quizScreenshots = [Quiz1, Quiz2, Quiz3];
  const [currentSlide, setCurrentSlide] = useState(0);
  const projects = [
    {
      name: "Entertainment Web App",
      description:
        "This is a Web App where users can view and look up their favorite movies and tv shows and see all kinds of info about them. Users can also make and account and log in on my web app. users with accounts will be able to review and rate movies and tv shows in the future. All info about the movies comes from the tmdb api. Learn more about tmdb here: https://www.themoviedb.org/",
      pictures: entertainmentScreenshots,
      siteLink: "https://entertainment-web-app-naser23.netlify.app/",
      Repo: "https://github.com/naser23/entertainment-web-app",
    },

    {
      name: "Space Tourism Site",
      description:
        "A static Site showing off info about a space program regarding planets, astronauts, and info about technology required to make this program possible.",
      pictures: spaceScreenshots,
      siteLink: "https://space-tourism-website-naser.netlify.app/",
      Repo: "https://github.com/naser23/Space-Tourism-Website",
    },

    {
      name: "Guess to Sucess",
      description:
        "An Application that will let you build your own quiz with questions from many different subjects. You can be as specific or as loose as you want with the parameters of the quiz. This is a Perfect App for game night or just to even learn some new things that you didnt know before.",
      pictures: quizScreenshots,
      siteLink: "https://naser23.github.io/Quiz-App/",
      Repo: "https://github.com/naser23/Quiz-App",
    },
  ];

  function updateCurrentImage() {
    if (currentSlide >= 0 || currentSlide <= 2) {
      setCurrentSlide(currentSlide + 1);

      console.log("within bounds");
    } else console.log("out of bounds");
  }

  // updateCurrentImage();
  // setInterval(updateCurrentImage, 1000);

  return (
    <main className="projectsPage">
      <section className="projectsPageContent">
        <h1 className="header">Projects</h1>
        <div className="projectsArea">
          {projects.map((project) => (
            <div className="project" key={projects.indexOf(project)}>
              <div className="slideshow">
                <img
                  className="projectImg"
                  src={project.pictures[1]}
                  alt={project.name}
                />
              </div>
              <p>{project.name}</p>
            </div>
          ))}
          {/* <div className="project">
            <img className="projectImg" src={Entertainment1} alt="muzet" />
            <p>Entertainment Web App</p>
          </div> */}
        </div>
      </section>
    </main>
  );
}

export default Projects;
