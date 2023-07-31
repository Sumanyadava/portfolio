import React from "react";
import { useState } from "react";

import "./Clock.scss";
import Cv from "../Cv/Cv";
import data from "../../../fakeapi.json";

const HomeClock = () => {
  const [tarDays, settarDays] = useState();
  const [tarhours, settarhours] = useState();
  const [tarMin, settarMin] = useState();
  const [tarSec, settarSec] = useState();

  const UpdateTime = () => {
    const countDate = new Date(data.mission_time).getTime();
    const now = new Date().getTime();
    const gap = countDate - now;

    const secound = 1000;
    const Minute = secound * 60;
    const Hour = Minute * 60;
    const Day = Hour * 24;

    const targetDay = Math.floor(gap / Day);
    const targetHour = Math.floor((gap % Day) / Hour);
    const targetMinute = Math.floor((gap % Hour) / Minute);
    const targetSec = Math.floor((gap % Minute) / secound);

    
    //TO DO :changing time with adding zero in front

    var RoundHour = 0;
    var RoundMinute = 0;
    var RoundSec = 0;

    if (targetHour < 10) {
      RoundHour = "0" + targetHour;
    } else {
      RoundHour = targetHour;
    }
    if (targetMinute < 10) {
      RoundMinute = "0" + targetMinute;
    } else {
      RoundMinute = targetMinute;
    }
    if (targetSec < 10) {
      RoundSec = "0" + targetSec;
    } else {
      RoundSec = targetSec;
    }

    /*
    if (gap <= 0) {
      //stop working
      // targetHour = targetHour+1
      // console.log("stopped")
      // targetSec = 3
    } else {
      //update
      
    }*/

    settarDays(targetDay);
    settarhours(RoundHour);
    settarMin(RoundMinute);
    settarSec(RoundSec);
  };
  setInterval(UpdateTime, 1000);

  return (
    <>
    <div className="both">
    <div className="clock">
      
      <div className="time"></div>
      <div className="name">
        <h2 className="upp h2"> Next Deadline Ends</h2>
        <div className="tim">
          {tarDays}:{tarhours}:{tarMin}:{tarSec}
        </div>

        <h2 className="downn h2">Complete code dept</h2>
      </div>
      
    </div>
    <Cv />
    </div>
    </>
    
  );
};

export default HomeClock;
