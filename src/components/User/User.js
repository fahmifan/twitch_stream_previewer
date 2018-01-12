import React, { Component } from 'react';
import axios from 'axios';

import DisplayPic from './DisplayPic/DisplayPic';
import DescCard from './DescCard/DescCard';

class User extends Component {
  state = {
    streamData: {},
  }

  componentWillMount() {
    const username = this.props.username;

    this.getUserData(username, 'streams')
      .then(res => {
        this.setState({
          streamData: res.data
        })
      })  
  }

  getUserData = (username, type) => {
    const base_url = "https://wind-bow.glitch.me/twitch-api/";
    return axios.get(`${base_url}/${type}/${username}`);
  }

  render() {
  <div className="w-90 pa2 flex flex-row items-center mb1 br3 shadow-4 bg-light-green">
      <DisplayPic src={pic} />
      <DescCard />
  </div>
);