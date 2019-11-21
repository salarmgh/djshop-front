import React from "react";
import ProductAttribute from "../../components/ProductAttribute/ProductAttribute";
import styles from "./ProductAttributes.module.scss";

const ProductAttributes = (props: {
  attributes: { name: string; value: string }[];
}) => {
  return (
    <React.Fragment>
      <ul className={styles.attributes}>
        {props.attributes.map(attribute => {
          return (
            <ProductAttribute name={attribute.name} value={attribute.value} />
          );
        })}
      </ul>
    </React.Fragment>
  );
};

export default ProductAttributes;
