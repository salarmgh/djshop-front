import React from "react";
import Link from "../../components/Link/Link";

const MenuLinks = (props: { menu: { title: string, links: string[] }[] }) => {
  return (
    <React.Fragment>
      <p className="menu-label">
        {props.menu.title}
      </p>
      <ul className="menu-list">
        {
          props.menu.links.map((link) => {
            return (
              <Link link={link} />
            )
          })
        }
      </ul>
    </React.Fragment>
  )
}

export default MenuLinks;
