import React from "react";
import "../UI/common-section.scss";
import { Container } from "reactstrap";

const CommonSection = () => {
  return (
    <section className="common__section">
      <Container className="text">
        <h1>Products</h1>
      </Container>
    </section>
  );
};

export default CommonSection;
