import React from "react";
import "../LimitedOffer/LimitedOffer.scss";
import { Container, Row, Col } from "reactstrap";

import Clock from "../UI/clock";
import timerImg from "../../assets/images/counter-timer-img.png";

const LimitedOffer = () => {
  return (
    <section className="timer_count">
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="clock__top-content">
              <h4>Limit Offers</h4>
              <h3>Quality Armchair</h3>
              <Clock />
              <button>Visit Store</button>
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
