import React, { useRef, useState } from "react";
import "../../styles/product-card.scss";

import { motion } from "framer-motion";
import { Col } from "reactstrap";
import { useNavigate } from "react-router-dom";

import { toast } from "react-toastify";

import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../../redux/slices/cartSlice";

const ProductCard = ({ item }) => {
  const [isFavourite, setIsFavourite] = useState(false);
  const handleFavourite = () => setIsFavourite(!isFavourite);

  const favouriteItems = useSelector((state) => state.cart.favourites);

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
    toast.success(`Product added Successfully`);
  };

  const existingItemCheck = favouriteItems.find(
    (product) => product.id === item.id
  );

  const addItemToFavourite = () => {
    if (!existingItemCheck) {
      dispatch(
        cartActions.addToFavourties({
          id: item.id,
          productName: item.productName,
          imgUrl: item.imgUrl,
          price: item.price,
        })
      );
      toast.info(`Product added To Favourites`);
    } else {
      dispatch(
        cartActions.addToFavourties({
          id: item.id,
          productName: item.productName,
          imgUrl: item.imgUrl,
          price: item.price,
        })
      );
      toast.info("Product removed from Favourites");
    }
  };

  const navigateToProductPage = () => {
    navigate(`/shop/${item.id}`);
    window.scrollTo(0, 0);
  };

  return (
    <Col lg="3" md="6" sm="6" className="mb-2">
      <div className="product__item">
        <div className="product__img">
          <img
            src={item.imgUrl}
            alt={`${item.name} picture`}
            onClick={navigateToProductPage}
          />
          <div className="link__icon" onClick={handleFavourite}>
            {existingItemCheck ? (
              <i className="ri-heart-3-fill " onClick={addItemToFavourite} />
            ) : (
              <i className="ri-heart-3-line " onClick={addItemToFavourite} />
            )}
          </div>
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
