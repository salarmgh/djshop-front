import React from "react";

const Link = (props: { link: string }) => {
  return (
    <li>
      <a>
        {props.link}
      </a>
    </li>
  )
}

export default Link;
