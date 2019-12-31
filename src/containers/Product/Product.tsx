import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Page from "../Layouts/Page";
import ProductImage from "../ProductImage/ProductImage";
import ProductContainer from "../ProductContainer/ProductContainer";
import axios from "axios";

const Product = () => {
  const backendUrl = process.env.REACT_APP_BACKEND_BASE_URL;
  const [imageIndex, setImageIndex] = useState(0);
  const [basePrice, setBasePrice] = useState(0);
  const [count, setCount] = useState(1);
  const [variant, setVariant] = useState({
    id: 0,
    images: [
      {
        id: 0,
        image: "http://localhost/images/placeholders/500x500.png",
        title: "placeholder"
      }
    ],
    name: "variant",
    product: {
      id: 0,
      title: "product",
      description: "product",
      created_at: "2019-11-17T19:10:25",
      featured: false,
      slug: "product"
    },
    price: 0,
    attributes: [
      {
        name: "name",
        value: "value"
      }
    ]
  });
let { pc } = useParams();

useEffect(() => {
    axios.get(`${backendUrl}/variants/${pc}/`).then(({ data }) => {
      setVariant(data);
      setBasePrice(data.price);
    });
  }, [backendUrl, pc]);

  const imageClickHandler = (
    event: React.MouseEvent<HTMLImageElement, MouseEvent>
  ) => {
    let element = event.target as HTMLImageElement;
    const value: number = +element.dataset["index"]!;
    setImageIndex(value);
  };

  let images: string[] = [];
  variant.images.forEach(image => {
    images.push(image.image);
  });

  return (
    <Page>
      <div className="container is-fluid">
        <div className="columns">
          <div className="column is-two-fifths">
            <ProductImage
              images={images}
              size="square"
              index={imageIndex}
              clickHandler={imageClickHandler}
            />
          </div>
          <div className="column">
            <ProductContainer
              variant={variant}
              setVariant={setVariant}
              count={count}
              setCount={setCount}
              basePrice={basePrice}
            />
          </div>
        </div>
      </div>
    </Page>
  );
};

export default Product;
