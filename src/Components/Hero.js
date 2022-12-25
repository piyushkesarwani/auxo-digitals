import React from "react";
import { Button } from "react-bootstrap";
import img1 from "../assets/img1.png";

export const Hero = () => {
  return (
    <section id="home" className="section d-flex flex-row justify-content-center align-items-center">

      <div className="heroText">
        <h1 className="primaryText fs-1">Grow Your Business with Auxo Digital Services.</h1>
        <h3 className=" mt-3 secondaryText fs-4 text-grey">
          We help brands and Businesses by unleashing the potential of Internet
          Marketing.
        </h3>
        <div className="mt-3">
          <Button className="me-3" href="#contact">Learn More</Button>
          <Button href="#contact">Free Consultancy Call</Button>
        </div>
      </div>

      <div className="heroImageDiv">
        <img className="heroImage" src={img1} alt="image" />
      </div>
      
    </section>
  );
};
