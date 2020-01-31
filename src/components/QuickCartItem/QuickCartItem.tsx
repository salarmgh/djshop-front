import React from "react";
import Price from "../Price/Price";

const QuickCartItem = (props: { product: any }) => {
  return (
    <React.Fragment>
      <article className="media" style={{ marginTop: "15px" }}>
        <figure className="media-left">
          <p className="image is-128x128">
            <img src={props.product.image} />
          </p>
        </figure>
        <div className="media-content" style={{ marginRight: "15px" }}>
          <div className="content" style={{ textAlign: "right" }}>
            <p>
              <a href={props.product.url}>
                <h5 className="title is-5">گردنبند ستونی</h5>
              </a>
              <div className="field">
                <div className="control">
                  <input className="input" type="number" value={props.product.count} style={{ width: "60px", marginRight: "15px" }} />
                </div>
                <p className="subtitle">قیمت:
                  <Price price={props.product.price} /> تومان
                </p>
              </div>
            </p>
          </div>
        </div>
        <div className="media-right">
          <button className="delete"></button>
        </div>
      </article>
      <div className="is-divider"></div>
    </React.Fragment>
  )
}

export default QuickCartItem;
