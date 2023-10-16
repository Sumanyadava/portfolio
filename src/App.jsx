import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useLocation } from "react-router-dom";
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";


import Home from "./pages/home/Home";
import Header from "./components/Header/Header";
import Services from "./pages/Service/Services";
import Admin from "./pages/Admin/Admin";
import Fotter from "./components/Footer/Footer";

import "./app.scss";




function App() {

  // preloader code 
  const [loading, setloading] = useState(false);

  useEffect(()=>{
    setloading(true)
    setTimeout(()=>{
      setloading(false)
    },3000)
  },[])
  
  
  const location = useLocation();

  useEffect(() => {

    window.onload = ()=>{
    // console.log(pre)

    // code for cursur 
    // let onloadlink = document.querySelector(".active")
        //  console.log(onloadlink)
    
    
    

    // declaration of variables
    
    
    let mousecursor = document.querySelector(".cursor");
    let nav = document.querySelectorAll("a");
    let hiddentypo = document.querySelectorAll(".hidden, .name");
    let pre = document.querySelector("#root > div.preloader")
    console.log(pre)

    // pre.style.backgroundColor = "red"
    
      window.addEventListener("wheel",cursor);
      window.addEventListener("mousemove", cursor);
  
      
      
    
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

  }
     
    
  }, []);

  
  useEffect(() => {

    // console.log(pre)
    // code for cursur 
    // let onloadlink = document.querySelector(".active")
        //  console.log(onloadlink)
    
    
    

    // declaration of variables
    
    
    let mousecursor = document.querySelector(".cursor");
    let nav = document.querySelectorAll("a");
    let hiddentypo = document.querySelectorAll(".hidden, .name");
    let pre = document.querySelector("#root > div.preloader")
    console.log(pre)

    // pre.style.backgroundColor = "red"
    
      window.addEventListener("wheel",cursor);
      window.addEventListener("mousemove", cursor);
  
      
      
    
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

  
  
    
  }, [location.pathname,loading]);

  

  return (
    <>
      <div className="cursor"></div>
      {
      loading ?
      <div className="preloader">
      <ClimbingBoxLoader
        // color={}
        // cssOverride={override}
        loading={loading}
        size={50}
        aria-label="Loading Spinner"
        data-testid="loader"
      /> 
      </div>
      
      :
  
      
      
      <div className="bd">
        { 
         
        }
          
        

        <Header />

        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/services" element={<Services />} />

          <Route path="/admin" element={<Admin />} />

          <Route path="*" element={<div background-color="red"><h1>PAge not found</h1></div>} />
        </Routes>

        <Fotter />
      </div>
      
    }
    </>
  );
}

export default App;
