import React from 'react';

const ImageSlide = (props: { image: any }) => {
  return (
    <img alt="" src={props.image.image} style={{ width: "100%" }} />
  )
}
export default ImageSlide;
