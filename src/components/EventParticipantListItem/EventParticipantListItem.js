import React, { Component } from "react";
import "./EventParticipantListItem.css";

class EventParticipantListItem extends Component {
  render() {
    return (
      <div>
        this is a list item
        {this.props.userName}
          {/* <div className="EventParticipantListItem-description">
          <img className="EventParticipantListItem-image" src={this.props.photoUrl} alt=""/>
          <div className="EventParticipantListItem-description--text"> {this.props.content}</div> 
        </div> */}
      </div>
      
    );
  }
}

export default EventParticipantListItem;