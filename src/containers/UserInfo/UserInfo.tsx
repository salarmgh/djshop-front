import React from "react";

const UserInfo = (props: { user: { fullName: any, email: any, number: any, code: any } }) => {
  return (
    <div className="card" style={{ marginBottom: "25px" }}>
      <div className="card-header">
        <div className="card-header-title">
          اطلاعات کاربری
                  </div>
      </div>
      <div className="card-content">

        <table className="table is-fullwidth is-bordered is-striped">
          <tr>
            <td>
              <h6 className="has-text-centered title is-6">
                نام و نام خانوادگی
          </h6>
              <p className="has-text-centered subtitle is-4">
                {props.user.fullName}
              </p>
            </td>
            <td>
              <h6 className="has-text-centered title is-6">
                پست الکترونیکی
                      </h6>
              <p className="has-text-centered subtitle is-4">
                {props.user.email}
              </p>
            </td>
          </tr>
          <tr>
            <td>
              <h6 className="has-text-centered title is-6">
                کد ملی
                      </h6>
              <p className="has-text-centered subtitle is-4">
                {props.user.code}
              </p>
            </td>
            <td>
              <h6 className="has-text-centered title is-6">
                شماره تلفن
                      </h6>
              <p className="has-text-centered subtitle is-4">
                {props.user.number}
              </p>
            </td>
          </tr>
        </table>
      </div>
    </div>
  )
}

export default UserInfo;
