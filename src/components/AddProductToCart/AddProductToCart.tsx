import React from "react";

const AddProductToCart = (props: {
  title: string;
  color: string;
  backgroundColor: string;
  size: string;
}) => {
  return (
    <button
      style={{
        border: 0,
        width: props.size,
        color: props.color,
        backgroundColor: props.backgroundColor
      }}
      className={`button`}
    >
      {props.title}
    </button>
  );
};

export default AddProductToCart;
