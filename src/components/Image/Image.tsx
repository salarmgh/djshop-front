import React from "react";
import Magnifier from "react-magnifier";
import "./Magnifier.css";

const Image = (props: { image: string; size: string }) => {
  return (
    <React.Fragment>
      <Magnifier src={props.image} />
    </React.Fragment>
  );
};

export default Image;
