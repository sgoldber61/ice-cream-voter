import React from 'react';

const Candidate = props => { // flavor, likes
  return (
    <div className="row">
      <div>{props.flavor}</div>
      <div>{props.likes}</div>
      <div><button onClick={() => props.clickEvent(props.flavor)}>⬆️</button></div>
    </div>
  )
};

export default Candidate;