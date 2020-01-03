import React from "react";
import ImageSlide from "./ImageSlide";

const ImageSlides = (props: { images: string[], imageIndex: number }) => {
  return (
    <React.Fragment>
      {
        props.images.map((image, index) => {
          let active = 0;
          if (index === props.imageIndex) {
            active = 1;
          }
          return (
            <ImageSlide image={image} active={1} index={index} key={index} />
          )
        })

      }
    </React.Fragment>
  )
}

export default ImageSlides;
