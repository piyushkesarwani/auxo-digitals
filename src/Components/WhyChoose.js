import React from "react";
import img8 from "../assets/img8.avif";
import { Button } from "react-bootstrap";
import './WhyChoose.css'

export const WhyChoose = () => {
  return (
    <section className="section">
      <div className="parentDiv">
        <div className="imageDiv">
          <img src={img8} alt="image" />
        </div>
        <div className="textDiv">
          <h2 className="fs-3 fw-bold font-monospace text-dark">
            Why Choose us?
          </h2>
          <p className="w-75 mt-2 font-monospace">
            Auxo is a leading digital marketing and website development company.
            We are a creative team of website developers, UI/UX designers, and
            digital marketers who push our boundaries with smart solutions. We
            have a proven track record of providing excellent digital marketing
            services for over 200 happy customers and brands like yours. We
            never stop until we give you what you truly desire!
          </p>
          <Button href="#contact">Contact Us</Button>
        </div>
      </div>
    </section>
  );
};
