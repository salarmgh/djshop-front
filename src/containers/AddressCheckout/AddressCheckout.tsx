import React, { useEffect, useState } from "react";
import Page from "../Layouts/Page";
import Price from "../../components/Price/Price";
import "bulma-divider";
import styles from "./AddressCheckout.module.scss";
import "bulma-steps/dist/css/bulma-steps.min.css";
import "bulma-checkradio";
import axios from "axios";
import AddressList from "../AddressList/AddressList";
import ProductCart from "../../components/ProductCart/ProductCart";
import CheckoutProcess from "../../components/CheckoutProcess/CheckoutProcess";
import { useDispatch, useSelector } from "react-redux";
import Cookies from 'universal-cookie';


const AddressCheckout = () => {
  const [currentAddress, setCurrentAddress] = useState(1)
  const backendUrl = process.env.REACT_APP_BACKEND_BASE_URL;
  const [addresses, setAddresses] = useState([{ id: 1, location: "", user: 1 }]);
  const totalPrice = useSelector(state => state.CheckoutPrice);
  const [cart, setCart] = useState({ products: {} });
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


  useEffect(() => {
    axios.get(`${backendUrl}/addresses/`, { headers: { Authorization: "Bearer " + localStorage.getItem('auth-token') } }).then(({ data }) => {
      setAddresses(data.results);
    });
  }, [])

  const submit = () => {
    const productsAddress = { ...cart };
    productsAddress["address"] = currentAddress;
    const cookies = new Cookies();
    cookies.set("cart", JSON.stringify(productsAddress), { path: '/' });
  }

  return (
    <Page>
      <div style={{ direction: "rtl", marginTop: "50px" }} className="container">
        <div className="columns">
          <div className="column">
            <AddressList setCurrentAddress={setCurrentAddress} addresses={addresses} />
          </div>
          <div className="column is-one-quarter">
            <ProductCart submit={submit} nextUrl={"/shipping-methods/"} totalPrice={totalPrice} />
          </div>
        </div>
        <CheckoutProcess step={1} />
      </div>
    </Page>
  )
}

export default AddressCheckout;
