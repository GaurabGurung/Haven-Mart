import React from "react";
import "../../styles/product-card.scss";

import { motion } from "framer-motion";
import { Col } from "reactstrap";
import { useNavigate } from "react-router-dom";

import { toast } from "react-toastify";

import { useDispatch } from "react-redux";
import { cartActions } from "../../redux/slices/cartSlice";

const ProductCard = ({ item }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const addItemToCart = () => {
    dispatch(
      cartActions.addItem({
        id: item.id,
        productName: item.productName,
        imgUrl: item.imgUrl,
        price: item.price,
      })
    );
    toast.success(`Product added to the Cart`);
  };

  const navigateToProductPage = () => {
    navigate(`/shop/${item.id}`);
    window.scrollTo(0, 0);
  };

  return (
    <Col lg="3" md="6" className="mb-2">
      <div className="product__item">
        <div className="product__img" onClick={navigateToProductPage}>
          <img src={item.imgUrl} alt="" />
        </div>

        <div className="product__info p-2 text-center">
          <h3 className="product__name">{item.productName}</h3>
          <span>{item.category}</span>
        </div>
        <div className="product__card_btn d-flex align-items-center justify-content-between p-2">
          <span className="price mt-4">${item.price}</span>
          <motion.span whileTap={{ scale: 1.1 }} onClick={addItemToCart}>
            <i className="ri-add-circle-fill"></i>
          </motion.span>
        </div>
      </div>
    </Col>
  );
};

export default ProductCard;
