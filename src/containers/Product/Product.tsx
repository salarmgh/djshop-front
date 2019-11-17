import React, { useState } from "react";
import Page from "../Layouts/Page";
import ProductImage from "../ProductImage/ProductImage";

const Product = () => {
  const [imageIndex, setImageIndex] = useState(0);
  const images: string[] = [
    "http://localhost/images/prod/first.jpg",
    "http://localhost/images/prod/second.jpg",
    "http://localhost/images/prod/second.jpg",
    "http://localhost/images/prod/second.jpg",
    "http://localhost/images/prod/second.jpg",
    "http://localhost/images/prod/second.jpg",
    "http://localhost/images/prod/second.jpg",
    "http://localhost/images/prod/second.jpg",
    "http://localhost/images/prod/second.jpg",
    "http://localhost/images/prod/second.jpg",
    "http://localhost/images/prod/second.jpg",
    "http://localhost/images/prod/second.jpg",
    "http://localhost/images/prod/second.jpg"
  ];

  const imageClickHandler = (
    event: React.MouseEvent<HTMLImageElement, MouseEvent>
  ) => {
    let element = event.target as HTMLImageElement;
    const value: number = +element.dataset["index"]!;
    setImageIndex(value);
  };
  return (
    <Page>
      <div className="hero is-fullheight">
        <div className="columns">
          <div className="column">
            <ProductImage
              images={images}
              size="square"
              index={imageIndex}
              clickHandler={imageClickHandler}
            />
          </div>
          <div className="column"></div>
        </div>
      </div>
    </Page>
  );
};

export default Product;
