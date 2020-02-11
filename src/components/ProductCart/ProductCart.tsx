import React from "react";
import styles from "./ProductCart.module.scss";
import Price from "../../components/Price/Price";

const ProductCart = (props: { totalPrice: number, submit: any, nextUrl: string }) => {
  return (
    <div className="card">
      <div className="card-content">
        <div className="container">
          <p className={`${styles.info}`}><i className="fas fa-certificate"></i> گارانتی اصالت و سلامت فیزیکی کالا</p>
          <p className={`${styles.info}`}><i className="fas fa-undo"></i> ۷ روز گارانتی بازگشت وجه</p>
          <p className={`${styles.info}`}><i className="fas fa-clock"></i> ارسال ۲۴ ساعته</p>
          <p className={`${styles.info}`}><i className="fas fa-map-marker-alt"></i> امکان پرداخت در محل </p>
        </div>
        <div className="is-divider"></div>
        <p>تعداد کالا: 2</p>
        <h3 className="subtitle is-3">
          <p>
            قیمت: <Price price={props.totalPrice} />
            <span className="subtitle is-6">
              تومان
                    </span>
          </p>
        </h3>

        <a href={props.nextUrl} onClick={props.submit} className="button is-fullwidth is-dark">ادامه فرایند</a>
      </div>
    </div>
  )
}

export default ProductCart;
