import React from "react";
import "bulma";
import styles from "./Navbar.module.scss";

const Menu = (props: {
  categories: { name: string }[];
  burgerState: boolean;
}) => {
  return (
    <div className={`navbar-menu${props.burgerState ? " is-active" : ""}`}>
      <div className="navbar-start navbar-rtl">
        {props.categories.map(link => {
          return (
            <a
              className={`navbar-item has-text-weight-bold${
                props.burgerState ? " has-text-centered" : ""
                }`}
              href={`/category/${link.name}/`}
            >
              {link.name}
            </a>
          );
        })}
      </div>

      <div className="navbar-end navbar-end-rtl">
        <a
          href="/"
          className={
            styles.signup +
            " navbar-item has-text-weight-bold has-text-centered"
          }
          style={props.burgerState ? { width: "100%" } : {}}
        >
          <p className={styles.centered}>ثبت نام</p>
        </a>
        <a
          href="/"
          className={
            styles.signin +
            " navbar-item has-text-weight-bold has-text-centered"
          }
          style={props.burgerState ? { width: "100%" } : {}}
        >
          <p className={styles.centered}>ورود</p>
        </a>
      </div>
    </div>
  );
};

export default Menu;
