import React, { useState, useEffect } from "react";
import axios from "axios";
import Page from "../Layouts/Page";
import Banner from "../../components/Banner/Banner";
import CategoryProducts from "../CategoryProducts/CategoryProducts";
import Filters from "../Filters/Filters";
import PriceSlider from "../../components/PriceSlider/PriceSlider";


const Category = () => {
  const queryString = require('query-string');
  const backendUrl = process.env.REACT_APP_BACKEND_BASE_URL;
  const [filterAttributes, setFilterAttributes] = useState({});
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
        value: "value",
        checked: false
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
    const queryParsed = queryString.parse(window.location.search);
    let filters = {};
    if (Array.isArray(queryParsed.attributes)) {
      queryParsed.attributes.forEach((attribute) => {
        let key = attribute.split(':')[0];
        let value = attribute.split(':')[1];
        filters[key] = value;
      })
    } else {
      let key = queryParsed.attributes.split(':')[0];
      let value = queryParsed.attributes.split(':')[1];
      filters[key] = value;
    }
    axios.get(`${backendUrl}/categories/necklace/`).then(({ data }) => {
      setCategory(data);
      const categoryAttributes = data.attributes.slice();
      categoryAttributes.forEach((categoryAttribute) => {
        for (let key in filters) {
          categoryAttributes.forEach((categoryAttribute) => {
            categoryAttribute.attributes.forEach((attribute) => {
              attribute.checked = false;
            })
          })
        }
      })
      categoryAttributes.forEach((categoryAttribute) => {
        for (let key in filters) {
          categoryAttributes.forEach((categoryAttribute) => {
            categoryAttribute.attributes.forEach((attribute) => {
              if (attribute.value === filters[key]) {
                attribute.checked = true;
              }
            })
          })
        }
      })

      setAttributes(categoryAttributes);
    });
  }, [backendUrl]);



  useEffect(() => {
    const filters = attributes.slice();
    const fetchFilters = { attributes: [] };

    filters.forEach((attribute) => {
      attribute.attributes.forEach((item) => {
        fetchFilters.attributes.push(attribute.name + ":" + item["value"]);
      })
    })
    axios.get(`${backendUrl}/search/?categories=Necklace`).then(({ data }) => {
      setProducts(data);
    });
  }, [backendUrl, attributes]);

  const filterCheckHandler = (
    event: any
  ) => {
    const attributesFilter = attributes.slice();
    const key = event.target.value.split("|")[0];
    const value = event.target.value.split("|")[1];
    for (let attribute of attributesFilter) {
      if (attribute.name === key) {
        for (let attributeValue of attribute.attributes) {
          if (attributeValue.value === value) {
            if (attributeValue.checked === false) {
              attributeValue.checked = true;
            } else {
              attributeValue.checked = false;
            }
          }
        }
      }
    }
    setAttributes(attributesFilter);
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
