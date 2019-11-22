import React from "react";

const Socials = (props: { socials: { social: string; url: string }[] }) => {
  return (
    <React.Fragment>
      {props.socials.map((social: any, index) => {
        return (
          <p>
            <a href={social.url} className="has-text-centered">
              <i className={`fab fa-${social.social}`}></i>
            </a>
          </p>
        );
      })}
    </React.Fragment>
  );
};

export default Socials;
