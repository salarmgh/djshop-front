import React from "react";

const Logo = (props: { image: string; size: string; shape: string }) => {
  return (
    <a href="/">
      <figure className={`image is-${props.size}`}>
        <img src={props.image} className={`is-${props.shape}`} />
      </figure>
    </a>
  );
};

export default Logo;
