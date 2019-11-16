import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import brandImage from "../../assets/images/brand.jpg";

const Page = (props: { children: React.ReactNode }) => (
  <React.Fragment>
    <Navbar brandImage={brandImage} />
    {props.children}
  </React.Fragment>
);

export default Page;
