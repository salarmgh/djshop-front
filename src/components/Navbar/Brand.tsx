import React from "react";
import "bulma";
import BrandLogo from "./BrandLogo";
import BurgerMenu from "./BurgerMenu";

const Brand = (props: {
  image: string;
  burgerState: boolean;
  burgerHandler: () => void;
}) => {
  return (
    <div className="navbar-brand">
      <BrandLogo logo={props.image} />
      <BurgerMenu
        burgerState={props.burgerState}
        burgerHandler={props.burgerHandler}
      />
    </div>
  );
};

export default Brand;
