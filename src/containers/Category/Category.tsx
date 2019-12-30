import React, {useState, useEffect} from "react";
import axios from "axios";
import Page from "../Layouts/Page";
import Banner from "../../components/Banner/Banner";
import CategoryProducts from "../CategoryProducts/CategoryProducts";

const Category = () => {
    const backendUrl = process.env.REACT_APP_BACKEND_BASE_URL;
    const [category, setCategory] = useState({
    id: 0,
    image: "https://bulma.io/images/placeholders/1280x960.png",
    name: "category"
  });

    useEffect(() => {
        axios.get(`${backendUrl}/categories/necklace/`).then(({ data }) => {
            setCategory(data);
        });
    }, [backendUrl]);


    return (
      <Page>
        <div className="container is-fluid">
          <Banner image="http://localhost/media/images/categories/placeholdit-1280x720.png" />
          <div className="columns">
            <div className="column is-one-quarter">

            </div>
            <div className="column">
              <div className="columns">
                  <CategoryProducts products={[{image: "https://folan.com/bahman.png", title: "title", desc: "desc", price: "10000"}]} />
              </div>
            </div>
          </div>
        </div>
      </Page>
    );
}

export default Category;