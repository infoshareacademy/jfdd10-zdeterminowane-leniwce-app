import React, { Component } from "react";

class UserPersonalData extends Component {
  render() {
    return (
      <div>
        <div>
          <img src={this.props.user.avatar} alt="" />
        </div>
        <div className="name">{this.props.user.name}</div>
        <div className="surename">{this.props.user.surename}</div>
        <div className="discription">{this.props.user.description}</div>
      </div>
    );
  }
}

export default UserPersonalData;
