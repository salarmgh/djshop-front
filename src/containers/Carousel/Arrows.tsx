import React from 'react';

const Arrows = (props: { handler: any }) => {
  return (
    <React.Fragment>
      <a className="prev" onClick={props.handler(-1)}>&#10094;</a>
      <a className="next" onClick={props.handler(1)}>&#10095;</a>
    </React.Fragment>
  )
};

export default Arrows;
