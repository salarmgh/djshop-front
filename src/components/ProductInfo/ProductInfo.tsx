import React from "react";
import ProductAttributes from "../../containers/ProductAttributes/ProductAttributes";
import "@fortawesome/fontawesome-free";
//import styles from "./ProductInfo.module.scss";

const ProductInfo = (props: {
  product: {
    id: number;
    images: {
      id: number;
      image: string;
      title: string;
    }[];
    name: string;
    product: {
      id: number;
      title: string;
      description: string;
      created_at: string;
      featured: boolean;
      slug: string;
    };
    price: number;
    attributes: {
      name: string;
      value: string;
    }[];
  };
}) => {
  return (
    <React.Fragment>
      <h1 className="title is-3">
        {props.product.product.title} {props.product.name}
      </h1>
      <div className="is-divider"></div>
      <p>{props.product.product.description}</p>
      <ProductAttributes attributes={props.product.attributes} />
    </React.Fragment>
  );
};

export default ProductInfo;
