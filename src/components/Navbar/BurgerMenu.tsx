import React from "react";
import "bulma";
import style from "./Navbar.module.scss";

const Burger = (props: { burgerState: boolean; burgerHandler: () => void }) => {
  const burgerActive: string = style.navbarBurgerActive + " is-active";
  return (
    <a
      role="button"
      className={`navbar-burger ${style.navbarBurger}${
        props.burgerState ? burgerActive : ""
        }`}
      style={{ marginLeft: 0, marginRight: "auto" }}
      aria-label="menu"
      aria-expanded="false"
      data-target="navbarBasicExample"
      onClick={props.burgerHandler}
    >
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  );
};

export default Burger;
