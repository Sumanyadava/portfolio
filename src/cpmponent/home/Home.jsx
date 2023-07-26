import React from "react";

import { useEffect } from "react";
import HomeClock from "./HomeClock";
import Homety from "./Hometypo";
import Homeskills from "./Homeskills";
import Homecv from "./Homecv";

// import data from "./cv/data.json"

const Home = () => {
  

  return (
    <div>
      <HomeClock />
      <Homety />

      <Homecv />
      <Homeskills />
    </div>
  );
};

export default Home;
