import React, { useEffect } from "react";

import "./ScrollUp.scss";

const ScrollUp = () => {
  const scrollToTop = () => {
    const scrollPosition = window.scrollY;
    const arrowElement = document.getElementById("arrow");

    if (scrollPosition >= 350) {
      arrowElement.classList.add("showScroll");
    } else {
      arrowElement.classList.remove("showScroll");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollToTop);
    return () => window.removeEventListener("scroll", scrollToTop);
  }, []);

  return (
    <div className="arrow__container">
      <a href="#" className="arrow__icon" id="arrow">
        <i className="ri-arrow-up-line" />
      </a>
    </div>
  );
};

export default ScrollUp;
