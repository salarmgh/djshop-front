import React, { useState } from "react";
import "bulma";
import styles from "./Navbar.module.scss";
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
  const burgerHandler = () => {
    setBurgerState(!burgerState);
  };

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
        <div className="navbar-start">
          {props.links.map(link => {
            return (
              <a
                className={`navbar-item has-text-weight-bold${
                  burgerState ? " has-text-centered" : ""
                  }`}
                href={link.url}
              >
                {link.name}
              </a>
            );
          })}
        </div>

        <div className="nazvbar-end">
          <a
            href="/"
            className={
              styles.signup + " is-size-5 navbar-item has-text-weight-bold"
            }
          >
            Sign up
          </a>
          <a
            href="/"
            className={
              styles.signin + " is-size-5 navbar-item has-text-weight-bold"
            }
          >
            <p className={styles.centered}>Log in</p>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
