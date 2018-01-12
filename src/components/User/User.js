import React, { Component } from 'react';
import axios from 'axios';

import DisplayPic from './DisplayPic/DisplayPic';
import DescCard from './DescCard/DescCard';
import pic from '../../logo.svg';

export default () => (
  <div className="w-90 pa2 flex flex-row items-center mb1 br3 shadow-4 bg-light-green">
      <DisplayPic src={pic} />
      <DescCard />
  </div>
);