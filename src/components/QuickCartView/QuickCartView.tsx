import React, { useState, useEffect } from "react";
import QuickCartItems from "../../containers/QuickCartItems/QuickCartItems";
import bulmaQuickview from "bulma-quickview/dist/js/bulma-quickview.min.js";
import "bulma-quickview/dist/css/bulma-quickview.min.css";
import Cookies from 'universal-cookie';
import axios from "axios";

const QuickCartView = () => {
  const backendUrl = process.env.REACT_APP_BACKEND_BASE_URL;
  const [cart, setCart] = useState({ products: {} });
  const [products, setProducts] = useState([{ title: "title", url: "/", images: ["http://localhost"], count: 1, product: { title: "" } }]);
  useEffect(() => {
    const cookies = new Cookies();

    if (cookies.get("cart") !== undefined) {
      setCart(cookies.get("cart"));
    }
  }, []);

  useEffect(() => {
    const ids = Object.keys(cart.products).join();
    if (ids !== "") {
      axios.get(`${backendUrl}/variants-by-id/${ids}/`).then(({ data }) => {
        const cartProducts = [...data.results];
        cartProducts.forEach((product) => {
          product.count = cart[product.id];
        })
        setProducts(cartProducts);
      })
    }
  }, [cart])
  const quickviews = bulmaQuickview.attach();

  return (
    <React.Fragment>
      <div id="quickviewDefault" className="quickview" style={{ color: "black" }}>
        <header className="quickview-header">
          <p className="title">سبد خرید</p>
          <span className="delete" data-dismiss="quickview"></span>
        </header>

        <div className="quickview-body">
          <div className="quickview-block">
            <QuickCartItems products={products} />
          </div>
        </div>

        <footer className="quickview-footer">
          <p>قیمت کل: ۱۲۵۰۰۰</p>
          <a href="/checkout/" style={{ width: "150px" }} className="button is-dark">خرید</a>
        </footer>
      </div>

      <button className="button is-dark" data-show="quickview" data-target="quickviewDefault"><i className="fas fa-shopping-cart"></i></button>
    </React.Fragment>
  )
}

export default QuickCartView;
