import React, { useState, useEffect } from "react";
import "bulma";
import styles from "./Navbar.module.scss";
import axios from "axios";
import "./Navbar.css";

interface NavbarProps {
  brand: {
    url: string;
    image: string;
  };
  links: { name: string; url: string }[];
}

const Navbar: React.SFC<NavbarProps> = props => {
  const [burgerState, setBurgerState] = useState(false);
  const [categoriesState, setCategoriesState] = useState([{ name: "" }]);

  const burgerHandler = () => {
    setBurgerState(!burgerState);
  };

  useEffect(() => {
    axios
      .get("http://localhost:8080/categories/")
      .then(({ data }) => {
        setCategoriesState(data.results);
      })
      .catch(err => { });
  }, []);

  return (
    <nav
      className="navbar is-dark"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="navbar-brand">
        <a className="navbar-item" href={props.brand.url}>
          <figure className="image is-64x64">
            <img
              className="is-rounded"
              style={{ minHeight: "100%" }}
              src={props.brand.image}
            />
          </figure>
        </a>
        <a
          role="button"
          className={`navbar-burger burger${burgerState ? " is-active" : ""}`}
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
          onClick={burgerHandler}
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div className={`navbar-menu${burgerState ? " is-active" : ""}`}>
        <div className="navbar-start navbar-rtl">
          {categoriesState.map(link => {
            return (
              <a
                className={`navbar-item has-text-weight-bold${
                  burgerState ? " has-text-centered" : ""
                  }`}
                href={`/category/${link.name}/`}
              >
                {link.name}
              </a>
            );
          })}
        </div>

        <div className="navbar-end">
          <a
            href="/"
            className={
              styles.signup +
              " is-size-5 navbar-item has-text-weight-bold has-text-centered"
            }
          >
            <p className={styles.centered}>ثبت نام</p>
          </a>
          <a
            href="/"
            className={
              styles.signin +
              " is-size-5 navbar-item has-text-weight-bold has-text-centered"
            }
          >
            <p className={styles.centered}>ورود به حساب کاربری</p>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
