import React from "react";
import "../styles/cart.scss";

import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/common-section";

import { Col, Container, Row } from "reactstrap";
import { motion } from "framer-motion";
import { cartActions } from "../redux/slices/cartSlice";
import { useDispatch, useSelector } from "react-redux";

import tdImg from "../assets/images/arm-chair-01.jpg";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);

  return (
    <Helmet title="Cart">
      <CommonSection title="Shopping Cart" />
      <section>
        <Container>
          <Row>
            {cartItems.length === 0 ? (
              <h2 className="fs-4 text-center">No Items added to the Cart</h2>
            ) : (
              <Col lg="9">
                <table className="table bordered">
                  <thead>
                    <tr>
                      <th>image</th>
                      <th> Title</th>
                      <th>Price</th>
                      <th>Qty</th>
                      <th>Delete</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cartItems.map((item, index) => (
                      <tr key={index}>
                        <td>
                          <img src={item.imgUrl} alt="" />
                        </td>
                        <td>{item.productName}</td>
                        <td>${item.price}</td>
                        <td>{item.quantity}</td>
                        <td>
                          <motion.i
                            whileTap={{ scale: 1.2 }}
                            className="ri-delete-bin-6-line"
                          />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </Col>
            )}
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Cart;
