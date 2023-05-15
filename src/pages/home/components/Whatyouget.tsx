import React from "react";
import { FaTruck } from "react-icons/fa";
import { RiSecurePaymentFill } from "react-icons/ri";
import { MdAssignmentReturn, MdContactSupport } from "react-icons/md";

const featuresList = [
  {
    icon: <FaTruck />,
    title: "Free and Fast Delivery",
    text: "For an awesome shopping experience, you get free delivery and items delivered in 60 minutes, so you can spend less and stress less.",
  },
  {
    icon: <RiSecurePaymentFill />,
    title: "Secure payment",
    text: "You can be rest assured that your payments are secured, as we have different reliable payment methods for you",
  },
  {
    icon: <MdAssignmentReturn />,
    title: "Free and Fast Delivery",
    text: "For an awesome shopping experience, you get free delivery and items delivered in 60 minutes, so you can spend less and stress less.",
  },
  {
    icon: <MdContactSupport />,
    title: "Free and Fast Delivery",
    text: "For an awesome shopping experience, you get free delivery and items delivered in 60 minutes, so you can spend less and stress less.",
  },
];

const Whatyouget = () => {
  const featuresFunction = featuresList.map((feature, index) => {
    return (
      <div key={index} className="whatyouget_features_box">
        <div className="illustrator">
          {feature.icon}
        </div>
        <div>
          <h3 className="whatyouget_features_title">{feature.title}</h3>
          <p>
            {feature.text}
          </p>
        </div>
      </div>
    );
  });

  return (
    <div className="Whatyouget">
      <div className="container">
        <div className="whatyouget_heading_top">
          <h1 className="second_font_title">What you get</h1>
        </div>

        <div className="whatyouget_features_flex">
          {featuresFunction}
        </div>
      </div>
    </div>
  );
};

export default Whatyouget;
