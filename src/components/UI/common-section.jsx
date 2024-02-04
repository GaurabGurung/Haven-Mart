import React from "react";
import "../UI/common-section.scss";
import { Container } from "reactstrap";

const CommonSection = ({ title }) => {
  return (
    <section className="common__section">
      <Container className="text">
        <h1>{title}</h1>
      </Container>
    </section>
  );
};

export default CommonSection;
