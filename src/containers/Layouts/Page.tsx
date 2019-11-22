import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import brandImage from "../../assets/images/brand.jpg";

const socials = [
  {
    social: "instagram",
    url: "https://www.instagram.com/anemone.ir/"
  },
  {
    social: "twitter",
    url: "https://twitter.com/anemone.ir/"
  },
  {
    social: "youtube",
    url: "https://youtube.com/anemone.ir/"
  }
];
const navigation = [
  {
    title: "فروشگاه",
    url: "/"
  },
  {
    title: "وبلاگ",
    url: "/blog/"
  },
  {
    title: "ارتباط با ما",
    url: "/contact-us"
  }
];

const rules = [
  {
    title: "وضعیت سفارش",
    url: "/order-status/"
  },
  {
    title: "نحوه ی ارسال",
    url: "/delivery/"
  },
  {
    title: "حریم شخصی",
    url: "/privacy/"
  }
];

const guides = [
  {
    title: "نحوه ی پرداخت",
    url: "/payment-options/"
  },
  {
    title: "راهنما",
    url: "/guides/"
  },
  {
    title: "قوانین استفاده",
    url: "/terms-of-use/"
  }
];

const Page = (props: { children: React.ReactNode }) => (
  <React.Fragment>
    <Navbar brandImage={brandImage} />
    {props.children}
    <Footer
      logo={brandImage}
      socials={socials}
      navigation={navigation}
      rules={rules}
      guides={guides}
    />
  </React.Fragment>
);

export default Page;
