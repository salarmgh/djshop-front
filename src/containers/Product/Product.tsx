import React, { useState } from "react";
import Page from "../Layouts/Page";
import ProductImage from "../ProductImage/ProductImage";

const Product = () => {
  const [imageIndex, setImageIndex] = useState(0);
  const images: string[] = [
    "https://instagram.fevn1-4.fna.fbcdn.net/vp/ed598f3c56cc42d04366dce8888b86d9/5E59AD27/t51.2885-15/e35/p1080x1080/71530679_411222963158167_3171213940956346890_n.jpg?_nc_ht=instagram.fevn1-4.fna.fbcdn.net&_nc_cat=107",
    "https://instagram.fevn1-4.fna.fbcdn.net/vp/ed598f3c56cc42d04366dce8888b86d9/5E59AD27/t51.2885-15/e35/p1080x1080/71530679_411222963158167_3171213940956346890_n.jpg?_nc_ht=instagram.fevn1-4.fna.fbcdn.net&_nc_cat=107",
    "https://instagram.fevn1-4.fna.fbcdn.net/vp/ed598f3c56cc42d04366dce8888b86d9/5E59AD27/t51.2885-15/e35/p1080x1080/71530679_411222963158167_3171213940956346890_n.jpg?_nc_ht=instagram.fevn1-4.fna.fbcdn.net&_nc_cat=107",
    "https://instagram.fevn1-4.fna.fbcdn.net/vp/ed598f3c56cc42d04366dce8888b86d9/5E59AD27/t51.2885-15/e35/p1080x1080/71530679_411222963158167_3171213940956346890_n.jpg?_nc_ht=instagram.fevn1-4.fna.fbcdn.net&_nc_cat=107"
  ];
  return (
    <Page>
      <div className="hero is-fullheight">
        <div className="columns">
          <div className="column">
            <ProductImage images={images} size="square" />
          </div>
          <div className="column">
            <h1 className="title is-1">Kheili khafan product</h1>
          </div>
        </div>
      </div>
    </Page>
  );
};

export default Product;
