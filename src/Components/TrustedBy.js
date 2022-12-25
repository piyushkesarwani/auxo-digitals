import React from "react";
import Carousel from "react-bootstrap/Carousel";
import cImg1 from "../assets/volkswagen.png";
import cImg2 from "../assets/valvoline.png";
import cImg3 from "../assets/valeo.png";
import cImg4 from "../assets/timberjack.png";
import cImg5 from "../assets/lufthansa.png";
import cImg6 from "../assets/linkedin.png";
import cImg7 from "../assets/jdm.png";
import cImg8 from "../assets/iveco.png";
import cImg9 from "../assets/ferrari.png";
import cImg10 from "../assets/detran.png";
import cImg11 from "../assets/codingninja.svg";
import cImg12 from "../assets/Crio.svg";

export const TrustedBy = () => {
  return (
    <section className="section">
      <div>
        <h2 className="mt-5 mb-5 fs-4 font-monospace text-primary text-center">We are Trusted By 100+ companies and Businesses</h2>
      </div>

      <div className="carouselMainContainer border text-primary mt-3 mb-5">
        <Carousel fade className="bg-info p-5 text-dark">

          <Carousel.Item className="w-100 d-flex flex-row justify-content-center align-items-center">
            <img className=" carouselImage d-block" src={cImg1} alt="First slide" />
            <img className=" carouselImage d-block" src={cImg2} alt="First slide" />
            <img className=" carouselImage d-block" src={cImg3} alt="First slide" />
          </Carousel.Item>

          <Carousel.Item className="w-100 d-flex flex-row justify-content-center align-items-center">
            <img className=" carouselImage d-block" src={cImg4} alt="First slide" />
            <img className=" carouselImage d-block" src={cImg5} alt="First slide" />
            <img className=" carouselImage d-block" src={cImg6} alt="First slide" />
          </Carousel.Item>

          <Carousel.Item className="w-100 d-flex flex-row justify-content-center align-items-center">
            <img className=" carouselImage d-block" src={cImg7} alt="First slide" />
            <img className=" carouselImage d-block" src={cImg8} alt="First slide" />
            <img className=" carouselImage d-block" src={cImg9} alt="First slide" />
          </Carousel.Item>

          <Carousel.Item className="w-100 d-flex flex-row justify-content-center align-items-center">
            <img className=" carouselImage d-block" src={cImg10} alt="First slide" />
            <img className=" carouselImage d-block" src={cImg11} alt="First slide" />
            <img className=" carouselImage d-block" src={cImg12} alt="First slide" />
          </Carousel.Item>

        </Carousel>
      </div>
    </section>
  );
};
