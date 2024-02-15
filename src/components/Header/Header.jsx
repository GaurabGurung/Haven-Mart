import React, { useRef, Ref, useEffect, useState } from "react";
import "../Header/Header.scss";

import logo from "../../assets/images/eco-logo.png";
import user_icon from "../../assets/images/user-icon.png";

import { motion } from "framer-motion";

import { Container, Row } from "reactstrap";
import { Link, NavLink, useNavigate } from "react-router-dom";

import { useSelector } from "react-redux";
import useAuth from "../../custom-hooks/useAuth";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase.config";

const nav_links = [
  { path: "home", display: "Home" },
  { path: "shop", display: "Shop" },
  { path: "cart", display: "Cart" },
];

const Header = () => {
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  const menuRef = useRef(null);
  const profileActionRef = useRef(null);
  const navigate = useNavigate();

  const navigateToCart = () => {
    navigate("/cart");
  };

  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);
  const { currentUser } = useAuth();

  const menuToggle = () => {
    menuRef.current.classList.toggle("active__block");
    setIsSideMenuOpen(!isSideMenuOpen);
  };

  const toggleProfileActions = () =>
    profileActionRef.current.classList.toggle("show__profileActions");

  const handleSignOut = () => signOut(auth);

  return (
    <header className="header sticky__header">
      <Container className="container ">
        <Row className="">
          <div className="nav__wrapper  ">
            <div className="logo">
              <img src={logo} alt="logo" />
              <h1>
                Haven <span>Mart</span>
              </h1>
            </div>

            <div className="navigation" ref={menuRef}>
              {isSideMenuOpen && (
                <div className="overlay" onClick={menuToggle} />
              )}

              <h1>
                Haven <span>Mart</span>
              </h1>

              <ul className="menu">
                {nav_links.map((item, index) => (
                  <li className="nav__item" key={index}>
                    <NavLink to={item.path} onClick={menuToggle}>
                      {item.display}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>

            <div className="nav__icons">
              <span className="fav__icon">
                <i className="ri-heart-3-line"></i>
                <span className="badge">1</span>
              </span>
              <span className="cart__icon">
                <i
                  className="ri-shopping-cart-2-line"
                  onClick={navigateToCart}
                ></i>
                <span className="badge">{totalQuantity}</span>
              </span>
              <div className="profile">
                <motion.img
                  whileTap={{ scale: 1.1 }}
                  src={currentUser ? currentUser.photoURL : user_icon}
                  alt=""
                  onClick={toggleProfileActions}
                />

                <div
                  className="profile__actions"
                  ref={profileActionRef}
                  onClick={toggleProfileActions}
                >
                  {currentUser ? (
                    <span onClick={handleSignOut}> Logout</span>
                  ) : (
                    <div>
                      <Link to="/signup"> Signup</Link>
                      <Link to="/login"> Login</Link>
                    </div>
                  )}
                </div>
              </div>

              <div className="mobile__menu">
                <span onClick={menuToggle}>
                  <i className="ri-menu-line"></i>
                </span>
              </div>
            </div>
          </div>
        </Row>
      </Container>
    </header>
  );
};

export default Header;
