import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import brandImage from "../../assets/images/brand.jpg";

const Product = () => {
  const brand = {
    url: "http://localhost:3000",
    image: brandImage
  };
  const links = [
    {
      name: "Home",
      url: "http://localhost:3000"
    },
    {
      name: "Documentation",
      url: "http://localhost:3000"
    },
    {
      name: "About",
      url: "http://localhost:3000"
    },
    {
      name: "Jobs",
      url: "http://localhost:3000"
    },
    {
      name: "Contact",
      url: "http://localhost:3000"
    }
  ];
  return (
    <div>
      <Navbar links={links} brand={brand} />
    </div>
  );
};

export default Product;
