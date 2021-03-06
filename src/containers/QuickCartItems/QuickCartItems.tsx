import React from "react";
import QuickCartItem from "../../components/QuickCartItem/QuickCartItem";


const QuickCartItems = (props: { products: any }) => {
  return (
    <React.Fragment>
      {
        props.products.map((product) => {
          return (
            <QuickCartItem product={product} />
          )
        })
      }
    </React.Fragment>
  )
}

export default QuickCartItems;
