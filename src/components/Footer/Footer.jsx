import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link">
              About
            </a>
          </li>
          {/*  */}
          <li>
            <a href="#skills" className="footer__link">
              Skills
            </a>
          </li>
          {/*  */}
          <li>
            <a href="#services" className="footer__link">
              Services
            </a>
          </li>
          {/*  */}
          <li>
            <a href="#portfolio" className="footer__link">
              Portfolio
            </a>
          </li>
          {/*  */}
          <li>
            <a href="#contact" className="footer__link">
              Contact
            </a>
          </li>
        </ul>
        {/*  */}
        <div className="footer__social">
          <a
            href="https://facebook.com/baolong317"
            className="footer__social-link"
            target="_blank"
          >
            <i className="uil uil-facebook"></i>
          </a>

          <a
            href="https://github.com/vobaolong"
            className="footer__social-link"
            target="_blank"
          >
            <i className="uil uil-github"></i>
          </a>

          <a
            href="https://www.linkedin.com/in/v%C3%B5-b%E1%BA%A3o-long-45335a20a/"
            className="footer__social-link"
            target="_blank"
          >
            <i className="uil uil-linkedin"></i>
          </a>
        </div>
        <span className="footer__copy">
          Copyright: &#169; Vo Bao Long. All rights reserved
        </span>
      </div>
    </footer>
  );
};

export default Footer;
