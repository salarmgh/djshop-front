import React from "react";
import ImageSlide from "./ImageSlide";
import Arrows from "./Arrows";

const ImageSlides = (props: { images: any, handler: any }) => {
  return (
    <div className="slideshow-container">
      {
        props.images.map((image, index) => {
          return (
            <React.Fragment>
              <div className="slides fade" style={{ display: image.display ? "block" : "none" }}>
                <ImageSlide image={image} />
                <div className="text">{image.title}</div>
              </div>
            </React.Fragment>
          )
        })
      }
      <Arrows handler={props.handler} />
    </div >
  )
}

export default ImageSlides;
