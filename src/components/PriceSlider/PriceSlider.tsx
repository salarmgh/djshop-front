import React from "react";
import Price from "../Price/Price";
import 'rc-slider/assets/index.css';

const PriceSlider = (props: { onChange: any, min: number, max: number, currentMin: number, currentMax: number }) => {
  const Slider = require('rc-slider');
  const createSliderWithTooltip = Slider.createSliderWithTooltip;
  const Range = createSliderWithTooltip(Slider.Range);

  return (
    <div className="card">
      <div className="card-content">
        <h5 className="title is-5">قیمت</h5>
        <Range onAfterChange={props.onChange} min={props.min} max={props.max} allowCross={false} defaultValue={[props.currentMin, props.currentMax]} pushable={true} />
        <div className="columns">
          <div className="column">
            از <Price price={props.currentMin} /> تومان
          </div>
          <div className="column">
            تا <Price price={props.currentMax} /> تومان
          </div>
        </div>
      </div>
    </div>
  )
}

export default PriceSlider;
