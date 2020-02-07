import React from "react";

const MenuLinks = (props: { menu: { title: string, url: string }[] }) => {
  return (
    <ul className="menu-list">
      {
        props.menu.map((menu) => {
          return (
            <li><a href={menu.url}>{menu.title}</a></li>
          )
        })
      }
    </ul>
  )
}

export default MenuLinks;
