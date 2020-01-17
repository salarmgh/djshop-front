import React from "react";
//import styles from "./ProductAttribute.module.scss";

const ProductAttribute = (props: { name: string; value: string }) => (
  <tr>
    <th><p className="has-text-centered">{props.name}</p></th>
    <td><p className="has-text-centered">{props.value}</p></td>
  </tr>
);

export default ProductAttribute;
