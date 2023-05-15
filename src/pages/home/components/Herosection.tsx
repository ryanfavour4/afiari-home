import React from "react"
import woman from "../../../assets/images/womanHero.png"

const Herosection = () => {
  return (
    <div className="Herosection">
      <div className="container">
        <div className="flex_herosection_col2">
          <div className="adcopy_text_hero">
            <h1 className="hero_adcopy_heading">
              Forget the <span className="red_text">hustle,</span><br />
              let’s go <span className="red_text">shopping</span> <br />
              for you.
            </h1>

            <p>Get groceries delivered to you in 60 minutes.</p>

            <button className="get_invite_btn">Get your invite</button>
          </div>
          <div className="female_image_hero">
            <img src={woman} alt="atlassian" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Herosection;
