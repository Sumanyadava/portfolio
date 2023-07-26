import React from "react";
import { FaLinkedin, FaGithubSquare, FaInstagram } from "react-icons/fa";

import Resume from "./Buttons/Resume";
import Email from "./Buttons/Email";

import "../styles/Fotter.scss";

const Fotter = () => {
  return (
    <div className="foot">
      <div className="message">


        <div className="social">
          <a href="https://www.linkedin.com/feed/">
            <FaLinkedin className="icon linkedin" />
          </a>
          <a href="https://github.com/Sumanyadava">
            <FaGithubSquare className="icon github " />
          </a>
          <a href="https://www.instagram.com/sumanydv__/">
            <FaInstagram className="icon insta" />
          </a>
        </div>


        <div className="lspr">
          <h3 className="letsstart">Let's work on your ideas</h3>
          <div className="send">
            <textarea
              name="project"
              id="fotter_text"
              cols="70"
              rows="5"
              placeholder="write your ideas here..."
            >
      
            </textarea>

            <button className="ssend">Send</button>
          </div>

        </div>

        <div className="job">
          <div className="photo"></div>
          <h2>Want to HIRE me</h2>
          <div className="ctaction">
            <div className="de">
              <Resume />
            </div>
            <div className="em">
              <Email />
            </div>
          </div>
        </div>
      </div>

      <div className="copy">
        copyright© 2022-2023,Reflx.All rights reserved. Developed by{" "}
        <u>Suman Yadav</u>{" "}
      </div>
    </div>
  );
};

export default Fotter;
