import React from "react";

const Attribute = (props: { onChange: any, name: string, attribute: { value: string; }; }) => {
      return (
      <div>
            <label className="checkbox">
              <input onChange={props.onChange} value={props.name + "|" + props.attribute.value} type="checkbox" />
              {props.attribute.value}
            </label>
      </div>
      )
}

export default Attribute;