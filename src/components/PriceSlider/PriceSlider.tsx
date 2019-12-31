import React from "react";
import 'rc-slider/assets/index.css';

const PriceSlider = (props: {min: number, max: number, defaultMin: number, defaultMax: number}) => {
    const Slider = require('rc-slider');
    const createSliderWithTooltip = Slider.createSliderWithTooltip;
    const Range = createSliderWithTooltip(Slider.Range);

    return (
        <div className="card">
            <div className="card-content">
                <Range min={props.min} max={props.max} defaultValue={[props.defaultMin, props.defaultMax]} allowCross={false} step={1000}/>
            </div>
        </div>
    )
}

export default PriceSlider;