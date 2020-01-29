import React from "react";

const AddProductToCart = (props: {
  title: string;
  handler: any;
}) => {
  return (
    <button
      className="button is-black"
      style={{ width: "100%", borderRadius: "unset" }}
      onClick={props.handler}
    >
      {props.title}
    </button>
  );
};

export default AddProductToCart;
