import React from "react";
import Attributes from "../Attributes/Attributes";
import styles from "./Filters.module.scss";

const Filters = (props: { onChange: any, attributes: { id: number; name: string; attributes: { value: string; checked: boolean }[]; }[] }) => {
  return (
    <React.Fragment>
      {
        props.attributes.map((attribute, index) => {
          return (
            <div key={index} className={`card ${styles.filter}`}>
              <div className="card-content">
                <h5 className="title is-5">{attribute.name}</h5>
                <Attributes onChange={props.onChange} name={attribute.name} attributes={attribute.attributes} />
              </div>
            </div>
          )
        })
      }
    </React.Fragment>


  )
}

export default Filters;
