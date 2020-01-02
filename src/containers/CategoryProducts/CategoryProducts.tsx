import React from "react";
import CategoryProduct from "../../components/CategoryProduct/CategoryProduct";

const CategoryProducts = (props: { products: any }) => {
  return (
    <React.Fragment>
      {
        props.products.map((product, index) => {
          return (
            <div key={index} className="column is-one-quarter">
              <CategoryProduct product={{ image: product["_source"]["images"][0], title: product["_source"]["product"]["title"] + " " + product["_source"]["name"], price: product["_source"]["price"] }} />
            </div>
          )

        })}
    </React.Fragment>
  );
}

export default CategoryProducts;
