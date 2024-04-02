import React from "react";
import { Link, NavLink } from "react-router-dom";
// import cv from "./../../assets/Hadeel_Amish-1.pdf";
import ToggleTwo from "./ToggleTwo";
import useLocalStorage from "use-local-storage";
import "./Nav.css";

function Nav({ menu }) {
  const preference = window.matchMedia("(prefers-color-scheme:dark)").matches;
  const [isDark, setDark] = useLocalStorage("isDark", preference);
  const clickbutton = () => {
    document.getElementById("sidebar").style.display = "block";
    document.getElementById("bars").style.display = "none";
    document.getElementById("menu").style.display = "none";
    document.getElementById("logo").style.display = "none";
  };

  const clickexit = () => {
    document.getElementById("sidebar").style.display = "none";
    document.getElementById("bars").style.display = "block";
    document.getElementById("logo").style.display = "block";
    // document.getElementById("menu").style.display = "flex";
  };
  return (
    <>
      <nav>
        <div className="logo" id="logo">
          <h1>H A{/* <span>H</span>adeel <span>A</span>mish */}</h1>
          {/* <br /> */}
          <p style={{ fontSize: "10px", marginTop: "-17px" }}>
            web Development
          </p>
        </div>
        <div id="iconbar" onClick={clickbutton}>
          <i className="fa-solid fa-bars" id="bars"></i>
        </div>
        <ul className="menu" id="menu">
          {menu.map((e, i) => {
            return (
              <li className="li" key={i}>
                <NavLink
                  className="menu-link"
                  activeClassName="active"
                  key={i}
                  to={e.path}
                >
                  {e.title}
                </NavLink>
              </li>
            );
          })}
        </ul>
        <div
          className="sidebar"
          id="sidebar"
          data-themee={isDark ? "dark" : "light"}
        >
          <div id="exit" onClick={clickexit}>
            {/* <h3 className="exit">X</h3> */}
            <i className="exit fa-solid fa-xmark"></i>
          </div>
          <ul className="sidemenu" id="sidemenu">
            {menu.map((e, i) => {
              return (
                <li className="li" key={i}>
                  <Link key={i} to={e.path}>
                    {e.title}
                  </Link>
                </li>
              );
            })}
          </ul>
          <hr style={{ marginTop: "25px" }} />
          <div
            className="sidemode"
            style={{
              width: "200px",
              height: "200px",
              position: "absolute",
            }}
          >
            <ToggleTwo
              ischecked={isDark}
              handelchange={() => setDark(!isDark)}
              name={isDark ? "dark" : "light"}
            />
          </div>
        </div>
      </nav>
    </>
  );
}

export default Nav;
