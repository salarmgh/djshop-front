import React from "react";
import Image from "../../components/Image/Image";

const Images = (props: { images: string[]; size: string }) => {
  return (
    <React.Fragment>
      {props.images.map(image => {
        return <Image image={image} size={props.size} />;
      })}
    </React.Fragment>
  );
};

export default Images;
