import React from "react";
import ProductAttribute from "../../components/ProductAttribute/ProductAttribute";
import styles from "./ProductAttributes.module.scss";

const ProductAttributes = (props: {
  attributes: { name: string; value: string }[];
}) => {
  return (
    <table className="table is-fullwidth">
      {props.attributes.map(attribute => {
        return (
          <ProductAttribute name={attribute.name} value={attribute.value} />
        );
      })}
    </table>
  );
};

export default ProductAttributes;
