import React from 'react';

export default navitem = (props) => (
  <li className="dib v-top pa2 link dim black b pointer tc">
    {props.children}
  </li>
);