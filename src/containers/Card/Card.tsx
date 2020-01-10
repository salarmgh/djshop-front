import React from "react";

const Card = (props: {
  children: React.ReactNode;
}) => {
  return (
    <div className="card">
      <div
        className="card-content"
      >
        {props.children}
      </div>
    </div>
  );
};

export default Card;
