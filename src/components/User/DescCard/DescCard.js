import React from 'react';

const descCard = (props) => (
  <div className="h3 w-75 mr2">
    <div className="flex items-center flex-column pt2 helvetica h-100">
      <p className="ma0 tc b"><a 
        href={props.url}
        className="link black dim pointer"
        >{props.display_name}</a></p>
      <p className="ma0 tc i">{props.isOnline ? props.game : 'Offline'}</p>
      <p className="ma0 h-100 overflow-x-auto pa2 tc">{props.status}</p>
    </div>
  </div>
);

export default descCard;