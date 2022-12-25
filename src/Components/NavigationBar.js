import React from "react";
import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

export const NavigationBar = () => {
  return (
    <>
      <Navbar className="border" bg="light" expand="lg">
        <Container>
          <Navbar.Brand className="fs-4" href="#home">Auxo Digitals</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link className="text-primary me-4 fs-6" href="#home">Home</Nav.Link>
              <Nav.Link className="text-primary me-4 fs-6" href="#about">About</Nav.Link>
              <Nav.Link className="text-primary me-4 fs-6" href="#services">Services</Nav.Link>
              {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown> */}

              <Button href="#contact" className="bg-primary text-light p-1 fs-6 font-monospace">Contact Us</Button>

            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};
