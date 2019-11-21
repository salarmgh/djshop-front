import React from "react";
const persianNumber = require("persian-number");

const Price = (props: { price: number }) => (
  <React.Fragment>
    {persianNumber.convertEnToPe(persianNumber.sliceNumber(props.price))}
  </React.Fragment>
);

export default Price;
