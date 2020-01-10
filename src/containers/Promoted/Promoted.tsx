import React from "react";
import Card from "../Card/Card";
import styles from "./Promoted.module.scss";

const Promoted = (props: { products: any }) => {
  return (
    <section className={`container ${styles.promoted}`}>
      <div className="columns">
        {
          props.products.map((product, index) => {
            return (
              <div className="column">
                <Card>
                  <div className="card-image">
                    <figure className="image is-1by1">
                      <img src={product.image} alt="Placeholder image" />
                    </figure>
                  </div>

                  <div className="card-content">
                    <a href={product.url}>
                      <div className="media">
                        <div className="media-content">
                          <p className="title is-4">{product.title}</p>
                        </div>
                      </div>
                    </a>
                    <div className="content">
                      {product.content}
                    </div>
                  </div>
                </Card>
              </div>
            )
          })
        }
      </div>
    </section >
  )
}

export default Promoted;
