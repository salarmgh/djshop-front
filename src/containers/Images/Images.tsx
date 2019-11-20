import React from "react";
import Image from "../../components/Image/Image";

const Images = (props: {
  images: string[];
  size: string;
  clickHandler: (event: React.MouseEvent<HTMLImageElement, MouseEvent>) => void;
}) => {
  return (
    <React.Fragment>
      {props.images.map((image, index) => {
        return (
          <div className="column is-one-quarter-mobile is-one-quarter">
            <Image
              key={index}
              index={index}
              image={image}
              size={props.size}
              clickHandler={props.clickHandler}
            />
          </div>
        );
      })}
    </React.Fragment>
  );
};

export default Images;
