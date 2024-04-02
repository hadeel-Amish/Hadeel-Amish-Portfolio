import React, { useEffect } from "react";
import Nav from "../../components/nav/Nav";
import imageHome from "./../../assets/Home_art 1.png";
import cv from "./../../assets/Hadeel_Amish-1.pdf";
import "./Home.css";
import Typed from "typed.js";
import Footer from "../../components/footer/Footer";

function Home() {
  useEffect(() => {
    let typed = new Typed(".auto-input", {
      strings: ["Web Development!", "Front-End Developer!", " Designer!"],
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 2000,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div>
      <Nav
        menu={[
          { title: "Home", path: "/" },
          { title: "Porjects", path: "/portfolio" },
          { title: "Contact", path: "/contact" },
        ]}
      />
      <div className="container-home">
        <div className="sectionOne">
          <div className="text">
            <div className="home-row">
              <h1>
                Hi, I am
                <br />
                Hadeel Amish.
              </h1>
              <p style={{ color: "#d66b22", fontWeight: "bold" }}>
                I am a {""}
                <span className="auto-input">Junior Front-End Developer</span>
              </p>
              <a href={cv} className="btn btn-secondary" download="">
                Download cv <i className="fas fa-download"></i>
              </a>
            </div>
          </div>
          <div className="image-home">
            <img
              src={imageHome}
              alt=""
              style={{ width: "100%", height: "373px" }}
            />
          </div>
        </div>
        <div className="scetionTwo">
          <section id="resume">
            <h1 className="about-me maintitle">About Me</h1>
            <div className="divider"></div>
            {/* <p className="sub-para">Here is some information about me</p> */}
            <div className="resume-row">
              <div className="resume-cols">
                <h2>Summary</h2>
                <div className="my-info">
                  <h3>Hadeel Amish</h3>
                  <p className="sub-para" style={{ lineHeight: "35px" }}>
                    I am an Engineer and a Front End Developer with a strong
                    Proficient in programming languages such as HTML, CSS, and
                    JavaScript; plus modern libraries and frameworks like React
                    and Vue. <br />I have a passion for the field and look
                    forward to opportuni. <br /> I trained in a course at the
                    Institute of Civilization trained on online projects, and
                    this is my gallery of work:{" "}
                  </p>
                  <a
                    href="https://github.com/hadeel-Amish"
                    className="btn btn-secondary"
                  >
                    My Github <i className="fab fa-github"></i>
                  </a>
                </div>
                <h2>Eduaction</h2>
                <div className="my-edu">
                  <h3>Graduate from the College of Engineering</h3>
                  <span className="sp-box">2017-2023</span>
                  <p className="sub-para" style={{ lineHeight: "35px" }}>
                    Bachelor of Electronic and communica􀆟on engineering, Grade:
                    Good. <br />
                    Damascus University. <br />
                    Gradua􀆟on project: Control PC using eyes by raspberry pi,
                    Grade: 79%.
                  </p>
                </div>
              </div>
              <div className="resume-cols">
                <h2>Professinal Experience</h2>
                <div className="pro-exp">
                  <h3>Junior web Design</h3>
                  <span className="sp-box">2023-now</span>
                  <p>Vica Web Solutions</p>
                  <p className="sub-para" style={{ lineHeight: "35px" }}>
                    Freelance for a startup company to design and implement
                    training programs in the field of web development. <br />I
                    have one year of experience supervising beginner students,
                    providing guidance, and correc􀆟ng their training
                    assignments.
                  </p>
                </div>
                <h2>My Skills</h2>
                <div className="skills">
                  <ul>
                    <li>Html</li>
                    <li>Css</li>
                    <li>Java Script</li>
                    <li>React Js</li>
                    <li>Vue Js</li>
                    <li>Figma</li>
                    <li>Microsoft Office</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
