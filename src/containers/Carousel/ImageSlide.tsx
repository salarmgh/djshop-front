import React from 'react';

const ImageSlide = (props: { image: string, active: number, index: number }) => {
  return (

    <img style={{ position: "absolute" }} alt="" src={props.image} />

  )
}
export default ImageSlide;
