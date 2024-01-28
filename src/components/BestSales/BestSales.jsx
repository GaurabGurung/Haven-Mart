import React, { useContext, useEffect } from "react";
import "../BestSales/BestSales.scss";
import { Col, Container, Row } from "reactstrap";
import { ProductsContext } from "../../context/products.context";
import ProductsList from "../UI/ProductsList";

const BestSales = () => {
  const { bestSalesProducts } = useContext(ProductsContext);

  useEffect(() => {}, []);

  return (
    <section className="best__sales">
      <Container>
        <Row>
          <Col lg="12" className="text-center">
            <h2>Best Sales</h2>
          </Col>
          <ProductsList data={bestSalesProducts} />
        </Row>
      </Container>
    </section>
  );
};

export default BestSales;
