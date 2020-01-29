import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "../Home/Home";
import Product from "../Product/Product";
import Category from "../Category/Category";
import Login from "../Login/Login";
import Profile from "../Profile/Profile";
import Checkout from "../Checkout/Checkout";
import AddressCheckout from "../AddressCheckout/AddressCheckout";
import ShippingMethod from "../ShippingMethod/ShippingMethod";


export default function App() {

  return (
    <Router>
      <Switch>
        <Route path="/product/:slug/">
          <Product />
        </Route>
        <Route path="/category/:cat/">
          <Category />
        </Route>
        <Route exact path="/login/">
          <Login />
        </Route>
        <Route exact path="/profile/">
          <Profile />
        </Route>
        <Route exact path="/checkout/">
          <Checkout />
        </Route>
        <Route exact path="/address-checkout/">
          <AddressCheckout />
        </Route>
        <Route exact path="/shipping-method/">
          <ShippingMethod />
        </Route>

        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}
