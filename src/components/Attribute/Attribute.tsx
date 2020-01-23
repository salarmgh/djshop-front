import React from "react";
import "bulma-checkradio";

const Attribute = (props: { onChange: any, name: string, attribute: { value: string, checked: boolean; }; }) => {
  return (
    <div className="field">
      <input className="is-checkradio is-rtl is-circle is-black" id={props.attribute.value} onChange={props.onChange} value={props.name + "|" + props.attribute.value} checked={props.attribute.checked} type="checkbox" />
      <label htmlFor={props.attribute.value}>{props.attribute.value}</label>
    </div>
  )
}

export default Attribute;
