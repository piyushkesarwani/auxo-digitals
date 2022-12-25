import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import img2 from "../assets/img2.svg";
import img3 from "../assets/img3.svg";
import img4 from "../assets/img4.svg";
import img5 from "../assets/img5.svg";
import img6 from "../assets/img6.svg";
import img7 from "../assets/img7.svg";

export const Services = () => {
  return (
    <section id="services" className="section">
      <h2 className="fs-3 fw-light font-monospace text-center text-primary">
        Our Expert Services
      </h2>
      <h4 className="fs-4 fw-light font-monospace text-center text-dark mt-3">
        Check out our expert led services we Offer to our clients.
      </h4>

      <div className="d-flex flex-row flex-wrap justify-content-center align-items-center">
        <Card
          style={{ width: "18rem"}}
          className="card rounded-3 bg-dark text-light ms-4 me-4 mt-4 mb-4"
        >
          <Card.Img
            className="border-0 p-2"
            variant="top"
            src={img2}
            alt="image2"
          />
          <Card.Body>
            <Card.Title className="font-monospace">
              Digital Marketing
            </Card.Title>
            <Card.Text className="pt-2 font-monospace">
              We strategize and execute conversion-optimized digital marketing
              strategies that deliver the highest business growth.
            </Card.Text>
            <Button className="mt-2" variant="primary">
              Know More
            </Button>
          </Card.Body>
        </Card>

        <Card
          style={{ width: "18rem" }}
          className="card rounded-3 bg-dark text-light ms-4 me-4 mt-4 mb-4"
        >
          <Card.Img
            className="border-0 p-2"
            variant="top"
            src={img6}
            alt="image2"
          />
          <Card.Body>
            <Card.Title className="font-monospace">
              Web/App Development
            </Card.Title>
            <Card.Text className="pt-2 font-monospace">
            We combine intelligent architecture and web-friendly practices to create interactive websites and apps for your business.
            </Card.Text>
            <Button className="mt-2" variant="primary">
              Know More
            </Button>
          </Card.Body>
        </Card>

        <Card
          style={{ width: "18rem" }}
          className="card rounded-3 bg-dark text-light ms-4 me-4 mt-4 mb-4"
        >
          <Card.Img
            className="border-0 p-2"
            variant="top"
            src={img4}
            alt="image2"
          />
          <Card.Body>
            <Card.Title className="font-monospace">
              Brand Promotions
            </Card.Title>
            <Card.Text className="pt-2 font-monospace">
            From Brand strategy to logo design we help you transform into a memorable brand.
            </Card.Text>
            <Button className="mt-2" variant="primary">
              Know More
            </Button>
          </Card.Body>
        </Card>

        <Card
          style={{ width: "18rem" }}
          className="card rounded-3 bg-dark text-light ms-4 me-4 mt-4 mb-4"
        >
          <Card.Img
            className="border-0 p-2"
            variant="top"
            src={img5}
            alt="image2"
          />
          <Card.Body>
            <Card.Title className="font-monospace">
              Video Production & Management
            </Card.Title>
            <Card.Text className="pt-2 font-monospace">
            Our Video Production team will make your branding to the next level and will enhance your digital marketing experience.
            </Card.Text>
            <Button className="mt-2" variant="primary">
              Know More
            </Button>
          </Card.Body>
        </Card>

        <Card
          style={{ width: "18rem" }}
          className="card rounded-3 bg-dark text-light ms-4 me-4 mt-4 mb-4"
        >
          <Card.Img
            className="border-0 p-2"
            variant="top"
            src={img3}
            alt="image2"
          />
          <Card.Body>
            <Card.Title className="font-monospace">
              Graphic Designing
            </Card.Title>
            <Card.Text className="pt-2 font-monospace">
            We craft beautiful and engaging user interactions that lead to higher engagement.
            </Card.Text>
            <Button className="mt-2" variant="primary">
              Know More
            </Button>
          </Card.Body>
        </Card>

        <Card
          style={{ width: "18rem" }}
          className="card rounded-3 bg-dark text-light ms-4 me-4 mt-4 mb-4"
        >
          <Card.Img
            className="border-0 p-2"
            variant="top"
            src={img7}
            alt="image2"
          />
          <Card.Body>
            <Card.Title className="font-monospace">
              Influencer Marketing
            </Card.Title>
            <Card.Text className="pt-2 font-monospace">
            We will help your products to promote with the best Influencers in India that will reach to highest customers
            </Card.Text>
            <Button className="mt-2" variant="primary">
              Know More
            </Button>
          </Card.Body>
        </Card>
      </div>
    </section>
  );
};
