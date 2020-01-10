import React from "react";
import BoxImage from "../../components/BoxImage/BoxImage";
import styles from "./BoxImages.module.scss";

const BoxImages = (props: { images: any }) => {
  return (
    <section className={`container ${styles.boxImages}`}>
      <div className="columns">
        {
          props.images.map((image, index) => {
            return (
              <BoxImage image={image} />
            )
          })
        }
      </div>
    </section>
  )
}

export default BoxImages;
