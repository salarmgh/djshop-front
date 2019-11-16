import React from "react";

const Image = (props: { image: string; size: string }) => {
  return (
    <figure className={`image is-${props.size}`}>
      <img src={props.image} />
    </figure>
  );
};

export default Image;
