import React from "react";
import Toast from "react-bootstrap/Toast";
import heart from "../assets/heart.png";
import thumbs from "../assets/thumbs-up.png";
import thunderbolt from "../assets/thunderbolt.png";

export const Testimonial = () => {
  return (
    <section className="section">
      <h2 className="text-dark fs-2 fw-bold font-monopsace text-center">
        Testimonials
      </h2>
      <div className="d-flex flex-row justify-content-center align-items-center flex-wrap mt-5">
        <Toast className="bg-dark m-3 text-light font-monospace fs-4 rounded-4">
          <img
            src={heart}
            className="p-1 testimonialImage m-3 bg-primary rounded-10 rounded me-2"
            alt=""
          />
          <Toast.Body>
            "Managing our company's business has never been easier. Their
            services were next level."{" "}
            <span className="fs-5 fw-bold text-warning">
              – James Godfrey, CFO, Cardamom
            </span>
          </Toast.Body>
        </Toast>

        <Toast className="bg-dark m-3 text-light font-monospace fs-4 rounded-4">
          <img
            src={thumbs}
            className="p-1 testimonialImage m-3 bg-primary rounded-10 rounded me-2"
            alt=""
          />
          <Toast.Body>
            "Their Services were very good. They are available, responsive, and
            quick to fix things."{" "}
            <span className="fs-5 fw-bold text-warning">
              – Mark Thomas, Head of Strategic, IT Company
            </span>
          </Toast.Body>
        </Toast>

        <Toast className="bg-dark m-3 text-light font-monospace fs-4 rounded-4">
          <img
            src={thunderbolt}
            className="p-1 testimonialImage m-3 bg-primary rounded-10 rounded me-2"
            alt=""
          />
          <Toast.Body>
            "Loving it, honestly the best purchase of the year."
            <span className="fs-5 fw-bold text-warning">
              – Jonathan, Sales and Marketing head
            </span>
          </Toast.Body>
        </Toast>

        <Toast className="bg-dark m-3 text-light font-monospace fs-4 rounded-4">
          <img
            src={heart}
            className="p-1 testimonialImage m-3 bg-primary rounded-10 rounded me-2"
            alt=""
          />
          <Toast.Body>
          "Really satisfied with the service. Incredibly intuitive and helped us a lot."
            <span className="fs-5 fw-bold text-warning">
            – Steve Stoney, Head Director
            </span>
          </Toast.Body>
        </Toast>

        <Toast className="bg-dark m-3 text-light font-monospace fs-4 rounded-4">
          <img
            src={thunderbolt}
            className="p-1 testimonialImage m-3 bg-primary rounded-10 rounded me-2"
            alt=""
          />
          <Toast.Body>
            "Incredible services from Auxo Digitals. Would recommend everyone for trying it once."
            <span className="fs-5 fw-bold text-warning">
              – Casey, managing Diector, Crio
            </span>
          </Toast.Body>
        </Toast>
      </div>
    </section>
  );
};
