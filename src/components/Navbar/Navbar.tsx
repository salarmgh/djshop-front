import React, { useState, useEffect } from "react";
import "bulma";
import Brand from "./Brand";
import Menu from "./Menu";
import axios from "axios";
import style from "./Navbar.module.scss";

const Navbar = (props: { brandImage: string }) => {
  const [burgerState, setBurgerState] = useState(false);
  const [categoriesState, setCategoriesState] = useState([{ name: "" }]);
  const backendBaseUrl: string = process.env.BACKEND_BASE_URL;

  const burgerHandler = () => {
    setBurgerState(!burgerState);
  };

  useEffect(() => {
    axios
      .get(`${backendBaseUrl}/categories/`)
      .then(({ data }) => {
        setCategoriesState(data.results);
      })
      .catch(err => { });
  }, []);

  return (
    <nav
      className={`navbar is-dark ${style.rtl}`}
      role="navigation"
      aria-label="main navigation"
    >
      <Brand
        image={props.brandImage}
        burgerState={burgerState}
        burgerHandler={burgerHandler}
      />
      <Menu categories={categoriesState} burgerState={burgerState} />
    </nav>
  );
};

export default Navbar;
