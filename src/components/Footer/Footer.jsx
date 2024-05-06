import React, { useState } from "react";
import { FaLinkedin, FaGithubSquare, FaInstagram } from "react-icons/fa";

import Resume from "../Buttons/Resume";
import Email from "../Buttons/Email";
import emailjs from '@emailjs/browser';


import "./Fotter.scss";

const Fotter = () => {

  
const [name , setName] = useState('')
const [email, setEmail] = useState('')
const [message, setMessage] = useState('')


const handleSubmit =(e) => {
  e.preventDefault();
  
  const serviceid = 'service_k1y84in'
  const templateid = 'template_iprguiz'
  const publickey = 'HXUg0rIsLA7hihWRw'
  
  //create a new obj
  const templateParams = {
    form_name: name,
    form_email: email,
    to_name: 'Web Wiz',
    message: message
  }
  
  emailjs.send(serviceid , templateid , templateParams ,publickey).then((res) => {
    console.log('email sent succesfull', res)
    setName('')
    setEmail('')
    setMessage('')
  }).catch((err) => {
    console.log('email not sent', err)
  })
  }


  return (
    <div className="foot">

      <div className="message">
        <div className="lspr">
          <h3 className="letsstart">Contact me
          </h3>
          <div className="send">
            
            <form action="" onSubmit={handleSubmit} className="contact">
            <input className="nameinp" type="text" name="" id="" placeholder="Name"  value={name} onChange={(e) => setName(e.target.value)}  />
            <input className="emailinp" type="email" name="" id="" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />


            <textarea
              name="project"
              id="fotter_text"
              cols="70"
              rows="5"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="write your ideas here..."
            >
              
            </textarea>

            

            <button className="ssend" id ="send_button" type="submit">Send</button>

</form>
          </div>
        </div>


        <div className="part2">
        <div className="job">
          <div className="photo"></div>
          <h2>Want to hire me</h2>
          <div className="ctaction">
            <div className="de">
              <Resume />
            </div>
            <div className="em">
              <Email />
            </div>
          </div>


        </div>
        
        <div className="social">
          <a href="https://www.linkedin.com/in/sum-an-2b7604286/">
            <FaLinkedin className="icon linkedin" />
          </a>
          <a href="https://github.com/Sumanyadava">
            <FaGithubSquare className="icon github " />
          </a>
          <a href="https://www.instagram.com/sumanydv__/">
            <FaInstagram className="icon insta" />
          </a>
        </div>

        
        </div>






        {/* <div className="social">
          <a href="https://www.linkedin.com/feed/">
            <FaLinkedin className="icon linkedin" />
          </a>
          <a href="https://github.com/Sumanyadava">
            <FaGithubSquare className="icon github " />
          </a>
          <a href="https://www.instagram.com/sumanydv__/">
            <FaInstagram className="icon insta" />
          </a>
        </div> */}



      </div>





      <div className="copy">
        copyright© 2022-2023,Reflx.All rights reserved. Developed by{" "}
        <u>Suman Yadav</u>{" "}
      </div>
    </div>
  );
};

export default Fotter;
