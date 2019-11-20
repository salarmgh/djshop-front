import React from "react";
import styles from "./Card.module.scss";

const Card = (props: { children: React.ReactNode }) => {
  return (
    <div className="card">
      <div className={`card-content ${styles.cardContent}`}>
        {props.children}
      </div>
    </div>
  );
};

export default Card;
