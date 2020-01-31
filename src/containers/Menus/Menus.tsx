import React from "react";
import MenuLinks from "../MenuLinks/MenuLinks";

const Menus = (props: { menus: { title: string, links: { name: string, url: string }[] }[] }) => {
  return (
    <aside className="menu">
      {
        props.menus.map((menu) => {
          return (
            <MenuLinks menu={menu.links} />
          )
        })
      }
    </aside>

  )
}

export default Menus;
