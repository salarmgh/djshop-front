import React from "react";
import "@fortawesome/fontawesome-free/js/all.js";
import styles from "./Footer.module.scss";
import Logo from "../Logo/Logo";
import Socials from "../../containers/Socials/Socials";
import FooterLinks from "../../containers/FooterLinks/FooterLinks";

const Footer = (props: {
  logo: string;
  socials: { social: string; url: string }[];
  navigation: { title: string; url: string }[];
  rules: { title: string; url: string }[];
  guides: { title: string; url: string }[];
}) => {
  return (
    <footer className={`footer ${styles.pageFooter}`}>
      <div className="container">
        <div className="columns">
          <div className="column is-one-fifth">
            <Logo image={props.logo} size="96x96" shape="rounded" />
          </div>
          <div className="column is-one-fifth">
            <Socials socials={props.socials} />
          </div>

          <div className="column is-one-fifth">
            <FooterLinks links={props.navigation} />
          </div>

          <div className="column is-one-fifth">
            <FooterLinks links={props.rules} />
          </div>
          <div className="column is-one-fifth">
            <FooterLinks links={props.guides} />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
