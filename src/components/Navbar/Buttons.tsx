import React from "react";
import "bulma";
import styles from "./Navbar.module.scss";
import { Login } from "../../actions/LoginActions";
import { useDispatch } from "react-redux";

const Buttons = (props: { burgerState: boolean }) => {
  const dispatch = useDispatch();
  return (
    <div className={`navbar-start`}>
      <div className="columns is-vcentered">
        <div className="column">
          <a
            onClick={() => {
              dispatch(Login())
            }}
            className={
              "button is-dark navbar-item has-text-weight-bold has-text-centered"
            }
            style={props.burgerState ? { width: "100%" } : {}}
          >
            ورود به حساب کاربری
      </a>
        </div>
      </div>
    </div>
  );
};

export default Buttons;
