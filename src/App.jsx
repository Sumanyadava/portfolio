import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useLocation } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";


import Home from "./pages/home/Home";
import Header from "./components/Header/Header";
import Services from "./pages/Service/Services";
// import Admin from "./pages/Admin/Admin";
import Fotter from "./components/Footer/Footer";

import "./app.scss";




function App() {

  const [loading, setloading] = useState(false);

  useEffect(()=>{
    setloading(true)
    setTimeout(()=>{
      setloading(false)
    },1000)
  },[])

  const location = useLocation();

  useEffect(() => {

    // code for cursur 
    console.log("rendered");

    // declaration of variables
    let mousecursor = document.querySelector(".cursor");
    let nav = document.querySelectorAll("a");
    let hiddentypo = document.querySelectorAll(".hidden, .name");


    window.addEventListener("mousemove", cursor);
    window.addEventListener("wheel",cursor);

    
    
    function cursor(e) {
      mousecursor.style.top = e.pageY + "px";
      mousecursor.style.left = e.pageX + "px";


      mousecursor.animate({
        left: `${e.pageX}px`,
        top:`${e.pageY}px`
      },{duration:500,fill:"forwards"})
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

    hiddentypo.forEach((typo =>{
      if (typo != null) {
        typo.addEventListener("mouseover", () => {
          mousecursor.classList.add("large");
        });
        typo.addEventListener("mouseleave", () => {
          mousecursor.classList.remove("large");
        });
      }
    }))
     
    
  }, [location]);

  return (
    <>
    {/*
      loading ?
      <ClipLoader
        // color={}
        // cssOverride={override}
        loading={loading}
        size={350}
        aria-label="Loading Spinner"
        data-testid="loader"
      />

      :
  }

      // name = deamdra sing and hr manager itc itss employee id = 109306 reachable contact  987409110                           address =  itc data center 8th floor 3A ransal strret kolkata 71

      // part strret jevan dev 

      // but ofice 

      // google brush up osi models netwoking os 

      // data center installaltions 

      // appling tax 

      // layers 

      // basic 

      // differenct https vs https 
      */}

      <div className="bd">

        <div className="cursor"></div>

        <Header />

        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/services" element={<Services />} />

          {/* <Route path="/admin" element={<Admin />} /> */}

          <Route path="*" element={<div background-color="red"><h1>PAge not found</h1></div>} />
        </Routes>

        <Fotter />
      </div>
    
    </>
  );
}

export default App;
