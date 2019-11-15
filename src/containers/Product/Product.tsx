import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import brandImage from "../../assets/images/brand.jpg";
import Image from "../../components/Image/Image";

const Product = () => {
  return (
    <React.Fragment>
      <Navbar brandImage={brandImage} />
      <div className="hero is-fullheight">
        <div className="columns">
          <div className="column">
            <Image
              image="https://bulma.io/images/placeholders/256x256.png"
              size="square"
            />
          </div>
          <div className="column"></div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Product;
