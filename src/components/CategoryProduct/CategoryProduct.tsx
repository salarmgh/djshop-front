import React from "react";

const CategoryProduct = (props: {product: {image: string, title: string, price: number}}) => {
      return (
            <div className="card">
                 <div className="card-image">
                      <figure className="image is-4by3">
                              <img src={props.product.image} alt="Placeholder" />
                      </figure>
                 </div>
                 <div className="card-content">
                      <div className="content">
                           <p>
                               {props.product.title}
                           </p>
                           <p>
                               {props.product.price}
                           </p>
                      </div>
                 </div>
            </div>
      );
}

export default CategoryProduct;