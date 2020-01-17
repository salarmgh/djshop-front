import React from "react";
import ProductAttributes from "../../containers/ProductAttributes/ProductAttributes";
import "@fortawesome/fontawesome-free";
//import styles from "./ProductInfo.module.scss";

const ProductInfo = (props: { product: any }) => {

  return (
    <React.Fragment>
      <h1 className="title is-3">
        {props.product.product.title} {props.product.name}
      </h1>
      <p>شناسه محصول: {props.product.id}</p>
      <div className="is-divider"></div>
      <h4 className="subtitle is-5">{props.product.product.description}</h4>
      <ProductAttributes attributes={props.product.attributes} />
      <div className="columns">
        <div className="column is-one-third">
          <h4 className="subtitle is-4">اندازه:</h4>
        </div>
        <div className="column">
          <div className="field">
            <div className="control">
              <div className="select is-fullwidth">
                <select className="has-text-centered">
                  {props.product.size.map((item) => {
                    return (
                      <option>{item.value}</option>
                    )
                  })}
                </select>
              </div>
            </div>
          </div>
        </div>
      </div >
    </React.Fragment >
  );
};

export default ProductInfo;
