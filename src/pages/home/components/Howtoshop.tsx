import React from "react";
import arrowDown from "../../../assets/svg/arrowdown.svg";
import arrowRight from "../../../assets/svg/arrowright.svg";
import arrowUp from "../../../assets/svg/arrowup.svg";
import signUp from "../../../assets/svg/signUp.svg";

const Howtoshop = () => {
  return (
    <div className="Howtoshop">
      <div className="container">
        <div className="Howtoshop_heading_top">
          <h1 className="second_font_title">
            How to shop on <span className="green_text">Afiari</span>
          </h1>
        </div>

        <div className="Howtoshop_features_flex">
          <div className="process_col1">
            <img src={arrowRight} alt="" className="arrow" />
            <div className="Howtoshop_process_white_box">
              <img src={signUp} alt="" />
            </div>
            <div className="Howtoshop_text">
              <h3>Sign up</h3>
              <p>Just a few simple steps and you are ready to shop.</p>
            </div>
          </div>
          <img src={arrowDown} alt="" className="mobile_down_arrow" />
          <div className="process_col2">
            <div className="Howtoshop_process_white_box">
              <img src={signUp} alt="" />
            </div>
            <div className="Howtoshop_text">
              <h3>Shop</h3>
              <p>Start shopping from stores that are close to you by clicking on “Stores around you”.</p>
            </div>
          </div>
          <img src={arrowDown} alt="" className="mobile_down_arrow" />
          <div className="process_col3">
            <img src={arrowDown} alt="" className="arrow" />
            <div className="Howtoshop_process_white_box">
              <img src={signUp} alt="" />
            </div>
            <div className="Howtoshop_text">
              <h3>Checkout</h3>
              <p>After selecting all the items you want, click on 'checkout', choose your preferred payment method and pay.</p>
            </div>
          </div>
          <img src={arrowDown} alt="" className="mobile_down_arrow" />
          <div className="process_col4">
            <div className="Howtoshop_process_white_box">
              <img src={signUp} alt="" />
            </div>
            <div className="Howtoshop_text">
              <h3>Delivery</h3>
              <p>Your order will be delivered to you in 60 minutes!.</p>
            </div>

            <img src={arrowUp} alt="" className="arrow" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Howtoshop;
