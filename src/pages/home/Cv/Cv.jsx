import React from "react";
import data from "../../../fakeapi.json";
import Resume from "../../../components/Buttons/Resume";

import "./Cv.scss";

const Homecv = () => {
  // done for taking skills array here to display as list
  const Sktill = data.cv.tag[2];

  const HandleCV = (e) => {
    const heading = document.querySelector(".headingofcv");
    const para = document.querySelector(".para");

    if (e === 1) {
      heading.textContent = data.cv.Heading[0];
      para.textContent = data.cv.tag[0];
    }
    if (e === 2) {
      heading.textContent = data.cv.Heading[1];

      const showcv = Sktill.map((item) => {
        return `<li> ${item} </li>`;
      }).join("");
      let skillcontains = data.cv.tag[1];

      para.innerHTML = skillcontains + showcv;
    }
    if (e === 3) {
      heading.textContent = data.cv.Heading[2];
      para.textContent = data.cv.tag[3];
    }
    if (e === 4) {
      heading.textContent = data.cv.Heading[3];
      para.textContent = data.cv.tag[4];
    }
  };

  return (
    <div className="cv">
      <div className="cv_container">
        <div className="points">
          <h1 className="headcv" onClick={() => HandleCV(1)}>
            About Me
          </h1>
          <h1 className="headcv" onClick={() => HandleCV(2)}>
            Skills
          </h1>
          <h1 className="headcv" onClick={() => HandleCV(3)}>
            Projects
          </h1>
          <h1 className="headcv" onClick={() => HandleCV(4)}>
            Education
          </h1>
        </div>
        <div className="write">
          <div className="headingofcv"></div>
          <div className="para"></div>
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
