import React, { Component } from "react";
import "./UserPersonalData.css";

class UserPersonalData extends Component {
  
  static defaultProps = {
    user: {
      avatar: '',
      name: 'Jacek',
      surname: 'Noga',
      description: 'Lorem Ipsum jest tekstem stosowanym jako przykładowy'
    }
  }

  render() {
    return (
      <div>
        <div className="UserPersonalData-main-profil">
          <img src={this.props.user.avatar} alt="" />
          <div className="UserPersonalData-personal-data">
            <div className="UserPersonalData-name">{this.props.user.name}</div>
            <div className="UserPersonalData-surname">{this.props.user.surname}</div>
          </div>
        </div>
        <div className="UserPersonalData-description">{this.props.user.description}</div>
      </div>
    );
  }
}

export default UserPersonalData;
