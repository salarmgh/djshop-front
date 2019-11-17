import React from "react";
import ImageMagnifier from "../../components/ImageMagnifier/ImageMagnifier";
import Images from "../../containers/Images/Images";
import styles from "./ProductImage.module.scss";

const ProductImage = (props: {
  images: string[];
  size: string;
  index: number;
  clickHandler: (event: React.MouseEvent<HTMLImageElement, MouseEvent>) => void;
}) => {
  return (
    <div className="columns">
      <div className={`column ${styles.imageList}`}>
        <Images
          images={props.images}
          size={props.size}
          clickHandler={props.clickHandler}
        />
      </div>
      <div className="column is-four-fifths">
        <ImageMagnifier image={props.images[props.index]} />
      </div>
    </div>
  );
};

export default ProductImage;
