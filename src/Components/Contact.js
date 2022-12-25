import React from "react";
import linkedin from '../assets/linkedin.png'
import instagram from '../assets/instagram.png'
import twitter from '../assets/twitter.png'
import { Link } from "react-router-dom";

export const Contact = () => {
  return (
    <section id="contact" className="section">
      <h1 className="contactTitle text-primary text-center fs-1 fw-bold font-monospace">
        Contact Us
      </h1>

      <div className="d-flex flex-row justify-content-around align-item-center mt-5">
        <div>
          <h2 className="fs-4 fw-bold font-monospace">Auxo Digitals</h2>
          <div className="socialIcons">
            <a href="https://twitter.com/AuxoDigitals" target="_blank"><img src={twitter} alt="image" /></a>
            <a href="https://www.linkedin.com/in/piyush-kesarwani-809a30219/" target="_blank"><img src={linkedin} alt="image" /></a>
            <a href="https://www.instagram.com/piyush_kesarwani22/" target="_blank"><img src={instagram} alt="image" /></a>
          </div>
        </div>

        <div>
          <h2 className="fs-4 font-monospace fw-bold">Call us at: <span className="fw-bold text-info">+91 (9369432162)</span></h2>
        </div>

        <div>
            <h2 className="fs-4 fw-bold font-monospace">Email Us</h2>
            <a href="mailto:piyush.auxo@gmail.com"><p>piyush.auxo@gmail.com</p></a>
            <a href="mailto:piyushkesarwan@gmail.com"><p>piyushkesarwan2207@gmail.com</p></a>
            <a href="mailto:joinwithpiyush@gmail.com"><p>joinwithpiyush@gmail.com</p></a>
        </div>

      </div>
    </section>
  );
};
