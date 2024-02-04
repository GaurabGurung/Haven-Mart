import React, { useState } from "react";
import "../styles/ProductDetails.scss";

import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/common-section";
import products from "../assets/data/products";

import { Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";

const ProductDetails = () => {
  const { id } = useParams();
  const product = products.find((item) => item.id === id);

  const [tab, setTab] = useState("desc");
  const [rating, setRating] = useState(null);

  const {
    productName,
    imgUrl,
    price,
    avgRating,
    reviews,
    description,
    shortDesc,
  } = product;

  const allRatings = [1, 2, 3, 4, 5];
  console.log(rating);

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
                <span className="product__price">${price}</span>
                <p className="mt-3">{shortDesc}</p>

                <motion.button whileTap={{ scale: 1.2 }} className="buy__btn">
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
                            <h6>{item.name}</h6>
                            <span>{item.rating} ( rating )</span>
                            <p>{item.text}</p>
                          </li>
                        ))}
                      </ul>

                      {/* Reviews and Description Section */}
                      <div className="review__form">
                        <h4>Leave your experience</h4>
                        <form action="">
                          <div className="form__group">
                            <input type="text" placeholder="Enter your name" />
                          </div>
                          <div className="form__group d-flex align-items-center gap-5">
                            {allRatings.map((star, index) => (
                              <span key={index}>
                                {star}
                                <i
                                  className="ri-star-s-fill"
                                  onClick={() => setRating(star)}
                                />
                              </span>
                            ))}
                          </div>
                          <div className="form__group">
                            <textarea
                              rows={4}
                              type="text"
                              placeholder="Type your Review"
                            />
                          </div>
                          <button className="buy__btn" type="submit">
                            Submit
                          </button>
                        </form>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default ProductDetails;
