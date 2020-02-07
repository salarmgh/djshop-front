import React from "react";
import MenuLinks from "../MenuLinks/MenuLinks";

const Menus = (props: { menus: { title: string, links: { title: string, url: string }[] }[] }) => {
  return (
    <aside className="menu">
      {
        props.menus.map((menu) => {
          return (
            <React.Fragment>
              <p className="menu-label">
                {menu.title}
              </p>
              <MenuLinks menu={menu.links} />
            </React.Fragment>
          )
        })
      }
    </aside>

  )
}

export default Menus;
