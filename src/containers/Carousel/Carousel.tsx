import React, { useState } from 'react';
import ImageSlides from './ImageSlides';


const Carousel = (props: { images: string[] }) => {
  const [imageIndex, setImageIndex] = useState(0);

  const next = () => {
    if (imageIndex === props.images.length - 1) {
      setImageIndex(0);
    } else {
      setImageIndex(imageIndex + 1);
    }
  }

  const prev = () => {
    if (imageIndex === 0) {
      setImageIndex(props.images.length);
    } else {
      setImageIndex(imageIndex - 1);
    }
  }

  return (
    <section style={{ position: "relative" }}>


      <div className="carousel" style={{ position: "relative", top: 0, left: 0 }}>

        <ImageSlides images={props.images} imageIndex={imageIndex} />
        <a style={{ position: "absolute", width: "30%", height: "100%" }} onClick={prev} />
        <a style={{ position: "absolute", right: 0, width: "30%", height: "100%" }} onClick={next} />
      </div>
    </section>
  )
}

export default Carousel;
