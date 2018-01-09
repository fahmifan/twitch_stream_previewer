import React from 'react';

import NavItem from './NavItem/NavItem';

export default () => (
  <header className="">
    <nav className="helvetica fl w-100 white shadow-3 bg-light-green mb4">
      <ul className="list h-auto pa0 flex items-center justify-around">
        <NavItem>All</NavItem>
        <NavItem>Online</NavItem>
        <NavItem>Offline</NavItem>
      </ul>
    </nav>
  </header>
);