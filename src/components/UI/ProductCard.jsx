import React from "react";
import "../../styles/product-card.scss";

import { motion } from "framer-motion";
import { Col } from "reactstrap";
import { Link } from "react-router-dom";

const ProductCard = ({ item }) => {
  return (
    <Col lg="3" md="6" className="mb-2">
      <div className="product__item">
        <div className="product__img">
          <img src={item.imgUrl} alt="" />
        </div>
        <div className="product__info p-2 text-center">
          <h3 className="product__name">
            <Link to={`/shop/${item.id}`}>{item.productName}</Link>
          </h3>
          <span>{item.category}</span>
        </div>
        <div className="product__card_btn d-flex align-items-center justify-content-between p-2">
          <span className="price mt-4">${item.price}</span>
          <motion.span whileTap={{ scale: 1.1 }}>
            <i className="ri-add-circle-fill"></i>
          </motion.span>
        </div>
      </div>
    </Col>
  );
};

export default ProductCard;
