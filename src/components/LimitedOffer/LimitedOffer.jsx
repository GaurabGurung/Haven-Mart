import React from "react";
import "../LimitedOffer/LimitedOffer.scss";
import { Container, Row, Col } from "reactstrap";

import { motion } from "framer-motion";

import Clock from "../UI/clock";
import timerImg from "../../assets/images/counter-timer-img.png";

const LimitedOffer = () => {
  return (
    <section className="timer_count">
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="clock">
              <div className="clock__top-content">
                <h4 className="text-white fs-6 mb-2">Limit Offers</h4>
                <h3 className="text-white fs-5 mb-3">Quality Armchair</h3>
              </div>
              <Clock />
              <motion.button
                whileTap={{ scale: 1.2 }}
                className="buy_btn store__btn"
              >
                Visit Store
              </motion.button>
            </div>
          </Col>
          <Col lg="6" md="6" className="text-end">
            <img src={timerImg} alt="" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default LimitedOffer;
