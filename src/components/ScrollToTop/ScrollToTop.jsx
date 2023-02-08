import React from "react";
import "./scrolltotop.css";

const ScrollToTop = () => {
  //
  window.addEventListener("scroll", function () {
    const ScrollToTop = document.querySelector(".scrollToTop");
    if (this.scrollY >= 560) ScrollToTop.classList.add("show__scroll");
    else ScrollToTop.classList.remove("show__scroll");
  });
  return (
    <a href="#" className="scrollToTop">
      <i className="uil uil-arrow-up scrollToTop__icon"></i>
    </a>
  );
};

export default ScrollToTop;
