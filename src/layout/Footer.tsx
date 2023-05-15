import React from "react";
import { FaTwitter, FaFacebookSquare, FaLinkedin } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import style from "./Layout.module.css";
import logo from "../assets/svg/svg9.svg";

const Footer = () => {
  return (
    <div className={style.Footer}>
      <div className="container">
        <div className={style.flex_cols}>
          <div className={style.col1}>
            <div className={style.heading}>
              <div className={style.logo_nav}>
                <img src={logo} alt="" />
              </div>
            </div>
            <p>
              <FaTwitter />
              <a href="https://github.com/ryanfavour4/">Twitter</a>
            </p>
            <p>
              <RiInstagramFill />
              <a href="https://github.com/ryanfavour4/">Instagram</a>
            </p>
            <p>
              <FaFacebookSquare />
              <a href="https://github.com/ryanfavour4/">Facebook</a>
            </p>
            <p>
              <FaLinkedin />
              <a href="https://github.com/ryanfavour4/">Linkedin</a>
            </p>
          </div>
          <div className={style.col2}>
            <div className={style.heading}>Product and services</div>
            <a href="https://github.com/ryanfavour4/">Stores around you</a>
            <a href="https://github.com/ryanfavour4/">Afiari merchants</a>
          </div>
          <div className={style.col3}>
            <div className={style.heading}>Afiari and Customers</div>

            <a href="https://github.com/ryanfavour4/">About Us</a>
            <a href="https://github.com/ryanfavour4/">Register your store</a>
            <a href="https://github.com/ryanfavour4/">Careers</a>
            <a href="https://github.com/ryanfavour4/">Blog</a>
            <a href="https://github.com/ryanfavour4/">Privacy Policy & Terms</a>
          </div>
          <div className={style.col4}>
            <div className={style.heading}>Where we operate</div>

            <a href="https://github.com/ryanfavour4/">Lekki</a>
          </div>
        </div>
        <div className="copyrights">
          <p>©2023 Afiari Inc.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
