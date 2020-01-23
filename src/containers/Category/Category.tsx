import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Page from "../Layouts/Page";
import Banner from "../../components/Banner/Banner";
import CategoryProducts from "../CategoryProducts/CategoryProducts";
import Filters from "../Filters/Filters";
import PriceSlider from "../../components/PriceSlider/PriceSlider";


const Category = () => {
  const { cat } = useParams();
  const queryString = require('query-string');
  const backendUrl = process.env.REACT_APP_BACKEND_BASE_URL;
  const [queryStr, setQueryStr] = useState("");
  const [price, setPrice] = useState([10000, 10000000]);
  const [currentPrice, setCurrentPrice] = useState([-1, -1]);
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
    if (typeof queryParsed !== 'undefined') {
      if (Array.isArray(queryParsed.attribute)) {
        queryParsed.attribute.forEach((attribute) => {
          let key = attribute.split(':')[0];
          let value = attribute.split(':')[1];
          if (Array.isArray(filters[key])) {
            filters[key].push(value);
          } else {
            filters[key] = [value]
          }
        })
      } else if (typeof queryParsed.attribute === 'string') {
        let key = queryParsed.attribute.split(':')[0];
        let value = queryParsed.attribute.split(':')[1];
        filters[key] = [value];
      }
    }

    axios.get(`${backendUrl}/categories/${cat}/`).then(({ data }) => {
      setCategory(data);
      const categoryAttributes = data.attributes.slice();
      categoryAttributes.forEach((categoryAttribute) => {
        categoryAttributes.forEach((categoryAttribute) => {
          categoryAttribute.attributes.forEach((attribute) => {
            attribute.checked = false;
          })
        })

      })
      categoryAttributes.forEach((categoryAttribute) => {

        for (let key in filters) {
          categoryAttributes.forEach((categoryAttribute) => {
            categoryAttribute.attributes.forEach((attribute) => {
              if (Array.isArray(filters[key])) {
                filters[key].forEach((filterValue) => {
                  if (filterValue === attribute.value) {
                    attribute.checked = true;
                  }
                })
              }
            })
          })
        }
      })

      setAttributes(categoryAttributes);
    });
  }, [backendUrl, queryString]);



  useEffect(() => {
    let filters: { id: number, name: string, attributes: { value: string, checked: boolean }[] }[] = attributes.slice();
    let fetchFilters: { attribute: string[]; } = { attribute: [] };

    filters.forEach((attribute) => {
      attribute.attributes.forEach((item) => {
        if (item.checked) {
          fetchFilters.attribute.push(attribute["name"] + ":" + item["value"]);
        }
      })
    })
    //if (currentPrice[0] !== -1 && currentPrice[1] !== -1) {
    // fetchFilters["min_price"] = currentPrice[0];
    //fetchFilters["max_price"] = currentPrice[1];
    //}
    if (currentPrice[0] !== -1 && currentPrice[1] !== -1) {
      fetchFilters["min_price"] = currentPrice[0];
      fetchFilters["max_price"] = currentPrice[1];
    }
    const stringified = queryString.stringify(fetchFilters);

    setQueryStr(stringified);


    if (stringified !== '') {
      window.history.pushState('', '', window.location.pathname + "?" + stringified);
    }

    axios.get(`${backendUrl}/search/?categories=${category.name}&${stringified}`).then(({ data }) => {
      setProducts(data.results);
      setPrice([data.price_min, data.price_max]);
      if (currentPrice[0] === -1 && currentPrice[1] === -1) {
        const queryParsed = queryString.parse(window.location.search);
        let min_price = data.price_min;
        let max_price = data.price_max;
        if (typeof queryParsed["min_price"] !== 'undefined') {
          min_price = parseInt(queryParsed["min_price"]);
        }
        if (typeof queryParsed["max_price"] !== 'undefined') {
          max_price = parseInt(queryParsed["max_price"]);
        }
        setCurrentPrice([min_price, max_price]);
      }
    });
  }, [backendUrl, attributes, queryStr, currentPrice, category]);

  const filterCheckHandler = (
    event: any
  ) => {
    console.log("Triggered");
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

  const filterPriceHandler = (event: any) => {
    setCurrentPrice([event[0], event[1]])
    console.log(event);
  }

  return (
    <Page>
      <div style={{ direction: "rtl" }} className="container is-fluid">
        <Banner image={category.image} />
        <div className="columns">
          <div className="column is-one-quarter">
            <Filters onChange={filterCheckHandler} attributes={attributes} />
            <PriceSlider onChange={filterPriceHandler} min={price[0]} max={price[1]} currentMin={currentPrice[0]} currentMax={currentPrice[1]} />
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
