import React, { Component } from "react";
import "./UserProfileView.css";
import UserPersonalData from '../UserPersonalData/UserPersonalData'
import UserEvents from '../UserEvents/UserEvents'

class UserProfileView extends Component {

  

  render() {
    return (
      <div className="UserProfileView-container">
      <div className="UserPersonalData-container">
        <UserPersonalData></UserPersonalData>
      </div>
      <div className="UserEvents-container">
        <UserEvents></UserEvents>
        </div>
      </div>
    );
  }
}

export default UserProfileView;