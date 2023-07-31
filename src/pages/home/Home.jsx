import React from "react";


import Clock from "./Clock/Clock";
import Typo from "./Typography/Typo";
import Skills from "./Skills/Skills";
import Cv from "./Cv/Cv";

// import data from "./cv/data.json"

const Home = () => {
  

  return (
    <div>
      <Clock />
      
      
      {/* <Cv /> */}
      <Typo />
      <Skills />
    </div>
  );
};

export default Home;
