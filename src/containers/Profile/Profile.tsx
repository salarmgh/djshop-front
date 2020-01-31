import React from "react";
import Page from "../Layouts/Page";
import MenuLinks from "../Menus/Menus";


const Profile = () => {
  const menus = [
    {}
  ]
  return (
    <Page>
      <div style={{ direction: "rtl" }} className="container">
        <div className="columns">
          <div className="column is-one-quarter">
          </div>
          <div className="column">
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
                        سالار صمدی مقدم
                      </p>
                    </td>
                    <td>
                      <h6 className="has-text-centered title is-6">
                        پست الکترونیکی
                      </h6>
                      <p className="has-text-centered subtitle is-4">
                        folanbisar@gmail.com
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <h6 className="has-text-centered title is-6">
                        کد ملی
                      </h6>
                      <p className="has-text-centered subtitle is-4">
                        12345678234
                      </p>
                    </td>
                    <td>
                      <h6 className="has-text-centered title is-6">
                        شماره تلفن
                      </h6>
                      <p className="has-text-centered subtitle is-4">
                        1233553465
                      </p>
                    </td>
                  </tr>

                </table>
              </div>
            </div>
            <div className="card" style={{ marginBottom: "25px" }}>
              <div className="card-header">
                <div className="card-header-title">
                  آدرس ها
                  </div>
              </div>
              <div className="card-content">
                <table className="table is-fullwidth">
                  <tr>
                    <th className="has-text-right">#</th>
                    <th className="has-text-right">آدرس</th>
                  </tr>
                  <tr>
                    <td className="has-text-right">1</td>
                    <td className="has-text-right">تهران - فلان جا - بهمان جا</td>
                  </tr>
                  <tr>
                    <td className="has-text-right">2</td>
                    <td className="has-text-right">اینجا - اوجا - همه جا</td>
                  </tr>
                </table>
              </div>
            </div>
            <div className="card">
              <div className="card-header">
                <div className="card-header-title">
                  سفارش ها
                  </div>
              </div>
              <div className="card-content">
                <table className="table is-fullwidth">
                  <tr>
                    <th className="has-text-right">#</th>
                    <th className="has-text-right">شماره سفارش</th>
                    <th className="has-text-right">تاریخ سفارش</th>
                    <th className="has-text-right">مبلغ سفارش</th>
                    <th className="has-text-right">وضعیت</th>
                  </tr>
                  <tr>
                    <td className="has-text-right">1</td>
                    <td className="has-text-right">wms-1234</td>
                    <td className="has-text-right">1397/12/11</td>
                    <td className="has-text-right">1234</td>
                    <td className="has-text-right">ارسال شده</td>
                  </tr>
                  <tr>
                    <td className="has-text-right">2</td>
                    <td className="has-text-right">wms-1234</td>
                    <td className="has-text-right">1397/12/11</td>
                    <td className="has-text-right">1234</td>
                    <td className="has-text-right">ارسال شده</td>
                  </tr>
                  <tr>
                    <td className="has-text-right">3</td>
                    <td className="has-text-right">wms-1234</td>
                    <td className="has-text-right">1397/12/11</td>
                    <td className="has-text-right">1234</td>
                    <td className="has-text-right">ارسال شده</td>
                  </tr>
                  <tr>
                    <td className="has-text-right">4</td>
                    <td className="has-text-right">wms-1234</td>
                    <td className="has-text-right">1397/12/11</td>
                    <td className="has-text-right">1234</td>
                    <td className="has-text-right">ارسال شده</td>
                  </tr>

                </table>
              </div>
            </div>

          </div>
        </div>
      </div>
    </Page>
  )
}

export default Profile;
