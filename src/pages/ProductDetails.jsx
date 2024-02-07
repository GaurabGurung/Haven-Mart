import React, { useEffect, useRef, useState } from "react";
import "../styles/ProductDetails.scss";

import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/common-section";
import products from "../assets/data/products";
import ProductsList from "../components/UI/ProductsList";

import { Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { cartActions } from "../redux/slices/cartSlice";
import { toast } from "react-toastify";

const ProductDetails = () => {
  const { id } = useParams();
  const product = products.find((item) => item.id === id);

  const [tab, setTab] = useState("desc");
  const [rating, setRating] = useState(null);

  const dispatch = useDispatch();

  const {
    productName,
    imgUrl,
    price,
    avgRating,
    reviews,
    description,
    shortDesc,
    category,
  } = product;

  const allRatings = [1, 2, 3, 4, 5];
  const relatedProducts = products.filter((item) => item.category === category);

  const reviewUser = useRef("");
  const reviewMsg = useRef("");

  const submitHandler = (e) => {
    e.preventDefault();

    const reviewUserName = reviewUser.current.value;
    const reviewUserMsg = reviewMsg.current.value;

    const reviewObj = {
      userName: reviewUserName,
      text: reviewUserMsg,
      rating,
    };

    toast.success(`Thank you for your review ${reviewObj.userName}`);
    setRating(null);
    reviewUser.current.value = "";
    reviewMsg.current.value = "";
  };

  const addToCart = () => {
    dispatch(
      cartActions.addItem({
        id,
        productName,
        image: imgUrl,
        price,
      })
    );
    toast.success(`Product added to Cart`);
  };

  useEffect(() => {
    window.scroll(0, 0);
  }, [product]);

  return (
    <Helmet title={productName}>
      <CommonSection title={productName} />
      <section className="product__container">
        <Container className="pt-0 ">
          <Row>
            <Col lg="6">
              <img src={imgUrl} alt="product picture" className="productImg" />
            </Col>
            <Col lg="6">
              <div className="product__details ">
                <h2>{productName}</h2>
                <div className="product__rating d-flex align-items-center gap-3 mb-4">
                  <div>
                    <span>
                      <i className="ri-star-fill" />
                    </span>
                    <span>
                      <i className="ri-star-fill" />
                    </span>
                    <span>
                      <i className="ri-star-fill" />
                    </span>
                    <span>
                      <i className="ri-star-fill" />
                    </span>
                    <span>
                      <i className="ri-star-half-fill" />
                    </span>
                  </div>
                  <p>
                    (<span>{avgRating}</span> ratings)
                  </p>
                </div>
                <div className="d-flex align-items-center gap-5">
                  <span className="product__price">${price}</span>
                  <span>Category: {category.toUpperCase()}</span>
                </div>
                <p className="mt-3">{shortDesc}</p>

                <motion.button
                  whileTap={{ scale: 1.2 }}
                  className="buy__btn"
                  onClick={addToCart}
                >
                  Add to Cart
                </motion.button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="description__reviews">
        <Container>
          <Row>
            <Col lg="12">
              <div className="tab__wrapper d-flex align-items-center gap-5">
                <h6
                  className={`${tab === "desc" ? "active__tab" : ""}`}
                  onClick={() => setTab("desc")}
                >
                  Description
                </h6>
                <h6
                  className={`${tab === "reviews" ? "active__tab" : ""}`}
                  onClick={() => setTab("reviews")}
                >
                  Reviews ({reviews.length})
                </h6>
              </div>

              <div className="tab__content mt-5">
                {tab === "desc" ? (
                  <div>
                    <p>{description}</p>
                  </div>
                ) : (
                  <div className="product__review mt-5">
                    <div className="review__wrapper">
                      <ul>
                        {reviews.map((item, index) => (
                          <li key={index}>
                            <h6>{item.userName}</h6>
                            <span>{item.rating} ( rating )</span>
                            <p>{item.text}</p>
                          </li>
                        ))}
                      </ul>

                      {/* Reviews and Description Section */}
                      <div className="review__form">
                        <h4>Leave your experience</h4>
                        <form action="" onSubmit={submitHandler}>
                          <div className="form__group">
                            <input
                              type="text"
                              placeholder="Enter your name"
                              ref={reviewUser}
                              required
                            />
                          </div>
                          <div className="form__group d-flex align-items-center gap-4 rating__group">
                            {allRatings.map((star, index) => (
                              <motion.span
                                className={` ${
                                  rating === star ? "active_star" : ""
                                }`}
                                whileTap={{ scale: 1.2 }}
                                key={index}
                                onClick={() => setRating(star)}
                              >
                                {star}
                                <i className="ri-star-s-fill" />
                              </motion.span>
                            ))}
                          </div>
                          <div className="form__group">
                            <textarea
                              rows={4}
                              type="text"
                              placeholder="Type your Review"
                              ref={reviewMsg}
                              required
                            />
                          </div>
                          <motion.button
                            whileTap={{ scale: 1.2 }}
                            className="buy__btn"
                            type="submit"
                          >
                            Submit
                          </motion.button>
                        </form>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </Col>

            {/* You might also like section */}
            <Col lg="12" md="12" className="mt-5">
              <h2 className="related__title">You might also like</h2>
            </Col>
            <ProductsList data={relatedProducts} />
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default ProductDetails;
