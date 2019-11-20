import React from "react";

const AddProductToCart = (props: {
  title: string;
  color: string;
  size: string;
}) => {
  return (
    <button
      style={{ width: props.size }}
      className={`button is-light ${props.color}`}
    >
      {props.title}
    </button>
  );
};

export default AddProductToCart;
