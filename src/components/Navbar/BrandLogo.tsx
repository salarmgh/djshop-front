import React from "react";
import "bulma";

interface BrandLogoProps {
  logo: string;
}

const BrandLogo: React.SFC<BrandLogoProps> = (props: { logo: string }) => {
  return (
    <a className="navbar-item" href="/">
      <figure className="image is-64x64">
        <img
          className="is-rounded"
          style={{ minHeight: "100%" }}
          src={props.logo}
        />
      </figure>
    </a>
  );
};

export default BrandLogo;
