import React from "react";
import CheckoutItem from "../../components/CheckoutItem/CheckoutItem";

const CheckoutItems = (props: { setProducts: any, products: any }) => {
  return (
    <React.Fragment>
      {
        props.products.map((product) => {
          return (
            <CheckoutItem setProducts={props.setProducts} products={props.products} product={product} />
          )
        })
      }
    </React.Fragment>
  )
}

export default CheckoutItems;
