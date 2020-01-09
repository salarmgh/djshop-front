import React from "react";

const Dots = (props: { images: any, handler: any, active: number }) => {
  return (
    <div style={{ textAlign: "center" }}>
      {props.images.map((image, index) => {
        let active = "";
        if (index === props.active) {
          active = "active";
        }
        return (
          <span key={index} className={`dot ${active}`} onClick={props.handler(index)}></span>
        )
      }
      )}
    </div>
  )
}

export default Dots;
