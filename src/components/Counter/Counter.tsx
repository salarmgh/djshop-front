import React from "react";
import "./Counter.scss";

const Counter = (props: { count: number; setCount: () => void }) => {
  return (
    <div className="quantity">
      <input className="input" type="number" value={props.count} />
    </div>
  );
};

export default Counter;
