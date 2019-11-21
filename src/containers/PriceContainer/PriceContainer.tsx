import React from "react";
import Card from "../Card/Card";
import AddProductToCart from "../../components/AddProductToCart/AddProductToCart";
import Price from "../../components/Price/Price";
import "./number.css";

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
          <button
            className="button"
            style={{
              color: "white",
              backgroundColor: "darkcyan",
              border: 0,
              borderRadius: 0,
              width: "33%"
            }}
            onClick={event => {
              if (props.count > 1) {
                props.setCount(props.count - 1);
                props.variant.price = props.basePrice * (props.count - 1);
                props.setVariant(props.variant);
              }
            }}
          >
            -
          </button>
          <input
            type="number"
            className="input number-input has-text-centered"
            style={{
              color: "white",
              backgroundColor: "darkcyan",
              marginBottom: "20px",
              width: "34%",
              border: "0",
              borderRadius: "0"
            }}
            value={props.count}
          />
          <button
            className="button"
            style={{
              color: "white",
              backgroundColor: "darkcyan",
              border: 0,
              borderRadius: 0,
              width: "33%"
            }}
            onClick={event => {
              props.setCount(props.count + 1);
              props.variant.price = props.basePrice * (props.count + 1);
              props.setVariant(props.variant);
            }}
          >
            +
          </button>
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
