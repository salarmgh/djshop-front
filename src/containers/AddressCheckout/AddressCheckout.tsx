import React from "react";
import Page from "../Layouts/Page";
import Price from "../../components/Price/Price";
import "bulma-divider";
import styles from "./AddressCheckout.module.scss";
import "bulma-steps/dist/css/bulma-steps.min.css";
import "bulma-checkradio";

const AddressCheckout = () => {
  return (
    <Page>
      <div style={{ direction: "rtl" }} className="container">
        <div className="columns">
          <div className="column">
            <div className="card">
              <div className="card-header">
                <div className="is-right card-header-title">
                  آدرس ها
                </div>
              </div>
              <div className="card-content">
                <input className="is-checkradio is-rtl" type="radio" name="address" id="input1" />
                <label htmlFor="input1">ایران - تهران - فلان</label>
                <div className="is-divider"></div>
                <input className="is-checkradio is-rtl" type="radio" name="address" id="input2" />
                <label htmlFor="input2">ایران - تهران - فلان</label>
                <div className="is-divider"></div>
                <input className="is-checkradio is-rtl" type="radio" name="address" id="input3" />
                <label htmlFor="input3">ایران - تهران - فلان</label>
              </div>
            </div>

          </div>
          <div className="column is-one-quarter">
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
                    قیمت: <Price price={200000} />
                    <span className="subtitle is-6">
                      تومان
                    </span>
                  </p>
                </h3>

                <a href="/shipping-method/" className="button is-fullwidth is-dark">ادامه فرایند</a>
              </div>
            </div>
          </div>
        </div>
        <div className="container" style={{ marginTop: "50px" }}>
          <div className="steps is-medium" style={{ direction: "ltr" }}>
            <div className="step-item is-active">
              <div className="step-marker">
                <span className="icon">
                  <i className="fa fa-shopping-cart"></i>
                </span>
              </div>
              <div className="step-details">
                <p className="step-title">سبد خرید</p>
              </div>
            </div>
            <div className="step-item is-active">
              <div className="step-marker">
                <span className="icon">
                  <i className="fa fa-map-marker-alt"></i>
                </span>
              </div>
              <div className="step-details">
                <p className="step-title">انتخاب آدرس</p>
              </div>
            </div>
            <div className="step-item">
              <div className="step-marker">
                <span className="icon">
                  <i className="fa fa-shipping-fast"></i>
                </span>
              </div>
              <div className="step-details">
                <p className="step-title">نحوه ارسال</p>
              </div>
            </div>
            <div className="step-item">
              <div className="step-marker">
                <span className="icon">
                  <i className="fa fa-money-bill-wave"></i>
                </span>
              </div>
              <div className="step-details">
                <p className="step-title">پرداخت</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Page >
  )
}

export default AddressCheckout;
