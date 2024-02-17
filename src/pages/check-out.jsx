import React, { useEffect, useState } from "react";
import "../styles/check-out.scss";

import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/common-section";

import orderPic from "../assets/images/orderPic.json";

import { Container, Row, Col, Form, FormGroup } from "reactstrap";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { cartActions } from "../redux/slices/cartSlice";
import Lottie from "lottie-react";

const CheckOut = () => {
  const totalQty = useSelector((state) => state.cart.totalQuantity);
  const totalAmt = useSelector((state) => state.cart.totalAmount);

  const dispatch = useDispatch();
  const [processing, setProcessing] = useState(false);

  const navigate = useNavigate();

  const handleOrderEvent = (e) => {
    e.preventDefault();
    setProcessing(true);

    setTimeout(() => {
      setProcessing(false);
      dispatch(cartActions.emptyCart());
      navigate("/thankyou");
    }, 4000);
  };

  useEffect(() => {
    window.scroll(0, 0);
  }, [processing]);

  return (
    <Helmet title="Check Out">
      {processing && (
        <Container className="processing__container">
          <Row>
            <Col>
              <div className="processing">
                <Lottie animationData={orderPic} className="icon" />
                <p>Processing your Order</p>
              </div>
            </Col>
          </Row>
        </Container>
      )}
      {!processing && (
        <>
          <CommonSection title="Check Out" />
          <section>
            <Container>
              <Row>
                <Col lg="8">
                  <h6 className="mb-4 fw-bold">Billing Information</h6>
                  <Form className="billing_form">
                    <FormGroup className="form_group d-flex justify-content-center gap-4">
                      <input
                        type="text"
                        required
                        placeholder="Enter your First Name"
                      />
                      <input
                        type="text"
                        required
                        placeholder="Enter your Surname"
                      />
                    </FormGroup>

                    <FormGroup className="form_group">
                      <input
                        type="text"
                        required
                        placeholder="Enter your email"
                      />
                    </FormGroup>

                    <FormGroup className="form_group">
                      <input type="text" required placeholder="Phone number" />
                    </FormGroup>

                    <FormGroup className="form_group">
                      <input
                        type="text"
                        required
                        placeholder="Street address"
                      />
                    </FormGroup>

                    <FormGroup className="form_group">
                      <input type="text" required placeholder="City" />
                    </FormGroup>

                    <FormGroup className="form_group">
                      <input type="text" required placeholder="Postal code" />
                    </FormGroup>

                    <FormGroup className="form_group">
                      <input type="text" required placeholder="Country" />
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
                    <button
                      className="buy__btn w-100"
                      onClick={handleOrderEvent}
                      disabled={processing}
                    >
                      Place your order
                    </button>
                  </div>
                </Col>
              </Row>
            </Container>
          </section>
        </>
      )}
    </Helmet>
  );
};

export default CheckOut;
