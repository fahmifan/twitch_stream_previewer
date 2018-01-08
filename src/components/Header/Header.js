import React from 'react';

export default () => (
  <header className="bg-white black-80 tc pv4 avenir">
    <h1 className="mt2 mb0 baskerville i fw1 f1">Streamers</h1>
    <h2 className="mt2 mb0 f6 fw4 ttu tracked">Twitch User Previewer</h2>
    <nav className="bt bb tc mw7 center mt4">
      <a className="f6 f5-l link bg-animate black-80 hover-bg-light-blue dib pa3 ph4-l" href="/shop">All</a>
      <a className="f6 f5-l link bg-animate black-80 hover-bg-light-pink dib pa3 ph4-l" href="/about">Online</a>
      <a className="f6 f5-l link bg-animate black-80 hover-bg-light-yellow dib pa3 ph4-l" href="/contact">Offline</a>
    </nav>
  </header>
);