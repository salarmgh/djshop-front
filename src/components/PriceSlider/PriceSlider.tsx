import React from "react";
import 'rc-slider/assets/index.css';

const PriceSlider = (props: { onChange: any, min: number, max: number, currentMin: number, currentMax: number }) => {
  const Slider = require('rc-slider');
  const createSliderWithTooltip = Slider.createSliderWithTooltip;
  const Range = createSliderWithTooltip(Slider.Range);

  return (
    <div className="card">
      <div className="card-content">
        <Range onAfterChange={props.onChange} min={props.min} max={props.max} allowCross={false} defaultValue={[props.currentMin, props.currentMax]} pushable={true} />
      </div>
    </div>
  )
}

export default PriceSlider;
