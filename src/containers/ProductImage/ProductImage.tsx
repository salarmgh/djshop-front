import React from "react";
import ImageMagnifier from "../../components/ImageMagnifier/ImageMagnifier";
import Images from "../../containers/Images/Images";
import Card from "../Card/Card";

const ProductImage = (props: {
  images: string[];
  size: string;
  index: number;
  clickHandler: (event: React.MouseEvent<HTMLImageElement, MouseEvent>) => void;
}) => {
  return (
    <Card>
      <ImageMagnifier image={props.images[props.index]} />
      <div style={{ overflow: "auto" }} className="columns is-flex-mobile">
        <Images
          images={props.images}
          size={props.size}
          clickHandler={props.clickHandler}
        />
      </div>
    </Card>
  );
};

export default ProductImage;
