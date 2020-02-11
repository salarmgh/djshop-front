import React, { useEffect, useState } from "react";
import Page from "../Layouts/Page";
import "bulma-divider";
import "bulma-steps/dist/css/bulma-steps.min.css";
import CheckoutItems from "../CheckoutItems/CheckoutItems";
import Cookies from 'universal-cookie';
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import ProductCart from "../../components/ProductCart/ProductCart";
import CheckoutProcess from "../../components/CheckoutProcess/CheckoutProcess";


const Checkout = () => {
  const backendUrl = process.env.REACT_APP_BACKEND_BASE_URL;
  const [cart, setCart] = useState({ products: {} });
  const [products, setProducts] = useState([{ id: 1, title: "title", url: "/", images: ["http://localhost"], count: 1, product: { title: "" }, attributes: [{ name: "", value: "" }], price: 0 }]);

  const totalPrice = useSelector(state => state.CheckoutPrice);
  const dispatch = useDispatch();

  const submit = () => {
    const allProducts = { products: {} };
    products.forEach((product) => {
      allProducts["products"][product.id] = product.count;
    })
    const cookies = new Cookies();
    cookies.set("cart", JSON.stringify(allProducts), { path: '/' });
  }

  useEffect(() => {
    const cookies = new Cookies();

    if (cookies.get("cart") !== undefined) {
      setCart(cookies.get("cart"));
    }
  }, []);

  useEffect(() => {
    const ids = Object.keys(cart["products"]).join();
    if (ids !== "") {
      axios.get(`${backendUrl}/variants-by-id/${ids}/`).then(({ data }) => {
        const cartProducts = [...data.results];
        cartProducts.forEach((product) => {
          product.count = cart["products"][product.id];
          console.log(product.count);
          dispatch({ type: "CHANGE_TOTAL_PRICE", data: (product.price * product.count) })
        })
        setProducts(cartProducts);
      })
    }
  }, [cart])

  return (
    <Page>
      <div style={{ direction: "rtl", marginTop: "50px" }} className="container">
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
            <ProductCart submit={submit} nextUrl={"/address-checkout/"} totalPrice={totalPrice} />
          </div>
        </div>
        <CheckoutProcess step={0} />
      </div>
    </Page >
  )
}

export default Checkout;
