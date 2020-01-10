import React from "react";

const BoxImage = (props: { image: any }) => {
  return (
    <div className="column">
      <a href={props.image.url}>
        <figure className="image is-16by9">
          <img src={props.image.image} />
        </figure>
      </a>
    </div>
  )
}

export default BoxImage;
