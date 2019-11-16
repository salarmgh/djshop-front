import React, { useState } from "react";
import Page from "../Layouts/Page";
import ImageMagnifier from "../../components/ImageMagnifier/ImageMagnifier";
import Images from "../../containers/Images/Images";

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
            <div className="columns">
              <div className="column">
                <Images images={images} size="square" />
              </div>
              <div className="column is-four-fifths">
                <ImageMagnifier image="https://instagram.fevn1-1.fna.fbcdn.net/vp/220ac8fcc232c397367a72a520b0bf24/5E4759DA/t51.2885-15/e35/s1080x1080/74448490_2556314537988766_6964396219630299901_n.jpg?_nc_ht=instagram.fevn1-1.fna.fbcdn.net&_nc_cat=110" />
              </div>
            </div>
          </div>
          <div className="column"></div>
        </div>
      </div>
    </Page>
  );
};

export default Product;
