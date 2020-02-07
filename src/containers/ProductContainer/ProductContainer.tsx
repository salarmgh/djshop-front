import React from "react";
import Card from "../Card/Card";
import ProductInfo from "../../components/ProductInfo/ProductInfo";
import PriceContainer from "../PriceContainer/PriceContainer";
import Cookies from 'universal-cookie';

const ProductContainer = (props: {
  variant: {
    id: number;
    images: {
      id: number;
      image: string;
      title: string;
    }[];
    name: string;
    product: {
      id: number;
      title: string;
      description: string;
      created_at: string;
      featured: boolean;
      slug: string;
    };
    price: number;
    weight: number;
    attributes: {
      name: string;
      value: string;
    }[];
  };
  setVariant: (state: any) => void;
  count: number;
  setCount: (state: number) => void;
  basePrice: number;
}) => {
  const addToCartHandler = () => {
    const cookies = new Cookies();
    let cart = {};
    if (cookies.get("cart") !== undefined) {
      cart = cookies.get("cart");
    }
    cart[props.variant.id] = props.count;
    cookies.set("cart", JSON.stringify(cart), { path: '/' });
  }
  return (
    <section className="section is-medium">
      <div className="container">
        <div className="columns">
          <div className="column">
            <ProductInfo product={props.variant} />
          </div>
          <div className="column">
            <PriceContainer
              price={props.variant.price}
              variant={props.variant}
              setVariant={props.setVariant}
              count={props.count}
              setCount={props.setCount}
              basePrice={props.basePrice}
              addToCartHandler={addToCartHandler}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductContainer;
