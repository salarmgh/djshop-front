import React from "react";

const FooterLinks = (props: { links: { title: string; url: string }[] }) => {
  return (
    <React.Fragment>
      {props.links.map((link: any, index) => {
        return (
          <p key={index} className="has-text-centered">
            <a href={link.url} className="">
              {link.title}
            </a>
          </p>
        );
      })}
    </React.Fragment>
  );
};

export default FooterLinks;
