import React, { useState } from 'react';
import ImageSlides from './ImageSlides';


const Carousel = (props: { images: string[] }) => {
  const [imageIndex, setImageIndex] = useState(0);

  const next = () => {
    if (imageIndex === props.images.length - 1) {
      console.log("MATCHED")
      setImageIndex(0);
    } else {
      setImageIndex(imageIndex + 1);
    }
    console.log(imageIndex);
  }

  const prev = () => {
    if (imageIndex === 0) {
      setImageIndex(props.images.length);
    } else {
      setImageIndex(imageIndex - 1);
    }
    console.log(imageIndex);
  }

  return (
    <section>
      <div className="carousel">
        <ImageSlides images={props.images} imageIndex={imageIndex} />
      </div>
      <button onClick={next}>Next</button>
      <button onClick={prev}>Prev</button>

    </section>
  )
}

export default Carousel;
