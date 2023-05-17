import React from "react";
import Slider from "react-slick";
import avatar from "../../../assets/svg/avatar.svg";

const Slide = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplaySpeed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    accessibility: true,
    arrows: true,
    className: "slider_main_slide",
  };

  return (
    <div className="slide_section">
      <div className="container">
        <div className="slide_heading_top">
          <h1 className="second_font_title">What our customers are saying</h1>
        </div>

        <Slider {...settings}>
          <div className="user_review_box">
            <img src={avatar} alt="" />
            <div className="star_rating"></div>
            <p>
              I was so happy to get what I ordered and even better. Well done
              team Afiari. Expect again!!!
            </p>
            <h3>Jumoke</h3>
          </div>

          <div className="user_review_box">
            <img src={avatar} alt="" />
            <div className="star_rating"></div>
            <p>
              I was so happy to get what I ordered and even better. Well done
              team Afiari. If only we can have more of this in Nigeria.
            </p>
            <h3>Larry</h3>
          </div>

          <div className="user_review_box">
            <img src={avatar} alt="" />
            <div className="star_rating"></div>
            <p>
              You guys are the very best. Just add more items on the platform
              please.
            </p>
            <h3>Adanne</h3>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Slide;
