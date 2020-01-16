import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "../Home/Home";
import Product from "../Product/Product";
import Category from "../Category/Category";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/product/:slug/">
          <Product />
        </Route>
        <Route path="/category/:category">
          <Category />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}
