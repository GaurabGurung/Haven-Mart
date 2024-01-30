import React, { useContext, useState } from "react";
import "../popularInCategory/popularInCategory.scss";

import { Container, Row, Col } from "react-bootstrap";
import { ProductsContext } from "../../context/products.context";
import ProductsList from "../UI/ProductsList";

const PopularInCategory = () => {
  const { popularInCategory } = useContext(ProductsContext);
  return (
    <section className="popular__category">
      <Container>
        <Col lg="12" className="text-center mb-5">
          <h2>Popular In Category</h2>
        </Col>
        <Row>
          <ProductsList data={popularInCategory} />
        </Row>
      </Container>
    </section>
  );
};

export default PopularInCategory;
