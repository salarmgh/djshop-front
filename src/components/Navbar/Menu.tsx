import React from "react";
import "bulma";
import Links from "./Links";
import Buttons from "./Buttons";
import styles from "./Navbar.module.scss";

const Menu = (props: {
  categories: { name: string, slug: string }[];
  burgerState: boolean;
}) => {
  const burgerActive: string = styles.navbarBurgerActive + " is-active";
  return (
    <div className={`navbar-menu ${props.burgerState ? burgerActive : ""}`}>
      <Links categories={props.categories} burgerState={props.burgerState} />
      <Buttons burgerState={props.burgerState} />
    </div>
  );
};

export default Menu;
