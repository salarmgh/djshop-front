import React from "react";
import Card from "../Card/Card";
import AddProductToCart from "../../components/AddProductToCart/AddProductToCart";
import Price from "../../components/Price/Price";
import Counter from "../../components/Counter/Counter";
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
        <div className="columns">
          <div className="column">
            <div style={{ marginBottom: "15px" }}><h3 className="title is-5">تعداد:</h3></div>
          </div>
          <div className="column">
            <Counter
              count={props.count}
              setCount={props.setCount}
              variant={props.variant}
              setVariant={props.setVariant}
              basePrice={props.basePrice}
            />
          </div>
        </div>
        <div className="is-divider"></div>
        <h3 className="subtitle is-2">
          <p>
            قیمت: <Price price={props.price} />
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
