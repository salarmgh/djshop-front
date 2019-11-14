import React, { useState, useEffect } from "react";
import "bulma";
import Brand from "./Brand";
import Menu from "./Menu";
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
      <Brand
        image={props.brand.image}
        burgerState={burgerState}
        burgerHandler={burgerHandler}
      />
      <Menu categories={categoriesState} burgerState={burgerState} />
    </nav>
  );
};

export default Navbar;
