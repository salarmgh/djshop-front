import React from "react";
import "bulma";
import style from "./Navbar.module.scss";

const Burger = (props: { burgerState: boolean; burgerHandler: () => void }) => {
  const burgerActive: string = style.navbarBurgerActive + " is-active";
  return (
    <button
      className={`navbar-burger button is-dark ${style.navbarBurger}${
        props.burgerState ? burgerActive : ""
        }`}
      style={{ marginLeft: 0, marginRight: "auto" }}
      aria-label="menu"
      aria-expanded="false"
      onClick={props.burgerHandler}
    >
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </button>
  );
};

export default Burger;
