import React from "react";
import Price from "../Price/Price";

const CategoryProduct = (props: { product: { image: string, title: string, price: number, slug: string } }) => {
  return (
    <a href={`/product/${props.product.slug}`}>
      <div className="card">
        <div className="card-image">
          <figure className="image is-square">
            <img src={props.product.image} alt="Placeholder" />
          </figure>
        </div>
        <div className="card-content">
          <h5 className="has-text-centered title is-5">
            {props.product.title}
          </h5>
        </div>
        <div className="card-footer">
          <div className="card-footer-item">
            <Price price={props.product.price} /> تومان
            </div>
        </div>
      </div>
    </a >
  );
}

export default CategoryProduct;
