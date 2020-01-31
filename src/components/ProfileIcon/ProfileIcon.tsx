import React from "react";

const ProfileIcon = (props: { profile: { url: string, icon: string } }) => {
  return (
    <a
      href={props.profile.url}
      className={
        "button is-dark navbar-item has-text-weight-bold has-text-centered"
      }
      style={{ marginLeft: "15px" }}
    >
      <i className={props.profile.icon}></i>
    </a>
  )
}

export default ProfileIcon;
