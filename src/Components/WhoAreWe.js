import React from "react";
import { Button } from "react-bootstrap";
import Card from 'react-bootstrap/Card';
import piyush from '../assets/piyush.png'
import './WhoAreWe.css'

export const WhoAreWe = () => {
  return (
    <section id="about" className="section">
      <div className="whoareweBackground">
        <div>
          <h2 className="fs-2 fw-bold font-monospace text-primary">
            Who are we
          </h2>
          <h4 className="fs-4 mt-3 fw-light font-monospace">
            We are a team of expert Solopreneurs.
          </h4>
          <p className="font-monospace mt-3 w-50">
            We specialize in various forms of content creation, marketing, web
            development, anything from video production to graphic design to
            creating creative memes that engage with the right audience and will
            take your business to next level.
          </p>
          <Button href="#contact">Learn More</Button>
        </div>
        <div>
          <Card className="card card1" style={{ width: "18rem" }}>
            <Card.Img variant="top" src={piyush} alt="imahe" />
            <Card.Body>
              <Card.Title>Piyush Kesarwani</Card.Title>
              <Card.Text>
                Youtuber and Software developer with experience in content creation, web development, app development, designing, marketing, and Teaching.
              </Card.Text>
              {/* <Button variant="primary">Go somewhere</Button> */}
            </Card.Body>
          </Card>
        </div>
      </div>
    </section>
  );
};
