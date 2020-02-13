import React, { useEffect, useState } from "react";
import Page from "../Layouts/Page";
import Price from "../../components/Price/Price";
import "bulma-divider";
import styles from "./ShippingMethod.module.scss";
import "bulma-steps/dist/css/bulma-steps.min.css";
import "bulma-checkradio";
import CheckoutProcess from "../../components/CheckoutProcess/CheckoutProcess";
import ProductCart from "../../components/ProductCart/ProductCart";
import { useDispatch, useSelector } from "react-redux";
import Cookies from 'universal-cookie';
import axios from "axios";
import ShippingList from "../ShippingList/ShippingList";

const ShippingMethod = () => {
  const backendUrl = process.env.REACT_APP_BACKEND_BASE_URL;
  const [currentShippingMethod, setCurrentShippingMethod] = useState(1)
  const totalPrice = useSelector(state => state.CheckoutPrice);
  const [cart, setCart] = useState({ products: {} });
  const [shippingMethod, setShippingMethod] = useState([{ id: 1, method: "پست" }, { id: 2, method: "پیشتاز" }]);
  const [products, setProducts] = useState([{ id: 1, title: "title", url: "/", images: ["http://localhost"], count: 1, product: { title: "" }, attributes: [{ name: "", value: "" }], price: 0 }]);

  const dispatch = useDispatch();

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
          dispatch({ type: "CHANGE_TOTAL_PRICE", data: (product.price * product.count) })
        })
        setProducts(cartProducts);
      })
    }
  }, [cart])


  const submit = () => {
    const productsShipping = { ...cart };
    productsShipping["shippingMethod"] = currentShippingMethod;
    const cookies = new Cookies();
    cookies.set("cart", JSON.stringify(productsShipping), { path: '/' });
    axios.post(`${backendUrl}/create-order/`, { products: productsShipping }, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: "Bearer " + localStorage.getItem('auth-token')
      }
    })
      .then((resp) => {
        console.log(resp);
      })
  }


  return (
    <Page>
      <div style={{ direction: "rtl", marginTop: "50px" }} className="container">
        <div className="columns">
          <div className="column">
            <ShippingList setCurrentShippingMethod={setCurrentShippingMethod} shippingMethods={shippingMethod} />
          </div>
          <div className="column is-one-quarter">
            <ProductCart submit={submit} nextUrl={"#"} totalPrice={totalPrice} />
          </div>
        </div>
        <CheckoutProcess step={2} />
      </div>
    </Page >
  )
}

export default ShippingMethod;
