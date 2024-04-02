import React, { useState } from "react";
// import projectsData from "./projects.json";
import "./Portfolio.css";
import bootstrap from "./../../assets/project/bootstrap.png";
import fetch from "./../../assets/project/fetch github.png";
import fresh from "./../../assets/project/fresh.png";
import hangman from "./../../assets/project/hangman game.png";
import localstorage from "./../../assets/project/local storage.png";
import template1 from "./../../assets/project/template1.jpg";
import template2 from "./../../assets/project/template2.jpg";
import template3 from "./../../assets/project/template3.jpg";
import culcuter from "./../../assets/project/culcuter.jpg";
import memory from "./../../assets/project/memory game.png";
import quiz from "./../../assets/project/quiz app.png";
import seo from "./../../assets/project/seo.png";
import slider from "./../../assets/project/slider.png";
import theme from "./../../assets/project/theme-clock.png";
import todolist from "./../../assets/project/to do list.png";
import travel from "./../../assets/project/travel.png";
import films from "./../../assets/project/films.png";
import fruit from "./../../assets/project/fruit.png";
import github from "./../../assets/project/github.png";
import Nav from "./../../components/nav/Nav";
import Footer from "../../components/footer/Footer";

const Portfolio = () => {
  const projects = [
    {
      name: "bootstrap",
      category: "bootstrap",
      image: bootstrap,
      link: "https://hadeel-amish.github.io/project-using-bootstrap/",
    },
    {
      name: " fetch",
      category: "java script",
      image: fetch,
      link: "https://hadeel-amish.github.io/fetch-information-github/",
    },
    {
      name: "fresh",
      category: "bulma",
      image: fresh,
      link: "https://hadeel-amish.github.io/Fresh-Bulma/",
    },
    {
      name: "hangman",
      category: "java script",
      image: hangman,
      link: "https://hadeel-amish.github.io/Hangman-Game/",
    },
    {
      name: "template1",
      category: "Html +Css",
      image: template1,
      link: "https://hadeelamish88.github.io/template1-design/",
    },
    {
      name: "template2",
      category: "Html +Css",
      image: template2,
      link: "https://hadeel-amish.github.io/Project-two/",
    },
    {
      name: "template3",
      category: "Html +Css",
      image: template3,
      link: "https://hadeelamish88.github.io/template3-design/",
    },
    {
      name: "culcuter",
      category: "vue",
      image: culcuter,
      link: "https://hadeel-amish.github.io/calculator-vue-js/",
    },
    {
      name: "memory",
      category: "java script",
      image: memory,
      link: "https://hadeel-amish.github.io/memory-game/",
    },
    {
      name: "quiz",
      category: "java script",
      image: quiz,
      link: "https://hadeel-amish.github.io/quiz-app/",
    },
    {
      name: "seo",
      category: "Html +Css",
      image: seo,
      link: "https://hadeel-amish.github.io/Seo-Bulma/",
    },
    {
      name: "slider",
      category: "java script",
      image: slider,
      link: "https://hadeel-amish.github.io/project--slider/",
    },
    {
      name: "theme",
      category: "java script",
      image: theme,
      link: "https://hadeel-amish.github.io/theme-oclock/",
    },
    {
      name: "localstorage",
      category: "java script",
      image: localstorage,
      link: "https://hadeel-amish.github.io/local-storage/",
    },
    {
      name: "todolist",
      category: "java script",
      image: todolist,
      link: "https://hadeel-amish.github.io/To-do-list/",
    },
    {
      name: "travel",
      category: "react",
      image: travel,
      link: "https://hadeel-amish.github.io/react-1/",
    },
    {
      name: "films",
      category: "react",
      image: films,
      link: "https://hadeel-amish.github.io/films-vite/",
    },
    {
      name: "fruit",
      category: "react",
      image: fruit,
      link: "https://hadeel-amish.github.io/fruits-vite-/",
    },
    {
      name: "github",
      category: "Html +Css",
      image: github,
      link: "https://hadeel-amish.github.io/Github-Design/",
    },
  ];
  const [items, setItem] = useState(projects);
  const filterItem = (catitem) => {
    const updatedItems = projects.filter((curelem) => {
      return curelem.category === catitem;
    });
    setItem(updatedItems);
  };

  return (
    <>
      <Nav
        menu={[
          { title: "Home", path: "/" },
          { title: "Porjects", path: "/portfolio" },
          { title: "Contact", path: "/contact" },
        ]}
      />
      <div className="container-portfolio" style={{ paddingTop: "100px" }}>
        <h1
          className="pt-5 pb-4 text-center main-heading maintitle"
          style={{
            fontWeight: "bold",
          }}
        >
          My Porjects
        </h1>
        <div className="menu-tabs container">
          <div className=" menu-tab d-flex justify-content-around flex-wrap ">
            <button
              className="btn btn-secondary"
              onClick={() => filterItem("react")}
            >
              React
            </button>
            <button
              className="btn btn-secondary"
              onClick={() => filterItem("vue")}
            >
              Vue
            </button>
            <button
              className="btn btn-secondary"
              onClick={() => filterItem("Html +Css")}
            >
              Html +Css
            </button>
            <button
              className="btn btn-secondary"
              onClick={() => filterItem("java script")}
            >
              Java Script
            </button>
            <button
              className="btn btn-secondary"
              onClick={() => filterItem("bulma")}
            >
              Bulma
            </button>
            <button
              className="btn btn-secondary"
              onClick={() => filterItem("bootstrap")}
            >
              Bootstrap
            </button>
            <button
              className="btn btn-secondary"
              onClick={() => setItem(projects)}
            >
              All
            </button>
            {/* <button className="btn btn-warning" onClick={() => filterItem("all")}>
            All
          </button> */}
          </div>
        </div>
        <div
          className="menu-items container-fluid mt-1"
          style={{ background: "var(--background-color)" }}
        >
          <div className="row">
            <div className="col-11  mx-auto">
              <div className="row my-5">
                {Array.isArray(items) &&
                  items.map((e) => {
                    const { image, link, name } = e;
                    return (
                      <div
                        className="item1 col-12 col-md-6 col-lg-6 col-xl-4 my-5"
                        key={e.id}
                      >
                        <div
                          className="row "
                          style={{
                            boxShadow: "0px 4px 5px 0px rgba(0, 0, 0, 0.25)",
                            width: "100%",
                            height: "100%",
                          }}
                        >
                          <div className=" col-12 col-md-12 img-div">
                            <img
                              src={image}
                              alt=""
                              className="img-fluid"
                              style={{ width: "100%", height: "100%" }}
                            />
                          </div>
                          <div className=" col-12 col-md-12 img-div text-center">
                            <h3
                              className="h3portfolio"
                              style={{ fontSize: "24px" }}
                            >
                              {name}
                            </h3>
                          </div>
                          <div className="col-12 col-md-12  text-center">
                            <div className="pt-4 pb-3">
                              <button className="btn btn-outline-secondary">
                                <a
                                  href={link}
                                  style={{ color: "var(--primary-text-color)" }}
                                >
                                  Project Link
                                </a>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Portfolio;
