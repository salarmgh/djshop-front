import React from 'react';

const ImageSlide = (props: { image: string, active: number, index: number }) => {
  return (
    <figure className="image" style={{ position: "absolute", opacity: 0 }} key={props.index} >
      <img alt="" src={props.image} />
    </figure>
  )
}
export default ImageSlide;
