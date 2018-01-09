import React from 'react';

import DisplayPic from './DisplayPic/DisplayPic';
import DescCard from './DescCard/DescCard';
import pic from '../../logo.svg';

export default () => (
  <div className="w-100 flex items-center mb3">
      <DisplayPic src={pic} />
      <DescCard />
  </div>
);