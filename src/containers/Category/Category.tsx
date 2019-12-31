import React, {useState, useEffect} from "react";
import axios from "axios";
import Page from "../Layouts/Page";
import Banner from "../../components/Banner/Banner";
import CategoryProducts from "../CategoryProducts/CategoryProducts";
import Filters from "../Filters/Filters";
import PriceSlider from "../../components/PriceSlider/PriceSlider";

const Category = () => {
    const backendUrl = process.env.REACT_APP_BACKEND_BASE_URL;
    const [category, setCategory] = useState({
    id: 0,
    image: "https://bulma.io/images/placeholders/1280x960.png",
    name: "category",
    attributes: [
        {
            id: 0,
            name: "attribute",
            attributes: [
                {
                    "value": "value",
                    "attribute": 0
                }
            ]
        }
    ]
  });

    const [attributes, setAttributes] = useState([{
    id: 0,
    name: "attribute",
    attributes: [
        {
            value: "value"
        }
    ]
  }]);

    const [products, setProducts] = useState([{
        _source: {
        name: "attribute",
        price: 1234,
        product: {
            title: "title",
            description: "desc",
            slug: "/",
            featured: true
        },
        images: ["https://bulma.io/images/placeholders/1280x960.png"]
      }
    }]);

    useEffect(() => {
        axios.get(`${backendUrl}/categories/necklace/`).then(({ data }) => {
            setCategory(data);
            setAttributes(data.attributes);
        });
    }, [backendUrl]);
    
    const [filterAttributes, setFilterAttributes] = useState({});
    
    useEffect(() => {
        axios.get(`${backendUrl}/search/?categories=Necklace`).then(({ data }) => {
            setProducts(data);
        });
    }, [backendUrl]);

    const filterCheckHandler = (
        event: any
        ) => {
            const attributes = {...filterAttributes};
            const key = event.target.value.split("|")[0];
            const value = event.target.value.split("|")[1];
            if (event.target.checked === true) {
                if (typeof attributes[key] == 'undefined') {
                   attributes[key] = [value];
                } else {
                   attributes[key].push(value);
                }
            } else {
                 attributes[key].splice( attributes[key].indexOf(value), 1 );
                 if (attributes[key].length === 0) {
                    delete attributes[key];
                 }
            }
            setFilterAttributes(attributes);
        };

    return (
      <Page>
        <div className="container is-fluid">
          <Banner image={category.image} />
          <div className="columns">
            <div className="column is-one-quarter">
              <Filters onChange={filterCheckHandler} attributes={attributes} />
              <PriceSlider min={1000} max={100000} defaultMin={10000} defaultMax={50000} />
            </div>
            <div className="column">
              <div className="columns is-multiline">
                  <CategoryProducts products={products} />
              </div>
            </div>
          </div>
        </div>
      </Page>
    );
}

export default Category;