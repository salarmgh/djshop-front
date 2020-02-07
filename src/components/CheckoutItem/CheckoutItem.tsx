import React, { useState, useEffect } from "react";
import ProductAttributes from "../../containers/ProductAttributes/ProductAttributes";
import Price from "../Price/Price";
import { useDispatch } from "react-redux";


const CheckoutItem = (props: { setProducts: any, products: any, product: any }) => {
  const [count, setCount] = useState(props.product.count);
  const [productPrice, setProductPrice] = useState(0);
  const dispatch = useDispatch();
  useEffect(() => {
    setProductPrice(props.product.price * count);
  }, [props.product.price])
  return (
    <React.Fragment>
      <div className="columns">
        <div className="column is-one-third">
          <figure className="image is-128x128">
            <img src={`${props.product.images[0].image}`} />
          </figure>
        </div>
        <div className="column is-one-third">
          <a href="#"><h4 className="title is-4">{props.product.product.title + " " + props.product.name}</h4></a>
          <ProductAttributes attributes={props.product.attributes} />
        </div>
        <div className="column is-one-third">
          <div className="field">
            <label className="label">تعداد</label>
            <input onChange={event => {
              if (parseInt(event.target.value) >= 1) {
                setCount(parseInt(event.target.value));
                const inlineProducts = [...props.products];
                inlineProducts.forEach((product) => {
                  if (product.id == props.product.id) {
                    product.count = parseInt(event.target.value);
                  }
                });
                props.setProducts(inlineProducts);
                const price = parseInt(event.target.value) * props.product.price;
                setProductPrice(price);
                if (price > productPrice) {
                  dispatch({ type: "INCREASE_TOTAL_PRICE", data: (props.product.price) })
                } else {
                  dispatch({ type: "DECREASE_TOTAL_PRICE", data: (props.product.price) })
                }
              }
            }} className="input" type="number" value={count} style={{ width: "60px" }} />

          </div>
          <h3 className="subtitle is-5">
            <p>
              قیمت: <Price price={productPrice} />
              <span className="subtitle is-6">
                تومان
                        </span>
            </p>
          </h3>

        </div>

      </div>
      <div className="is-divider"></div>
    </React.Fragment>
  )
}

export default CheckoutItem;
