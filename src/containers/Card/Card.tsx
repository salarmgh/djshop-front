import React from "react";

const Card = (props: {
  children: React.ReactNode;
  color: string;
  backgroundColor: string;
}) => {
  return (
    <div className="card">
      <div
        style={{ color: props.color, backgroundColor: props.backgroundColor }}
        className="card-content"
      >
        {props.children}
      </div>
    </div>
  );
};

export default Card;
