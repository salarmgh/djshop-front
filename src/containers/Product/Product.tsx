import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import brandImage from "../../assets/images/brand.jpg";

const Product = () => {
  return (
    <React.Fragment>
      <Navbar brandImage={brandImage} />
      <div className="hero is-fullheight"></div>
    </React.Fragment>
  );
};

export default Product;
