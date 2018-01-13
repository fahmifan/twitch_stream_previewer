import React, { Component } from 'react';
import axios from 'axios';

import User from '../../components/User/User';

class Users extends Component {
  state = {
    users: [
      "ESL_SC2", 
      "OgamingSC2", 
      "cretetion", 
      "freecodecamp", 
      "storbeck", 
      "habathcx", 
      "RobotCaleb", 
      "noobs2ninjas"
    ],
    usersData: [],
    isLoading: true,
  }

  componentDidMount() {
    this.loadUsers();
  }

  loadUsers = () => {
    this.state.users.forEach(user => {
      this.getUserData(user, 'users')
        .then(res => {
          let usersData = [...this.state.usersData];
          usersData.push(res.data);
          this.setState({usersData: usersData});
        })
    })
  }

  /**
   * Get a user data from a endpoint /:type/:user 
   * @param type : string['channels', 'streams', 'users']
   */
  getUserData = (user, type) => {
    const base_url = "https://wind-bow.glitch.me/twitch-api/";
    return axios.get(`${base_url}/${type}/${user}`);
  }
 
  render() {
    let userCard = this.state.usersData.map( (userData, index) => {
          return <User
            key={userData._id} 
            displayPic={userData.logo}
            display_name={userData.display_name} 
            username={userData.name}
            url={userData.url} />
    });
    const loadSpinner = <div className="loader mw-50 mt3"></div>

    if(this.state.isLoading) {
      userCard = loadSpinner;
      }

    return (
      <div className="w-70-ns w-100 center h-100 flex flex-column items-center mb4 bg-washed-red">
      { userCard }
      </div>
    );
  }
}

export default Users;