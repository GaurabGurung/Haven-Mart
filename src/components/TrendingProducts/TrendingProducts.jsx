import React, { useEffect, useState } from "react";
import "../TrendingProducts/TrendingProducts.scss";

import { Container, Row, Col } from "reactstrap";

import ProductsList from "../UI/ProductsList";
import products from "../../assets/data/products";

const TrendingProducts = () => {
  const [data, setData] = useState(products);
  useEffect(() => {
    const filteredProductItems = products.filter(
      (item) => item.category === "chair"
    );
    setData(filteredProductItems);
  }, []);
  console.log(data);
  return (
    <section className="trending__products">
      <Container>
        <Row>
          <Col lg="12" className="text-center">
            <h2>Trending Products</h2>
          </Col>
          <ProductsList data={data} />
        </Row>
      </Container>
    </section>
  );
};

export default TrendingProducts;
