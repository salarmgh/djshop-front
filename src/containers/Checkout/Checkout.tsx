import React from "react";
import Page from "../Layouts/Page";
import Price from "../../components/Price/Price";
import "bulma-divider";
import styles from "./Checkout.module.scss";
import "bulma-steps/dist/css/bulma-steps.min.css";

const Checkout = () => {
  return (
    <Page>
      <div style={{ direction: "rtl" }} className="container">
        <div className="columns">
          <div className="column">
            <div className="card">
              <div className="card-header">
                <div className="is-right card-header-title">
                  لیست خرید
                </div>
              </div>
              <div className="card-content">
                <div className="columns">
                  <div className="column is-one-third">
                    <figure className="image is-128x128">
                      <img src="http://localhost:8080/media/images/products/64419417_356003048445514_5746755503251399916_n.jpg" />
                    </figure>
                  </div>
                  <div className="column is-one-third">
                    <a href="#"><h4 className="title is-4">گردنبند ستونی نقره</h4></a>
                    <table className="table is-fullwidth">
                      <tr>
                        <th>
                          <p className="has-text-centered">
                            جنسیت
                          </p>
                        </th>
                        <td>
                          <p className="has-text-centered">
                            -
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <th>
                          <p className="has-text-centered">
                            جنس
                          </p>
                        </th>
                        <td>
                          <p className="has-text-centered">
                            نقره
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <th>
                          <p className="has-text-centered">
                            وزن
                          </p>
                        </th>
                        <td>
                          <p className="has-text-centered">
                            120.7 گرم
                          </p>
                        </td>
                      </tr>
                    </table>
                  </div>
                  <div className="column is-one-third">
                    <div className="field">
                      <label className="label">تعداد</label>
                      <input className="input" type="number" value={1} style={{ width: "60px" }} />

                    </div>
                    <h3 className="subtitle is-5">
                      <p>
                        قیمت: <Price price={100000} />
                        <span className="subtitle is-6">
                          تومان
                        </span>
                      </p>
                    </h3>

                  </div>

                </div>
                <div className="is-divider"></div>
                <div className="columns">
                  <div className="column is-one-third">
                    <figure className="image is-128x128">
                      <img src="http://localhost:8080/media/images/products/64419417_356003048445514_5746755503251399916_n.jpg" />
                    </figure>
                  </div>
                  <div className="column is-one-third">
                    <a href="#"><h4 className="title is-4">گردنبند ستونی نقره</h4></a>
                    <table className="table is-fullwidth">
                      <tr>
                        <th>
                          <p className="has-text-centered">
                            جنسیت
                          </p>
                        </th>
                        <td>
                          <p className="has-text-centered">
                            -
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <th>
                          <p className="has-text-centered">
                            جنس
                          </p>
                        </th>
                        <td>
                          <p className="has-text-centered">
                            نقره
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <th>
                          <p className="has-text-centered">
                            وزن
                          </p>
                        </th>
                        <td>
                          <p className="has-text-centered">
                            120.7 گرم
                          </p>
                        </td>
                      </tr>
                    </table>
                  </div>
                  <div className="column is-one-third">
                    <div className="field">
                      <label className="label">تعداد</label>
                      <input className="input" type="number" value={1} style={{ width: "60px" }} />

                    </div>
                    <h3 className="subtitle is-5">
                      <p>
                        قیمت: <Price price={100000} />
                        <span className="subtitle is-6">
                          تومان
                        </span>
                      </p>
                    </h3>

                  </div>

                </div>

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

                <button className="button is-fullwidth is-dark">ادامه فرایند</button>
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
            <div className="step-item">
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

export default Checkout;
