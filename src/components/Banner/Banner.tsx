import React from "react";
import styles from "./Banner.module.scss";

const Banner = (props: {image: string}) => {
      return (
        <img alt="Category" className={styles.banner} src={props.image} />
      );
}

export default Banner;