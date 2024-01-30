import React, { useContext, useState } from "react";
import "../NewArrivals/NewArrivals.scss";

import { Container, Row, Col } from "react-bootstrap";
import { ProductsContext } from "../../context/products.context";

import ProductsList from "../UI/ProductsList";

const NewArrivals = () => {
  const { newArrivals } = useContext(ProductsContext);

  return (
    <section className="new__arrivals ">
      <Container>
        <Col lg="12" className="text-center mb-5">
          <h2 className="section__title">New Arrivals</h2>
        </Col>
        <Row>
          <ProductsList data={newArrivals} />
        </Row>
      </Container>
    </section>
  );
};

export default NewArrivals;
