import React from "react";

const CategoryProduct = (props: {product: {image: string, title: string, desc: string, price: string}}) => {
      return (
      <div className="column is-one-quarter">
            <div className="card">
                 <div className="card-image">
                      <figure className="image is-4by3">
                              <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image" />
                      </figure>
                 </div>
                 <div className="card-content">
                      <div className="content">
                           Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                           Phasellus nec iaculis mauris. <a>@bulmaio</a>.
                           <a href="#">#css</a> <a href="#">#responsive</a>
                      </div>
                 </div>
            </div>
      </div>
      );
}

export default CategoryProduct;