import React, { Component } from "react";
import "./UserProfileView.css";
import UserPersonalData from '../UserPersonalData/UserPersonalData'
import UserEvents from '../UserEvents/UserEvents'

class UserProfileView extends Component {

  

  render() {
    return (
      <div>
        <UserPersonalData></UserPersonalData>
        <UserEvents></UserEvents>
      </div>
    );
  }
}

export default UserProfileView;