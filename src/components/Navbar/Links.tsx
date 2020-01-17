import React from "react";
import "bulma";
import styles from "./Navbar.module.scss";

const Links = (props: {
  categories: { name: string, slug: string }[];
  burgerState: boolean;
}) => {
  const burgerActivated: string =
    styles.navbarMenuActivated + " has-text-centered";
  return (
    <div className={`navbar-start ${styles.navbarStartRtl}`}>
      {props.categories.map((link, index) => {
        return (
          <a
            key={index}
            className={`navbar-item has-text-weight-bold ${
              props.burgerState ? burgerActivated : ""
              }`}
            href={`/category/${link.slug}/`}
          >
            {link.name}
          </a>
        );
      })}
    </div>
  );
};

export default Links;
