import React from "react";
import ReactDOM from "react-dom";
import "bulma";
import "./index.css";
import Router from "./containers/Router/Router";
import * as serviceWorker from "./serviceWorker";
import "shabnam-font/dist/font-face.css";
import Reducers from './reducers';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from "redux-thunk";


const store = createStore(Reducers, applyMiddleware(thunk));

ReactDOM.render(<Provider store={store}><Router /></Provider>, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
