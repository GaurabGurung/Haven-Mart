import React, { useContext } from "react";
import "../Footer/Footer.scss";

import { ListGroup, Col, Container, Row, ListGroupItem } from "reactstrap";
import { Link } from "react-router-dom";
import { CategoryContext } from "../../context/category.context";

const Footer = () => {
  const year = new Date().getFullYear();
  const { setCategoryValue } = useContext(CategoryContext);

  const setCategory = (linkTo) => {
    switch (linkTo) {
      case "mobile":
        setCategoryValue("mobile");
        break;
      case "sofa":
        setCategoryValue("sofa");
        break;
      case "chair":
        setCategoryValue("chair");
        break;
      case "watch":
        setCategoryValue("watch");
        break;
      default:
        console.log("Unknown link clicked");
    }
  };
  return (
    <section className="footer">
      <Container>
        <Row>
          <Col lg="5">
            <div className="logo">
              <h1 className="footer__title">Haven Mart</h1>
            </div>
            <p className="mt-4 mb-4">
              Discover a world of quality and style at Haven Mart. We curate the
              finest selection of products to elevate your lifestyle. Our
              commitment is to provide unparalleled comfort and sophistication.
              Explore our collection for a home that reflects your unique taste.
            </p>
          </Col>
          <Col lg="2">
            <div className="footer__quick-links">
              <h4 className="footer__title"> Top Categories</h4>
              <ListGroup>
                <ListGroupItem className="ps-0 border-0">
                  <Link to={"/shop"} onClick={() => setCategory("mobile")}>
                    Mobile Phones
                  </Link>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0">
                  <Link to={"/shop"} onClick={() => setCategory("sofa")}>
                    Modern Sofa
                  </Link>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0">
                  <Link to={"/shop"} onClick={() => setCategory("chair")}>
                    Arm Chair
                  </Link>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0">
                  <Link to={"/shop"} onClick={() => setCategory("watch")}>
                    Smart Watches
                  </Link>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>
          <Col lg="2">
            <div className="footer__quick-links">
              <h4 className="footer__title"> Useful Links</h4>
              <ListGroup>
                <ListGroupItem className="ps-0 border-0">
                  <Link to="/shop">Shop</Link>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0">
                  <Link to="/cart">Cart</Link>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0">
                  <Link to="/login">Login</Link>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0">
                  <Link to="#">Privacy Policy</Link>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>
          <Col lg="3">
            <div className="footer__quick-links">
              <h4 className="footer__title">Contact</h4>
              <ListGroup>
                <ListGroupItem className="ps-0 border-0">
                  <span>
                    <i className="ri-map-pin-line"></i>
                  </span>
                  <p>123 Mitchell Street, Brunswick VIC 3056</p>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0">
                  <span>
                    <i className="ri-phone-line"></i>
                  </span>
                  <p>+61 4223 07796</p>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0">
                  <span>
                    <i className="ri-mail-line"></i>
                  </span>
                  <p>gaurabgurung181@gmail.com</p>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>
          <Col lg="12" className="text-center">
            <p className="footer__copyright">
              Copyright {year} developed by Gaurab Gurung, All rights reserved
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Footer;
