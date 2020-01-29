import React, { useState } from "react";
import Page from "../../containers/Layouts/Page";
import "bulma-checkradio";
import { getToken } from "../../utilites/jwt";

const Login = () => {
  const [userInfo, setUserInfo] = useState({ username: "", password: "", rememberMe: false });
  const handleUsername = (event: any) => {
    const userData = { ...userInfo };
    userData.username = event.target.value;
    setUserInfo(userData);
  }
  const handlePassword = (event: any) => {
    const userData = { ...userInfo };
    userData.password = event.target.value;
    setUserInfo(userData);
  }

  const handleRemember = (event: any) => {
    const userData = { ...userInfo };
    userData.rememberMe = event.target.checked;
    setUserInfo(userData);
  }

  const handleSubmit = (event: any) => {
    getToken(userInfo.username, userInfo.password);
    window.location.href = "/";
  }

  return (
    <Page>
      <div className="hero">
        <div className="hero-body">
          <div className="container">
            <div className="columns">
              <div className="column is-half is-offset-one-quarter">
                <div className="card">
                  <div className="card-header">
                    <div className="card-header-title is-centered">
                      ورود به حساب کاربری
              </div>
                  </div>
                  <div style={{ direction: "rtl" }} className="card-content">
                    <div className="field">
                      <label className="label">ایمیل</label>
                      <div className="control has-icons-right">
                        <input onChange={handleUsername} className="input" type="email" placeholder="Email" />
                        <span className="icon is-small is-right">
                          <i className="fas fa-envelope"></i>
                        </span>
                      </div>
                    </div>
                    <div className="field">
                      <label className="label">رمز عبور</label>
                      <div className="control has-icons-right">
                        <input onChange={handlePassword} className="input" type="password" placeholder="Password" />
                        <span className="icon is-small is-right">
                          <i className="fas fa-key"></i>
                        </span>
                      </div>
                    </div>
                    <div className="field">
                      <input onChange={handleRemember} className="is-checkradio is-rtl ic-circle is-black" id="rememberme" type="checkbox" />
                      <label htmlFor="rememberme">

                        من را به خاطر بسپار
                        </label>
                    </div>
                    <div className="field">
                      <button onClick={handleSubmit} style={{ borderRadius: "unset" }} className="button is-fullwidth is-dark">ورود</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Page>
  )
}

export default Login;
