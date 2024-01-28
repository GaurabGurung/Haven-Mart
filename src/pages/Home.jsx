import React from "react";
import { Container, Row, Col } from "reactstrap";

import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import Helmet from "../components/Helmet/Helmet";
import Services from "../services/services";
import TrendingProducts from "../components/TrendingProducts/TrendingProducts";
import BestSales from "../components/BestSales/BestSales";

import HeroImg from "../assets/images/hero-img.png";
import "../styles/home.scss";
import LimitedOffer from "../components/LimitedOffer/LimitedOffer";

const Home = () => {
  const year = new Date().getFullYear();

  return (
    <Helmet title={"Home"}>
      <section className="hero__section">
        <Container>
          <Row>
            <Col lg="6" md="6">
              <div className="hero__content">
                <p className="hero__subtitle">Trending product in {year}</p>
                <h2>Make Your Interior More Minimalistic & Mordern</h2>
                <p>
                  Embrace the beauty of minimalism and modern aesthetics to
                  transform your home into a stylish haven. Discover handpicked
                  decor pieces and furnishings that seamlessly blend
                  functionality with elegance. Our curated selection promises to
                  create a contemporary ambiance, where every element
                  contributes to a harmonious and sophisticated interior.
                </p>
                <motion.button whileTap={{ scale: 1.2 }} className="shop__btn">
                  <Link to="/shop">SHOP NOW</Link>
                </motion.button>
              </div>
            </Col>
            <Col lg="6" md="6">
              <div className="herp__img">
                <img src={HeroImg} alt="" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <Services />
      <TrendingProducts />
      <BestSales />
      <LimitedOffer />
    </Helmet>
  );
};

export default Home;
