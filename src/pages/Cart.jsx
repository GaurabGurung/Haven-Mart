import React from "react";
import "../styles/cart.scss";

import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/common-section";

import { Col, Container, Row } from "reactstrap";
import { motion } from "framer-motion";
import { cartActions } from "../redux/slices/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

import emptyCart from "../assets/images/empty_cart.png";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const cartTotalPrice = useSelector((state) => state.cart.totalAmount);
  const dispatch = useDispatch();

  const deleteProduct = (item) => {
    dispatch(cartActions.deleteItem(item));
  };

  const addProductQuantity = (item) => {
    dispatch(cartActions.addQuantity(item));
  };

  const subtractProductQuantity = (item) => {
    dispatch(cartActions.subtractQuantity(item));
  };

  const navigate = useNavigate();

  return (
    <Helmet title="Cart">
      <CommonSection title="Shopping Cart" />
      <section>
        <Container>
          <Row>
            {cartItems.length === 0 ? (
              <div className="empty__cart">
                <img src={emptyCart} alt="" />
                <h2 className="fs-4 text-center ">
                  No Items added to the Cart
                </h2>
                <p>
                  Once you add items from the store, your cart will appear here.
                </p>
                <Link to="/shop">
                  <button className="buy__btn">Start Shopping</button>
                </Link>
              </div>
            ) : (
              <>
                <Col lg="9">
                  <table className="table bordered">
                    <thead>
                      <tr>
                        <th className="table__heading">image</th>
                        <th className="table__heading"> Title</th>
                        <th className="table__heading">Qty</th>
                        <th className="table__heading">Price</th>
                        <th className="table__heading">Delete</th>
                      </tr>
                    </thead>
                    <tbody>
                      {cartItems.map((item, index) => (
                        <tr key={index}>
                          <td>
                            <img src={item.imgUrl} alt="" />
                          </td>
                          <td>{item.productName}</td>
                          <td className="quantity">
                            <i
                              className="ri-subtract-line subtract"
                              onClick={() => subtractProductQuantity(item)}
                            />
                            <span>{item.quantity}</span>
                            <i
                              className="ri-add-line add"
                              onClick={() => addProductQuantity(item)}
                            />
                          </td>
                          <td>$ {item.price}</td>
                          <td>
                            <motion.i
                              whileTap={{ scale: 1.2 }}
                              className="ri-delete-bin-6-line delete__icon"
                              onClick={() => deleteProduct(item)}
                            />
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </Col>

                <Col lg="3" className="subTotal__container">
                  <div className="total d-flex justify-content-between align-items-center">
                    <h6>Subtotal :</h6>
                    <span>$ {cartTotalPrice}</span>
                  </div>
                  <p>taxes and shipping will be calculated on checkout</p>
                  <Link to="/check-out">
                    <button className="buy__btn">Checkout</button>
                  </Link>
                  <Link to="/shop">
                    <button className="buy__btn">Continue Shopping</button>
                  </Link>
                </Col>
              </>
            )}
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Cart;
