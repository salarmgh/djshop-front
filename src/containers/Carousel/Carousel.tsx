import React, { useState } from 'react';
import ImageSlides from './ImageSlides';
import Arrows from "./Arrows";
import Dots from "./Dots";
import "./test.css";

const Carousel = (props: { images: string[] }) => {

  const [index, setIndex] = useState(0);
  const [images, setImages] = useState([{ url: "https://colorlib.com/preview/theme/essence/img/bg-img/bg-1.jpg", display: true }, { url: "https://colorlib.com/preview/theme/essence/img/bg-img/bg-1.jpg", display: false }, { url: "https://colorlib.com/preview/theme/essence/img/bg-img/bg-1.jpg", display: false }]);

  const currentSlide = (n: number) => {
    return (event: React.MouseEvent) => {
      const currentImages = [...images];
      const currentIndex = index;
      currentImages[currentIndex].display = false;
      currentImages[n].display = true;
      setIndex(n);
      setImages(currentImages);
    }
  }

  const changeSlide = (n: number) => {
    return (event: React.MouseEvent) => {
      const currentIndex = index;
      let newIndex = currentIndex + n;
      const currentImages = [...images];

      if (newIndex === -1) {
        newIndex = currentImages.length - 1;
      } else if (newIndex === currentImages.length) {
        newIndex = 0;
      }
      console.log(newIndex);
      currentImages[currentIndex].display = false;
      currentImages[newIndex].display = true;
      setIndex(newIndex);
      setImages(currentImages);
    }
  }

  return (
    <React.Fragment>
      <ImageSlides images={images} handler={changeSlide} />
      <Dots images={images} handler={currentSlide} active={index} />
    </React.Fragment >
  )
}

export default Carousel;
