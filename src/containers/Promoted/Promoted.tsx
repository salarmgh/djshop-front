import React from "react";
import Card from "../Card/Card";
import styles from "./Promoted.module.scss";
import Price from "../../components/Price/Price";

const Promoted = (props: { products: any }) => {
  return (
    <section className={`container ${styles.promoted}`}>
      <div className="columns">
        {
          props.products.map((product, index) => {
            return (
              <div className="column is-one-quarter">
                <a href={`/product/${product.slug}`}>
                  <div className="card">
                    <div className="card-image">
                      <figure className="image is-square">
                        <img src={product.image.image} alt="Placeholder image" />
                      </figure>
                    </div>
                    <div className="card-content">
                      <h5 className="title is-5 has-text-centered">
                        {product.name}
                      </h5>
                    </div>
                    <div className="card-footer">
                      <div className="card-footer-item">
                        <Price price={product.price} /> تومان
                    </div>
                    </div>

                  </div>
                </a>
              </div>
            )
          })
        }
      </div>
    </section >
  )
}

export default Promoted;
