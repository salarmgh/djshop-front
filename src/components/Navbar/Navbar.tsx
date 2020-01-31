import React, { useState, useEffect } from "react";
import "bulma";
import Brand from "./Brand";
import Menu from "./Menu";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { isTokenValid } from "../../utilites/jwt";


const Navbar = (props: { brandImage: string }) => {
  const [burgerState, setBurgerState] = useState(false);
  const [categoriesState, setCategoriesState] = useState([{ name: "", slug: "" }]);
  const backendBaseUrl = process.env.REACT_APP_BACKEND_BASE_URL;


  const burgerHandler = () => {
    setBurgerState(!burgerState);
  };

  const dispatch = useDispatch();
  dispatch(isTokenValid());

  const loginState = useSelector(state => state);


  useEffect(() => {
    axios
      .get(`${backendBaseUrl}/categories/`)
      .then(({ data }) => {
        setCategoriesState(data.results);
      })
      .catch(err => { });
  }, [backendBaseUrl]);

  return (
    <nav style={{ direction: "rtl" }}
      className={`navbar is-dark`}
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
