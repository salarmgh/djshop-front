import React from "react";
import "bulma";
import styles from "./Navbar.module.scss";

interface NavbarProps {
  brand: {
    url: string;
    image: string;
  };
  links: { name: string; url: string }[];
}

const Navbar: React.SFC<NavbarProps> = props => {
  return (
    <nav
      className="navbar is-dark"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="navbar-brand">
        <a className="navbar-item" href={props.brand.url}>
          <figure className="image is-64x64">
            <img
              className="is-rounded"
              style={{ minHeight: "100%" }}
              src={props.brand.image}
            />
          </figure>
        </a>
        <a
          role="button"
          className="navbar-burger burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" className="navbar-menu">
        <div className="navbar-start">
          {props.links.map(link => {
            return (
              <a className="navbar-item has-text-weight-bold" href={link.url}>
                {link.name}
              </a>
            );
          })}
        </div>

        <div className="navbar-end">
          <a
            href="/"
            className={
              styles.signup + " is-size-5 navbar-item has-text-weight-bold"
            }
          >
            Sign up
          </a>
          <a
            href="/"
            className={
              styles.signin + " is-size-5 navbar-item has-text-weight-bold"
            }
          >
            <p className={styles.centered}>Log in</p>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
