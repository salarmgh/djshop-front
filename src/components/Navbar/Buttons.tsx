import React from "react";
import "bulma";
import styles from "./Navbar.module.scss";

const Buttons = (props: { burgerState: boolean }) => {
  return (
    <div className={`navbar-end ${styles.navbarEndRtl}`}>
      <a
        href="/"
        className={
          styles.signup + " navbar-item has-text-weight-bold has-text-centered"
        }
        style={props.burgerState ? { width: "100%" } : {}}
      >
        <p className={styles.centered}>ثبت نام</p>
      </a>
      <a
        href="/"
        className={
          styles.signin + " navbar-item has-text-weight-bold has-text-centered"
        }
        style={props.burgerState ? { width: "100%" } : {}}
      >
        <p className={styles.centered}>ورود</p>
      </a>
    </div>
  );
};

export default Buttons;
