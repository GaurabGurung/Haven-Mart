import React from "react";
import "../Footer/Footer.scss";

import { Col, Container, Row } from "react-bootstrap";

import logo from "../../assets/images/eco-logo.png";

const Footer = () => {
  return (
    <section className="footer">
      <Container>
        <Row>
          <Col lg="4">
            <div className="logo">
              <h1>Haven Mart</h1>
            </div>
            <p className="mt-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
              ipsa temporibus expedita ipsum architecto, facilis inventore
              praesentium soluta distinctio dignissimos explicabo necessitatibus
              repellendus aspernatur. Possimus perspiciatis soluta deleniti
              doloribus illum.
            </p>
          </Col>
          <Col lg="3">
            <h1> Top Categories</h1>
            <p className="mt-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
              ipsa temporibus expedita ipsum architecto, facilis inventore
              praesentium soluta distinctio dignissimos explicabo necessitatibus
              repellendus aspernatur. Possimus perspiciatis soluta deleniti
              doloribus illum.
            </p>
          </Col>
          <Col lg="2">
            <h1> Useful Links</h1>
            <p className="mt-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
              ipsa temporibus expedita ipsum architecto, facilis inventore
              praesentium soluta distinctio dignissimos explicabo necessitatibus
              repellendus aspernatur. Possimus perspiciatis soluta deleniti
              doloribus illum.
            </p>
          </Col>
          <Col lg="3">
            <h1>Contact</h1>
            <p className="mt-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
              ipsa temporibus expedita ipsum architecto, facilis inventore
              praesentium soluta distinctio dignissimos explicabo necessitatibus
              repellendus aspernatur. Possimus perspiciatis soluta deleniti
              doloribus illum.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Footer;
