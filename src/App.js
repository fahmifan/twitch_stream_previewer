import React, { Component } from 'react';
import Header from './components/Header/Header';
import axios from 'axios';

import Previewer from './containers/Previewer/Previewer';

class App extends Component {
   
  render() {
    return (
      <span>
        <Header />
        <Previewer />
      </span>
    );
  }
}

export default App;
