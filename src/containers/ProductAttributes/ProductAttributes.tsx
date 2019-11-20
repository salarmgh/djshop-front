import React from "react";
import ProductAttribute from "../../components/ProductAttribute/ProductAttribute";
import styles from "./ProductAttributes.module.scss";

const ProductAttributes = (props: {
  attributes: { name: string; value: string }[];
}) => {
  return (
    <div className="card">
      <div className="card-content">
        <table className={`table is-striped is-fullwidth ${styles.attributes}`}>
          {props.attributes.map(attribute => {
            return (
              <ProductAttribute name={attribute.name} value={attribute.value} />
            );
          })}
        </table>
      </div>
    </div>
  );
};

export default ProductAttributes;
