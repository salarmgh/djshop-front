import React from "react";
import Attribute from "../../components/Attribute/Attribute";

const Attributes = (props: { onChange: any, name: string, attributes: { value: string, checked: boolean; }[] }) => {
  return (
    <div className="card-content">
      {
        props.attributes.map((attribute, index) => {
          return (
            <Attribute key={index} onChange={props.onChange} name={props.name} attribute={attribute} />
          )
        })
      }
    </div>
  )
}

export default Attributes;
