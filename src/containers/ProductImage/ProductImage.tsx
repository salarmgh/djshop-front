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
    <Card color="white" backgroundColor="#414141">
      <ImageMagnifier image={props.images[props.index]} />
      <div className="columns is-flex-mobile">
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
