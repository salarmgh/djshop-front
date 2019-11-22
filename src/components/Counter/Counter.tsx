import React from "react";
import "./Counter.scss";

const Counter = (props: {
  count: number;
  setCount: (state: any) => void;
  variant: any;
  setVariant: (state: any) => void;
  basePrice: number;
}) => {
  return (
    <React.Fragment>
      <button
        className="button"
        style={{
          color: "white",
          backgroundColor: "darkcyan",
          border: 0,
          borderRadius: 0,
          width: "33%"
        }}
        onClick={event => {
          if (props.count > 1) {
            props.setCount(props.count - 1);
            props.variant.price = props.basePrice * (props.count - 1);
            props.setVariant(props.variant);
          }
        }}
      >
        -
      </button>
      <input
        type="number"
        className="input number-input has-text-centered"
        style={{
          color: "white",
          backgroundColor: "darkcyan",
          marginBottom: "20px",
          width: "34%",
          border: "0",
          borderRadius: "0"
        }}
        value={props.count}
      />
      <button
        className="button"
        style={{
          color: "white",
          backgroundColor: "darkcyan",
          border: 0,
          borderRadius: 0,
          width: "33%"
        }}
        onClick={event => {
          props.setCount(props.count + 1);
          props.variant.price = props.basePrice * (props.count + 1);
          props.setVariant(props.variant);
        }}
      >
        +
      </button>
    </React.Fragment>
  );
};

export default Counter;
