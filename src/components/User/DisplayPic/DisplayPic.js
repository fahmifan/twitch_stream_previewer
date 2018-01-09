import React from 'react';

export default (props) => {
  return (
    <div className="ph2 m-25">
      <img
        className="br-100 ba h3 w3" 
        src={props.src} 
        alt="steramer"/>
    </div>
  );
}