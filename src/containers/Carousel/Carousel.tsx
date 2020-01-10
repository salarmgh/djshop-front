import React, { useState, useEffect } from 'react';
import ImageSlides from './ImageSlides';
import Arrows from "./Arrows";
import Dots from "./Dots";
import "./test.css";

const Carousel = (props: { images: any }) => {

  const [index, setIndex] = useState(0);
  const [images, setImages] = useState([{ image: "", display: true }]);

  useEffect(() => {
    let imagesProp: any = [];
    props.images.map((image, index) => {
      const currentImage = { ...image };
      if (index === 1) {
        currentImage["display"] = true;
      } else {
        currentImage["display"] = false;
      }
      imagesProp.push(currentImage);
    });
    setImages(imagesProp);
  }, [props.images]);


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
      currentImages[currentIndex].display = false;
      currentImages[newIndex].display = true;
      setIndex(newIndex);
      setImages(currentImages);
    }
  }

  return (
    <section>
      <ImageSlides images={images} handler={changeSlide} />
      <Dots images={images} handler={currentSlide} active={index} />
    </section>
  )
}

export default Carousel;
