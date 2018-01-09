import React from 'react';

export default (props) => {
  return (
    <div className="pa3">
      <img
        className="br-100 ba h3 w3 dib" 
        src={props.src} 
        alt="steramer"/>
    </div>
  );
}