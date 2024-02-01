import React, { useRef, Ref, useEffect } from "react";
import "../Header/Header.scss";

import logo from "../../assets/images/eco-logo.png";
import user_icon from "../../assets/images/user-icon.png";

import { motion } from "framer-motion";

import { Container, Row } from "reactstrap";
import { NavLink } from "react-router-dom";

const nav_links = [
  { path: "home", display: "Home" },
  { path: "shop", display: "Shop" },
  { path: "cart", display: "Cart" },
];

const Header = () => {
  // const headerRef = useRef(null);

  // const stickyHeaderFunc = () => {
  //   document.addEventListener("scroll", () => {
  //     if (
  //       document.body.scrollTop > 80 ||
  //       document.documentElement.scrollTop > 80
  //     ) {
  //       headerRef.current.classList.add("sticky__header");
  //     } else {
  //       headerRef.current.classList.add("sticky__header");
  //     }
  //   });
  // };

  // useEffect(() => {
  //   stickyHeaderFunc();
  //   return () => window.removeEventListener("scroll", stickyHeaderFunc);
  // });

  const menuRef = useRef(null);

  const menuToggle = () => menuRef.current.classList.toggle("active__block");

  return (
    <header className="header sticky__header">
      <Container className="container ">
        <Row className="">
          <div className="nav__wrapper  ">
            <div className="logo">
              <img src={logo} alt="logo" />
              <h1>Haven Mart</h1>
            </div>

            <div className="navigation" ref={menuRef} onClick={menuToggle}>
              <ul className="menu">
                <h1>Haven Mart</h1>
                {nav_links.map((item, index) => (
                  <li className="nav__item" key={index}>
                    <NavLink to={item.path}>{item.display}</NavLink>
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
                <i className="ri-shopping-cart-2-line"></i>
                <span className="badge">2</span>
              </span>
              <span>
                <motion.img whileTap={{ scale: 1.1 }} src={user_icon} alt="" />
              </span>

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
