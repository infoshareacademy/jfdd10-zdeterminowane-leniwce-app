import React, { Component } from "react";
import "./UserPersonalData.css";

class UserPersonalData extends Component {
  render() {
    return (
      <div>
        <div className="main-profil">
          <img src={this.props.user.avatar} alt="" />
          <div className="personalData">
            <div className="name">{this.props.user.name}</div>
            <div className="surname">{this.props.user.surname}</div>
          </div>
        </div>
        <div className="description">{this.props.user.description}</div>
      </div>
    );
  }
}

export default UserPersonalData;
