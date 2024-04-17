import React from "react";

import "./Skill.scss";

import data from "../../../fakeapi.json";



const Homeskills = () => {
  // fetching all array from api / server
  const Expe = data.skills.Expertise;
  const Desi = data.skills.Design;
  const Webe = data.skills.Web;
  const Appy = data.skills.App;
  const Othe = data.skills.Other;

  const HandleE = (e) => {
    const skill = document.querySelector(".skill_name");
    const proj = document.querySelector(".projectview");

    const main_skils = document.querySelector(".render_skills");

    skill.style.display = "block";
    proj.style.display = "block";

    console.log(e);
    // rendering list here 

    if (e === 1) {
      
      const showHTML = Expe.map((project) => {
        return `<li> ${project} </li>`;
      }).join("");
      main_skils.innerHTML = showHTML;
    } 
    
    else if (e === 2) {  
      
      const showHTML = Desi.map((project) => {
        return `<li> ${project} </li>`;
      }).join("");
      main_skils.innerHTML = showHTML;
    } 
    
    else if (e === 3) {
      
      const showHTML = Webe.map((project) => {
        return `<li> ${project} </li>`;
      }).join("");
      main_skils.innerHTML = showHTML;
    } 
    
    else if (e === 4) {
      
      const showHTML = Appy.map((project) => {
        return `<li> ${project} </li>`;
      }).join("");
      main_skils.innerHTML = showHTML;
    } 
    
    else {
      
      const showHTML = Othe.map((project) => {
        return `<li> ${project} </li>`;
      }).join("");
      main_skils.innerHTML = showHTML;
    }
  };

  return (
    <>
      <div className="skill_container">
        <div className="skill_tech">
          <h1 className="skill_tech_h1">Tech stack i know</h1>

          <div className=" skill_name">
            <div className="skill_content_tech">
              <ul className="render_skills">
                <li>hello</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="skill_nav">
          <div
            className="nav_center_ty"
            id="first"
            onMouseEnter={() => HandleE(1)}
          >
            <div className="before">Experti</div>S{" "}
            <div className="after">e</div>
          </div>
          <div className="nav_center_ty" id="secound">
            K
          </div>
          <div
            className="nav_center_ty"
            id="third"
            onMouseEnter={() => HandleE(2)}
          >
            <div className="before">Des</div>I{" "}
            <div className="after">gning</div>
          </div>
          <div
            className="nav_center_ty"
            id="fourth"
            onMouseEnter={() => HandleE(3)}
          >
            <div className="before">Web&nbsp;Deve</div>L{" "}
            <div className="after">opment</div>{" "}
          </div>
          <div
            className="nav_center_ty"
            id="fivth"
            onMouseEnter={() => HandleE(4)}
          >
            <div className="before">App&nbsp;Deve</div>L{" "}
            <div className="after">opment</div>
          </div>
          <div
            className="nav_center_ty"
            id="sixth"
            onMouseEnter={() => HandleE(5)}
          >
            <div className="before">Other</div>S
          </div>
        </div>
        <div className="skill_proj">
          <h1 className="skill_proj_h1">Completed Projects</h1>

          

          <div className="projectview">
            <div className="skill_content">
              <div className="pro_show pro_one">Coffe Website</div>
              <div className="pro_show pro_two">Resturant Website</div>
              <div className="pro_show pro_three">Python automation</div>
              <div className="pro_show pro_four">ToGo</div>
            </div>
          </div>
        </div>
      </div>

      
    </>
  );
};

export default Homeskills;
