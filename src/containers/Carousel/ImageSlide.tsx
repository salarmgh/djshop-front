import React from 'react';

const ImageSlide = (props: { image: any }) => {
  return (
    <img alt="" src={props.image.url} style={{ width: "100%" }} />
  )
}
export default ImageSlide;
