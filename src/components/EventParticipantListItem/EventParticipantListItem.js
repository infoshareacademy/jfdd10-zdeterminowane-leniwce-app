import React, { Component } from "react";
import "./EventParticipantListItem.css";

class EventParticipantListItem extends Component {
  render() {
    return (
      <div>
        
        <img src={this.props.userAvatar} alt='user avatar'></img>
        <p>{this.props.userName}</p>

        <p>{this.props.userLastName}</p>

      </div>

    );
  }
}

export default EventParticipantListItem;