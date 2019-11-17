import React from "react";
import styles from "./Image.module.scss";

declare module "react" {
  interface ImgHTMLAttributes<T> extends HTMLAttributes<T> {
    index?: number;
  }
}

const Image = (props: {
  image: string;
  size: string;
  index: number;
  clickHandler: (event: React.MouseEvent<HTMLImageElement, MouseEvent>) => void;
}) => {
  return (
    <figure className={`image is-${props.size} ${styles.imageItem}`}>
      <img
        onClick={props.clickHandler}
        alt=""
        data-index={props.index}
        src={props.image}
      />
    </figure>
  );
};

export default Image;
