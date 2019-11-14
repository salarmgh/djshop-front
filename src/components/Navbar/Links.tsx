import React from "react";
import "bulma";
import styles from "./Navbar.module.scss";

const Links = (props: {
  categories: { name: string }[];
  burgerState: boolean;
}) => {
  const burgerActivated: string =
    styles.navbarMenuActivated + " has-text-centered";
  return (
    <div className={`navbar-start ${styles.navbarStartRtl}`}>
      {props.categories.map(link => {
        return (
          <a
            className={`navbar-item has-text-weight-bold ${
              props.burgerState ? burgerActivated : ""
              }`}
            href={`/category/${link.name}/`}
          >
            {link.name}
          </a>
        );
      })}
    </div>
  );
};

export default Links;
