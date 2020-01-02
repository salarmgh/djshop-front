import React from "react";
import Card from "../Card/Card";
import ProductInfo from "../../components/ProductInfo/ProductInfo";
import PriceContainer from "../PriceContainer/PriceContainer";

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
  return (
    <Card color="white" backgroundColor="#414141">
      <ProductInfo product={props.variant} />
      <PriceContainer
        price={props.variant.price}
        variant={props.variant}
        setVariant={props.setVariant}
        count={props.count}
        setCount={props.setCount}
        basePrice={props.basePrice}
      />
    </Card>
  );
};

export default ProductContainer;