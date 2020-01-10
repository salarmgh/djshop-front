import React, { useEffect, useState } from "react";
import Page from "../Layouts/Page";
import Carousel from "../Carousel/Carousel";
import BoxImages from "../BoxImages/BoxImages";
import BigBanner from "../../components/BigBanner/BigBanner";
import Promoted from "../Promoted/Promoted";
import axios from "axios";


const Home = () => {
  const backendUrl = process.env.REACT_APP_BACKEND_BASE_URL;

  const [carouselImages, setCarouselImages] = useState([{ id: 0, title: "Placeholder", description: "Placeholder", image: "https://colorlib.com/preview/theme/essence/img/bg-img/bg-1.jpg", url: "/", created_at: "date" }]);

  const [boxImages, setBoxImages] = useState([{ url: "https://colorlib.com/preview/theme/essence/img/bg-img/bg-2.jpg", path: "/" }, { url: "https://colorlib.com/preview/theme/essence/img/bg-img/bg-3.jpg", path: "/" }, { url: "https://colorlib.com/preview/theme/essence/img/bg-img/bg-4.jpg", path: "/" }]);

  const [bigBanner, setBigBanner] = useState({ url: "https://colorlib.com/preview/theme/essence/img/bg-img/bg-5.jpg", path: "/" });

  const [promotedProducts, setPromotedProducts] = useState([{ image: "https://colorlib.com/preview/theme/essence/img/product-img/product-1.jpg", url: "/", title: "John Smith", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris." }, { image: "https://colorlib.com/preview/theme/essence/img/product-img/product-3.jpg", url: "/", title: "John Smith", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris." }, { image: "https://colorlib.com/preview/theme/essence/img/product-img/product-4.jpg", url: "/", title: "John Smith", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris." }, { image: "https://colorlib.com/preview/theme/essence/img/product-img/product-5.jpg", url: "/", title: "John Smith", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris." }]);


  useEffect(() => {
    axios.get(`${backendUrl}/carousel/`).then(({ data }) => {
      setCarouselImages(data.results);
    });
  }, [backendUrl]);

  useEffect(() => {
    axios.get(`${backendUrl}/landing-banner/`).then(({ data }) => {
      setBoxImages(data.results);
    });
  }, [backendUrl]);

  useEffect(() => {
    axios.get(`${backendUrl}/landing-banner/`).then(({ data }) => {
      setBoxImages(data.results);
    });
  }, [backendUrl]);

  return (
    <Page>
      <Carousel images={carouselImages} />
      <BoxImages images={boxImages} />
      <BigBanner url={bigBanner.url} path={bigBanner.path} />
      <Promoted products={promotedProducts} />
    </Page >
  )
};

export default Home;
