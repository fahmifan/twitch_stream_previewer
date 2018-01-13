import React from 'react';

export default (props) => (
  <li className="dib v-top pv1 link dim black b pointer center tc f1 font-vt323">
    <a href="https://www.twitch.tv/" className="link black">
      {props.children}
    </a>
  </li>
);