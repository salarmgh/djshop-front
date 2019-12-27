import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "../Home/Home";
import Product from "../Product/Product";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/product/:pc">
          <Product />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}
