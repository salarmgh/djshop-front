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
    <div className="level">
      <div className="level-item">
        <button
          className="button"
          style={{ width: "100%", borderRadius: "unset" }}
          onClick={event => {
            props.setCount(props.count + 1);
            props.variant.price = props.basePrice * (props.count + 1);
            props.setVariant(props.variant);
          }}
        >
          +
      </button>
      </div>
      <div className="level-item">
        <input
          style={{ borderRadius: "unset" }}
          type="number"
          className="input number-input has-text-centered"
          value={props.count}
        />
      </div>
      <div className="level-item">
        <button
          style={{ width: "100%", borderRadius: "unset" }}
          className="button"
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
      </div>
    </div >
  );
};

export default Counter;
