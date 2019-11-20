import React, { useState, useEffect } from "react";
import Page from "../Layouts/Page";
import ProductImage from "../ProductImage/ProductImage";
import ProductInfo from "../../components/ProductInfo/ProductInfo";
import AddProductToCart from "../../components/AddProductToCart/AddProductToCart";
import Card from "../Card/Card";
import axios from "axios";

const Product = () => {
  const backendUrl = process.env.REACT_APP_BACKEND_BASE_URL;
  const [imageIndex, setImageIndex] = useState(0);
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

  useEffect(() => {
    axios.get(`${backendUrl}/variants/1/`).then(({ data }) => {
      setVariant(data);
    });
  }, [backendUrl]);

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
      <div className="hero is-fullheight">
        <div className="columns">
          <div className="column">
            <Card>
              <ProductImage
                images={images}
                size="square"
                index={imageIndex}
                clickHandler={imageClickHandler}
              />
            </Card>
          </div>
          <div className="column">
            <Card>
              <ProductInfo product={variant} />
              <AddProductToCart
                color="light"
                size="100%"
                title="افزودن به سبد خرید"
              />
            </Card>
          </div>
        </div>
      </div>
    </Page>
  );
};

export default Product;
