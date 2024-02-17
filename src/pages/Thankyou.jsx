import React, { useEffect } from "react";
import "../styles/thankyou.scss";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/common-section";
import { Col, Container, Row } from "reactstrap";
import { Link } from "react-router-dom";
import Lottie from "lottie-react";
import confirm from "../assets/images/confirmed.json";

const Thankyou = () => {
  return (
    <Helmet title="Thank you">
      <CommonSection />
      <section>
        <Container>
          <Row>
            <Col lg="12" className="page__container">
              <Lottie
                loop={false}
                animationData={confirm}
                className="confirm_icon "
              />
              <div className="thanks_container">
                <h3 className="text">Thank you for shopping with us</h3>
                <p>
                  Happy shopping, and we look forward to serving you again soon!
                </p>
                <button className="buy__btn">
                  <Link to="/shop">Shop More</Link>
                </button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Thankyou;
