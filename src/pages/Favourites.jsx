import React from "react";
import "../styles/favourites.scss";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/common-section";
import ProductsList from "../components/UI/ProductsList";
import { Container, Row, Col } from "reactstrap";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const Favourites = () => {
  const favourites = useSelector((state) => state.cart.favourites);
  return (
    <Helmet title="Favourites">
      <CommonSection></CommonSection>
      <section className="fav__container">
        <Container>
          <Row>
            <Col lg="12">
              <h2 className="text-center title">Favourites</h2>
            </Col>
            {favourites.length === 0 ? (
              <div className="empty">
                <h6 className=" text ">
                  No Items has been added to the Favourites
                </h6>
                <button className="buy__btn ">
                  <Link to="/shop">Continue Shopping</Link>
                </button>
              </div>
            ) : (
              <ProductsList data={favourites} />
            )}
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Favourites;
