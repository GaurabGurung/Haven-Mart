import React from "react";
import "../styles/check-out.scss";

import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/common-section";

import { Container, Row, Col, Form, FormGroup } from "reactstrap";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const CheckOut = () => {
  const totalQty = useSelector((state) => state.cart.totalQuantity);
  const totalAmt = useSelector((state) => state.cart.totalAmount);

  return (
    <Helmet title="Check Out">
      <CommonSection title="Check Out" />
      <section>
        <Container>
          <Row>
            <Col lg="8">
              <h6 className="mb-4 fw-bold">Billing Information</h6>
              <Form className="billing_form">
                <FormGroup className="form_group d-flex justify-content-center gap-4">
                  <input type="text" placeholder="Enter your First Name" />
                  <input type="text" placeholder="Enter your Surname" />
                </FormGroup>

                <FormGroup className="form_group">
                  <input type="text" placeholder="Enter your email" />
                </FormGroup>

                <FormGroup className="form_group">
                  <input type="text" placeholder="Phone number" />
                </FormGroup>

                <FormGroup className="form_group">
                  <input type="text" placeholder="Street address" />
                </FormGroup>

                <FormGroup className="form_group">
                  <input type="text" placeholder="City" />
                </FormGroup>

                <FormGroup className="form_group">
                  <input type="text" placeholder="Postal code" />
                </FormGroup>

                <FormGroup className="form_group">
                  <input type="text" placeholder="Country" />
                </FormGroup>
              </Form>
            </Col>

            <Col lg="4">
              <div className="checkout__cart">
                <h6>
                  Total Qty : <span>{totalQty}</span>
                </h6>
                <h6>
                  Subtotal : <span>$ {totalAmt}</span>
                </h6>
                <h6>
                  <span>
                    Shipping : <br />
                    Free Shipping
                  </span>
                  <span>$0</span>
                </h6>
                <h4>
                  Total Cost : <span>$ {totalAmt}</span>
                </h4>
                <Link to="/login">
                  <button className="buy__btn w-100">Place your order</button>
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default CheckOut;
