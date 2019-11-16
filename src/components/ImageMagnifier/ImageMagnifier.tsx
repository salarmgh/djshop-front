import React from "react";
import Magnifier from "react-magnifier";
//import styles from "./ImageMagnifier.scss";

const ImageMagnifier = (props: { image: string }) => {
  return <Magnifier src={props.image} />;
};

export default ImageMagnifier;
