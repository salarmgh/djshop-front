import React from "react";
import styles from "./ProductAttribute.module.scss";

const ProductAttribute = (props: { name: string; value: string }) => (
  <li>
    <strong className={styles.attribute}>{props.name}</strong>: {props.value}
  </li>
);

export default ProductAttribute;