import React from "react";
import "bulma";
import styles from "./Navbar.module.scss";
import { useSelector, useDispatch } from "react-redux";
import { isTokenValid } from "../../utilites/jwt";
import "bulma-quickview/dist/css/bulma-quickview.min.css";
import bulmaQuickview from "bulma-quickview/dist/js/bulma-quickview.min.js";



const Buttons = (props: { burgerState: boolean }) => {
  const dispatch = useDispatch();
  dispatch(isTokenValid());
  const loginStatus = useSelector(state => state);
  const quickviews = bulmaQuickview.attach();
  return (
    <div className={`navbar-start`}>
      <div className="columns is-vcentered">

        {loginStatus ?
          <React.Fragment>
            <div className="column">
              <div id="quickviewDefault" className="quickview">
                <header className="quickview-header">
                  <p className="title">سبد خرید</p>
                  <span className="delete" data-dismiss="quickview"></span>
                </header>

                <div className="quickview-body">
                  <div className="quickview-block">
                    ...
                  </div>
                </div>

                <footer className="quickview-footer">
                  <p style={{ color: "black" }}>قیمت کل: ۱۲۵۰۰۰</p>
                  <button style={{ width: "150px" }} className="button is-dark">خرید</button>
                </footer>
              </div>

              <button className="button is-dark" data-show="quickview" data-target="quickviewDefault"><i className="fas fa-shopping-cart"></i></button>
            </div>
            <div className="column">
              <a
                href="/profile/"
                className={
                  "button is-dark navbar-item has-text-weight-bold has-text-centered"
                }
                style={{ marginLeft: "15px" }}
              >
                <i className="fas fa-user"></i>
              </a>
            </div>
          </React.Fragment>
          :
          <div className="column">
            <a
              href="/login/"
              className={
                "button is-dark navbar-item has-text-weight-bold has-text-centered"
              }
              style={props.burgerState ? { width: "100%" } : {}}
            >
              ورود به حساب کاربری
            </a>
          </div>
        }

      </div>
    </div >
  );
};

export default Buttons;
