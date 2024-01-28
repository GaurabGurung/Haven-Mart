import React, { useContext } from "react";
import "../TrendingProducts/TrendingProducts.scss";

import { Container, Row, Col } from "reactstrap";

import ProductsList from "../UI/ProductsList";
import { ProductsContext } from "../../context/products.context";

const TrendingProducts = () => {
  const { trendingProducts } = useContext(ProductsContext);

  return (
    <section className="trending__products">
      <Container>
        <Row>
          <Col lg="12" className="text-center">
            <h2>Trending Products</h2>
          </Col>
          <ProductsList data={trendingProducts} />
        </Row>
      </Container>
    </section>
  );
};

export default TrendingProducts;
