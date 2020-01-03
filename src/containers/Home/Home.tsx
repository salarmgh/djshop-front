import React, { useEffect, useState } from "react";
import Carousel from "../Carousel/Carousel";

const Home = () => {
  const [images, setImages] = useState(["https://colorlib.com/preview/theme/essence/img/bg-img/bg-1.jpg"]);
  useEffect(() => {
    setImages(["https://colorlib.com/preview/theme/essence/img/bg-img/bg-1.jpg", "https://colorlib.com/preview/theme/essence/img/bg-img/bg-1.jpg", "https://colorlib.com/preview/theme/essence/img/bg-img/bg-1.jpg"]);
  }, [])
  return (
    <section>
      <Carousel images={images} />
    </section>
  )
};

export default Home;
