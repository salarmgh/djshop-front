import React, { useState, useEffect } from "react";
import Card from "../Card/Card";
import AddProductToCart from "../../components/AddProductToCart/AddProductToCart";
import Price from "../../components/Price/Price";
import styles from "./PriceContainer.module.scss";
import "@fortawesome/fontawesome-free";
import "bulma-divider";

const PriceContainer = (props: {
  price: number;
  variant: any;
  setVariant: (state: any) => void;
  count: number;
  setCount: (state: number) => void;
  basePrice: number;
}) => {
  const [productPrice, setProductPrice] = useState(0);
  useEffect(() => {
    setProductPrice(props.variant.price);
  }, [props.variant.price])
  return (
    <Card>
      <div className="container">
        <p className={`${styles.info}`}><i className="fas fa-certificate"></i> گارانتی اصالت و سلامت فیزیکی کالا</p>
        <p className={`${styles.info}`}><i className="fas fa-undo"></i> ۷ روز گارانتی بازگشت وجه</p>
        <p className={`${styles.info}`}><i className="fas fa-clock"></i> ارسال ۲۴ ساعته</p>
        <p className={`${styles.info}`}><i className="fas fa-map-marker-alt"></i> امکان پرداخت در محل </p>
      </div>
      <div className="is-divider"></div>
      <div className={`container`}>
        <div className="field">
          <label className="label">تعداد</label>
          <div className="control">
            <input onChange={event => {
              if (parseInt(event.target.value) >= 1) {
                props.setCount(parseInt(event.target.value));
                const price = parseInt(event.target.value) * props.variant.price;
                setProductPrice(price);
              }
            }} className="input" type="number" value={props.count} style={{ width: "60px" }} />
          </div>
          <h3 className="subtitle is-6">قیمت پایه:
            <Price price={props.variant.price} /> تومان
          </h3>

        </div>

        <div className="is-divider"></div>
        <h3 className="subtitle is-2">
          <p>
            قیمت: <Price price={productPrice} />
            <span className="subtitle is-6">
              تومان
              </span>
          </p>
        </h3>
        <AddProductToCart
          title="افزودن به سبد خرید"
        />
      </div>

    </Card >
  );
};

export default PriceContainer;
