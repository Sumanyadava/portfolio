import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useLocation } from "react-router-dom";

import Home from "./cpmponent/home/Home";
import Header from "./cpmponent/Header";
import Services from "./cpmponent/Service/Services";
import Admin from "./cpmponent/Admin/Admin";
import Fotter from "./cpmponent/Fotter";

import "./app.scss";

function App() {
  const location = useLocation();

  useEffect(() => {
    // code for cursur 
    console.log("rendered");

    // declaration of variables
    let mousecursor = document.querySelector(".cursor");
    let nav = document.querySelectorAll("a");
    let hiddentypo = document.querySelector(".hidden");


    window.addEventListener("mousemove", cursor);

    function cursor(e) {
      mousecursor.style.top = e.pageY + "px";
      mousecursor.style.left = e.pageX + "px";
    }

    // code for all the links to grow up 
    nav.forEach((link) => {
      link.addEventListener("mouseleave", () => {
        mousecursor.classList.remove("grow");
      });

      link.addEventListener("mouseover", () => {
        mousecursor.classList.add("grow");
      });
    });

    if (hiddentypo != null) {
      hiddentypo.addEventListener("mouseover", () => {
        mousecursor.classList.add("large");
      });
      hiddentypo.addEventListener("mouseleave", () => {
        mousecursor.classList.remove("large");
      });
    }
  }, [location]);

  return (
    <>
      <div className="bd">

        <div className="cursor"></div>

        <Header />

        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/services" element={<Services />} />

          <Route path="/admin" element={<Admin />} />

          <Route path="*" element={<div background-color="red"><h1>PAge not found</h1></div>} />
        </Routes>

        <Fotter />
      </div>
    </>
  );
}

export default App;
