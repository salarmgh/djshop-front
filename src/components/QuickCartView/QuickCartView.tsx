import React, { useState } from "react";
import QuickCartItems from "../../containers/QuickCartItems/QuickCartItems";
import bulmaQuickview from "bulma-quickview/dist/js/bulma-quickview.min.js";
import "bulma-quickview/dist/css/bulma-quickview.min.css";

const QuickCartView = () => {
  const quickviews = bulmaQuickview.attach();
  const [products, setProducts] = useState([{ title: "ینوتس دنبندرگ", url: "/", image: "https://bulma.io/images/placeholders/128x128.png", count: 1, price: 100000 }, { title: "گردنبند ستونی", url: "/", image: "https://bulma.io/images/placeholders/128x128.png", count: 1, price: 100000 }]);
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
