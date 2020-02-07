import React from "react";
import Page from "../Layouts/Page";
import Menus from "../Menus/Menus";
import UserInfo from "../UserInfo/UserInfo";
import Addresses from "../Addresses/Addresses";
import Orders from "../Orders/Orders";


const Profile = () => {
  const orders = [
    {
      id: 1,
      status: "ارسال شده",
      date: "1397/12/11",
      price: 1234
    },
    {
      id: 1,
      status: "ارسال شده",
      date: "1397/12/11",
      price: 1234
    },
    {
      id: 1,
      status: "ارسال شده",
      date: "1397/12/11",
      price: 1234
    },
    {
      id: 1,
      status: "ارسال شده",
      date: "1397/12/11",
      price: 1234
    }
  ]
  const addresses = [
    "اینجا، اونجا، همه جا",
    "من، تو، او، ما، و شما",
    "خب مثل این که بدک هم نیست"
  ]
  const menus = [
    {
      title: "پروفایل",
      links: [
        {
          title: "تغییر اطلاعات کاربری",
          url: "/change-user-info"
        },
        {
          title: "تغییر پسورد",
          url: "/change-user-password"
        }
      ]
    },
    {
      title: "آدرس ها",
      links: [
        {
          title: "مدیریت آدرس ها",
          url: "/addresses"
        }
      ]
    },
    {
      title: "سفارشات",
      links: [
        {
          title: "سفارش های من",
          url: "/orders"
        },
        {
          title: "پیگیری سفارش",
          url: "/order-track"
        }
      ]
    }
  ]
  return (
    <Page>
      <div style={{ direction: "rtl" }} className="container">
        <div className="columns">
          <div className="column is-one-quarter" style={{ marginTop: "25px" }}>
            <Menus menus={menus} />
          </div>
          <div className="column">
            <UserInfo user={{ fullName: "سالار صمدی مقدم", email: "folan@bahman.bisar", number: "09123123123", code: "11111111" }} />
            <Addresses addresses={addresses} />
            <Orders orders={orders} />
          </div>
        </div>
      </div>
    </Page >
  )
}

export default Profile;
