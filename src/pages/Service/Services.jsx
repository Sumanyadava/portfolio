import React from "react";

import "./service.scss";
const Services = () => {
  return (
    <div className="main">
      <div className="ser_heading">
        <h1>Website Making Prices</h1>
      </div>
      <div className="content">
        <div className="ser_card">
        <div className="front">Basic Plan</div>
          <div className="back">
          <h1 className="ser_card_head">Basic Plan</h1>
          <p className="ser_content">
            it a basic plan this include single page/landing page website.
            usualy tecnology used are html css and wordpress websites
          </p>
          <ul className="ser_list">
            <li>Range between $20 - $50</li>
            <li>One Revision</li>
            <li>No Backend</li>
            <li>Static website</li>
            <li>No animation</li>
          </ul>
          <button className="purchase">purchase</button>
          <p className="demo">
            {" "}
            *prices may varies best contact us before your decision
          </p>
          </div>
        </div>

        <div className="ser_card">
        <div className="front">Intermediate Plan</div>
          <div className="back">
          <h1 className="ser_card_head">Intermediate Plan</h1>
          <p className="ser_content">
            Multiple webpages includes dynamic animation.Technologies used as
            per requirement
          </p>
          <ul className="ser_list">
            <li>Range between $50 - $80</li>
            <li>5 revisions</li>
            <li>Small backend</li>
            <li>Dynamic</li>
            <li>Animation</li>
          </ul>
          <button className="purchase">purchase</button>
          <p className="demo">
            {" "}
            *prices may varies best contact us before your decision
          </p>
          </div>
        </div>

        <div className="ser_card">
          <div className="front">Advance Plan</div>
          <div className="back">
            <h1 className="ser_card_head">Advance Plan</h1>
            <p className="ser_content">
              Full website with both frontend and backend with animation and
              ui/ux
            </p>
            <ul className="ser_list">
              <li>Varies</li>
              <li>unlimed Revision</li>
              <li>Full Backend</li>
              <li>include hosting and Domain</li>
              <li>Animation with ui/ux</li>
            </ul>
            <button className="purchase">purchase</button>
            <p className="demo">
              {" "}
              *prices may varies best contact us before your decision
            </p>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
