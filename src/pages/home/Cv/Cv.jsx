import React from "react";
import data from "../../../fakeapi.json";
import Resume from "../../../components/Buttons/Resume";

import "./Cv.scss";

// code dept = make all this using react use state

const Homecv = () => {
  // done for taking skills array here to display as list
  const Sktill = data.cv.tag[2];

  const HandleCV = (e) => {
    const heading = document.querySelector(".headingofcv");
    const para = document.querySelector(".para");
    const options = document.querySelectorAll(".headcv")


    if (e === 1) {
      heading.textContent = data.cv.Heading[0];
      para.textContent = data.cv.tag[0];
  
      
      options[0].style.listStyle = "disc";
      options[1].style.listStyle = "circle";
      options[2].style.listStyle = "circle";
      options[3].style.listStyle = "circle";
      
      

    }
    else if (e === 2) {
      heading.textContent = data.cv.Heading[1];
      
      options[0].style.listStyle = "circle";
      options[1].style.listStyle = "disc";
      options[2].style.listStyle = "circle";
      options[3].style.listStyle = "circle";
      

      const showcv = Sktill.map((item) => {
        return `<li> ${item} </li>`;
      }).join("");
      

      para.innerHTML = showcv;
    }
    else if (e === 3) {
      
      options[0].style.listStyle = "circle";
      options[1].style.listStyle = "circle";
      options[2].style.listStyle = "disc";
      options[3].style.listStyle = "circle";

      heading.textContent = data.cv.Heading[2];
      para.innerHTML = data.cv.tag[3];
    }
    else if (e === 4) {
      
      options[0].style.listStyle = "circle";
      options[1].style.listStyle = "circle";
      options[2].style.listStyle = "circle";
      options[3].style.listStyle = "disc";
      heading.textContent = data.cv.Heading[3];
      para.innerHTML = data.cv.tag[4];
    }
    else {
      heading.textContent = "hover "
      para.textContent = " over the options"
    }
  };

  return (
    <div className="cv">
      <div className="cv_container">
        <div className="points">
          <div className="HeadList">
            <li className="headcv" onClick={() => HandleCV(1)}>
              Me
            </li>
            <li className="headcv" onClick={() => HandleCV(2)}>
              Skills
            </li>
            <li className="headcv" onClick={() => HandleCV(3)}>
              Projects
            </li>
            <li className="headcv" onClick={() => HandleCV(4)}>
              Education
            </li>
          </div>
        </div>
        <div className="write">
          <div className="headingofcv">Hover Over</div>
          <div className="para"> the options </div>
          <div className="table">
            <ul className="sktills"></ul>
          </div>
          <div className="PDF">
            <Resume />
          </div>
          <div className="profile"></div>
        </div>
      </div>
    </div>
  );
};

export default Homecv;
