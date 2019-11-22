import React from "react";
import Card from "../Card/Card";
import AddProductToCart from "../../components/AddProductToCart/AddProductToCart";
import Price from "../../components/Price/Price";
import Counter from "../../components/Counter/Counter";

const PriceContainer = (props: {
  price: number;
  variant: any;
  setVariant: (state: any) => void;
  count: number;
  setCount: (state: number) => void;
  basePrice: number;
}) => {
  return (
    <Card color="white" backgroundColor="darkslategray">
      <div className="columns">
        <div className="column">
          <h3 style={{ color: "white" }} className="subtitle is-2">
            <p>
              قیمت: <Price price={props.price} />
              <span style={{ color: "white" }} className="subtitle is-6">
                تومان
              </span>
            </p>
          </h3>
        </div>
        <div className="column">
          <Counter
            count={props.count}
            setCount={props.setCount}
            variant={props.variant}
            setVariant={props.setVariant}
            basePrice={props.basePrice}
          />
          <AddProductToCart
            backgroundColor="darkcyan"
            color="white"
            size="100%"
            title="افزودن به سبد خرید"
          />
        </div>
      </div>
    </Card>
  );
};

export default PriceContainer;
