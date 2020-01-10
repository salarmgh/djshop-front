import React from "react";
import styles from "./BigBanner.module.scss";


const BigBanner = (props: { url: string, path: string }) => {
  return (
    <section className={`container ${styles.bigBanner}`}>
      <a href={props.path}>
        <figure className="image">
          <img src={props.url} />
        </figure>
      </a>
    </section>
  )
}

export default BigBanner;
