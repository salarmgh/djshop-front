import React from "react";
import ImageMagnifier from "../../components/ImageMagnifier/ImageMagnifier";
import Images from "../../containers/Images/Images";

const ProductImage = (props: { images: string[]; size: string }) => {
  return (
    <div className="columns">
      <div className="column">
        <Images images={props.images} size={props.size} />
      </div>
      <div className="column is-four-fifths">
        <ImageMagnifier image="https://instagram.fevn1-1.fna.fbcdn.net/vp/220ac8fcc232c397367a72a520b0bf24/5E4759DA/t51.2885-15/e35/s1080x1080/74448490_2556314537988766_6964396219630299901_n.jpg?_nc_ht=instagram.fevn1-1.fna.fbcdn.net&_nc_cat=110" />
      </div>
    </div>
  );
};

export default ProductImage;
