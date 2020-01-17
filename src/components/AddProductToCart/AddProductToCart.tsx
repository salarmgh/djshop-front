import React from "react";

const AddProductToCart = (props: {
  title: string;
}) => {
  return (
    <button
      className="button is-black"
      style={{ width: "100%", borderRadius: "unset" }}
    >
      {props.title}
    </button>
  );
};

export default AddProductToCart;
