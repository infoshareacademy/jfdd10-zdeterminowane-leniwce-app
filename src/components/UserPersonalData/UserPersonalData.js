import React, { Component } from "react";
import "./UserPersonalData.css";

class UserPersonalData extends Component {
  
  static defaultProps = {
    user: {
      avat: '',
      name: 'Jacek',
      surname: 'Noga',
      email: 'k@wp.pl',
      description: 'Lorem Ipsum jest tekstem stosowanym jako przykładowy'
    }
  }

  render() {
    return (
      <div>
        <div className="UserPersonalData-main-profil">
          <img src={this.props.user.avatar} alt="" />
          <div className="UserPersonalData-personal-data">
            <div className="UserPersonalData-name">name: {this.props.user.first_name}</div>
            <div className="UserPersonalData-surname">surname: {this.props.user.last_name}</div>
            <div className="UserPersonalData-surname">email:  {this.props.user.email}</div>
          </div>
        </div>
        <div className="UserPersonalData-description"> About me: {this.props.user.description}</div>
      </div>
    );
  }
}

export default UserPersonalData;
