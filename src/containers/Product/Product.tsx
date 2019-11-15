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
              image="https://instagram.fevn1-1.fna.fbcdn.net/vp/220ac8fcc232c397367a72a520b0bf24/5E4759DA/t51.2885-15/e35/s1080x1080/74448490_2556314537988766_6964396219630299901_n.jpg?_nc_ht=instagram.fevn1-1.fna.fbcdn.net&_nc_cat=110"
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
