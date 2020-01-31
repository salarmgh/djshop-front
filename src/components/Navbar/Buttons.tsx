import React from "react";
import "bulma";
import { useSelector, useDispatch } from "react-redux";
import { isTokenValid } from "../../utilites/jwt";
import QuickCartView from "../QuickCartView/QuickCartView";
import ProfileIcon from "../ProfileIcon/ProfileIcon";

const Buttons = (props: { burgerState: boolean }) => {
  const dispatch = useDispatch();
  dispatch(isTokenValid());
  const loginStatus = useSelector(state => state);

  return (
    <div className={`navbar-start`}>
      <div className="columns is-vcentered">

        {loginStatus ?
          <React.Fragment>
            <div className="column">
              <QuickCartView />
            </div>
            <div className="column">
              <ProfileIcon profile={{ url: "/profile/", icon: "fas fa-user" }} />
            </div>
          </React.Fragment>
          :
          <div className="column">
            <ProfileIcon profile={{ url: "/profile/", icon: "fas fa-user" }} />
          </div>
        }
      </div>
    </div >
  );
};

export default Buttons;
