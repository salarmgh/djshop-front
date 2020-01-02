import React from "react";
import Attributes from "../Attributes/Attributes";

const Filters = (props: { onChange: any, attributes: { id: number; name: string; attributes: { value: string; checked: boolean }[]; }[] }) => {
  return (
    <React.Fragment>
      {
        props.attributes.map((attribute, index) => {
          return (
            <div key={index} className="card">
              <p>{attribute.name}</p>
              <Attributes onChange={props.onChange} name={attribute.name} attributes={attribute.attributes} />
            </div>
          )
        })
      }
    </React.Fragment>


  )
}

export default Filters;
