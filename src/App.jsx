import { useState } from "react";

import "./App.css";
import Home from "./pages/Home/Home";
import { Route, Routes } from "react-router";

import Contact from "./pages/contact/Contact";
import Portfolio from "./pages/portfolio/Portfolio";

import Toggle from "./components/nav/Toggle";
import useLocalStorage from "use-local-storage";
import sun from "./assets/sun.png";
import moon from "./assets/moon-01.png";

function App() {
  const preference = window.matchMedia("(prefers-color-scheme:dark)").matches;
  const [isDark, setDark] = useLocalStorage("isDark", preference);
  return (
    <>
      <div className="App" data-theme={isDark ? "dark" : "light"}>
        <Toggle
          ischecked={isDark}
          handelchange={() => setDark(!isDark)}
          name={isDark ? "dark" : "light"}
          mode={
            <img
              style={{ marginRight: "10px" }}
              src={isDark ? sun : moon}
              alt="Logo"
            />
          }
        />

        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
