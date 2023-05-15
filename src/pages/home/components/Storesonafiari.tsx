import React from "react";
import storeimage from "../../../assets/images/adibaImg-0353e325.jpg";

const storesList = [
  {
    image: storeimage,
    location: "Free and Fast Delivery",
  },
  {
    image: storeimage,
    location: "Free and Fast Delivery",
  },
  {
    image: storeimage,
    location: "Free and Fast Delivery",
  },
  {
    image: storeimage,
    location: "Free and Fast Delivery",
  },
  {
    image: storeimage,
    location: "Free and Fast Delivery",
  },
  {
    image: storeimage,
    location: "Free and Fast Delivery",
  },
  {
    image: storeimage,
    location: "Free and Fast Delivery",
  },
];

const Storesonafiari = () => {
  const storesListFuction = storesList.map((store, index) => {
    return (
      <div key={index} className="Storesonafiari_card">
        <div className="Storesonafiari_img_card">
          <img src={store.image} alt="" />
        </div>
        <h3 className="Storesonafiari_store_name">{store.location}</h3>
      </div>
    );
  });

  return (
    <div className="Storesonafiari">
      <div className="container">
        <div className="Storesonafiari_heading_top">
          <h1 className="second_font_title">Stores on Afiari</h1>
        </div>

        <div className="Storesonafiari_features_flex">
          <div className="Storesonafiari_scroll">{storesListFuction}</div>
        </div>
      </div>
    </div>
  );
};

export default Storesonafiari;
