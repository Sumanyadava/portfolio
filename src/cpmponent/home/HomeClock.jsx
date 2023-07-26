import React from "react";
import { useState } from "react";

import "../../styles/homeStyle/homeclock.scss";

const HomeClock = () => {
  

  const [tarhours, settarhours] = useState();
  const [tarMin, settarMin] = useState();
  const [tarSec, setTarSec] = useState();

  const UpdateTime = () => {
    const countDate = new Date("July 24 , 2023 12:45:36").getTime();
    const now = new Date().getTime();
    const gap = countDate - now;

    const secound = 1000;
    const Minute = secound * 60;
    const Hour = Minute * 60;

    const targetHour = Math.floor(gap / Hour);
    const targetMinute = Math.floor((gap % Hour) / Minute);
    const targetSec = Math.floor((gap % Minute) / secound);

    
    if (gap <= 0) {
      //stop working
      // targetHour = targetHour+1
      // console.log("stopped")
      // targetSec = 3
    } else {
      //update
      
    }

    settarhours(targetHour)
    settarMin(targetMinute)
    setTarSec(targetSec)
    
  };
  setInterval(UpdateTime)

  return (
    <div className="clock">
      <div className="time"></div>
      <div className="name">
        <h2 className="upp h2">The Next Deadline Ends In</h2>
        <div className="tim">
          {tarhours}:{tarMin}:{tarSec}
        </div>
        
        <h2 className="downn h2">Complete code dept</h2>
      </div>
    </div>
  );
};

export default HomeClock;
