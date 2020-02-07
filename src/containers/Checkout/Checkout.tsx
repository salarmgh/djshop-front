import React, { useEffect, useState } from "react";
import Page from "../Layouts/Page";
import Price from "../../components/Price/Price";
import "bulma-divider";
import styles from "./Checkout.module.scss";
import "bulma-steps/dist/css/bulma-steps.min.css";
import CheckoutItems from "../CheckoutItems/CheckoutItems";
import Cookies from 'universal-cookie';
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";


const Checkout = () => {
  const backendUrl = process.env.REACT_APP_BACKEND_BASE_URL;
  const [cart, setCart] = useState({});
  const [products, setProducts] = useState([{ id: 1, title: "title", url: "/", images: ["http://localhost"], count: 1, product: { title: "" }, attributes: [{ name: "", value: "" }], price: 0 }]);

  const totalPrice = useSelector(state => state.CheckoutPrice);
  const dispatch = useDispatch();

  useEffect(() => {
    const cookies = new Cookies();

    if (cookies.get("cart") !== undefined) {
      setCart(cookies.get("cart"));
    }
  }, []);

  useEffect(() => {
    const ids = Object.keys(cart).join();
    if (ids !== "") {
      axios.get(`${backendUrl}/variants-by-id/${ids}/`).then(({ data }) => {
        const cartProducts = [...data.results];
        cartProducts.forEach((product) => {
          product.count = cart[product.id];
          dispatch({ type: "CHANGE_TOTAL_PRICE", data: (product.price * product.count) })
        })
        setProducts(cartProducts);
      })
    }
  }, [cart])

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
                <CheckoutItems setProducts={setProducts} products={products} />
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
                    قیمت: <Price price={totalPrice} />
                    <span className="subtitle is-6">
                      تومان
                    </span>
                  </p>
                </h3>

                <a href="/address-checkout/" onClick={() => {
                  const allProducts = {};
                  products.forEach((product) => {
                    allProducts[product.id] = product.count;
                  })
                  const cookies = new Cookies();
                  cookies.set("cart", JSON.stringify(allProducts), { path: '/' });
                }} className="button is-fullwidth is-dark">ادامه فرایند</a>
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
