import React from "react";
import CategoryProduct from "../../components/CategoryProduct/CategoryProduct";

const CategoryProducts = (props: {products: {image: string, title: string, desc: string, price: string}[]}) => {
    return (
        <React.Fragment>
        {
            props.products.map((product) => {
                return (
                    <CategoryProduct product={product} />
                )
            
        })}
        </React.Fragment>
    );
}

export default CategoryProducts;