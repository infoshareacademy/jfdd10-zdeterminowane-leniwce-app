import React, { Component } from "react";
import "./UserEvents.css";
import EventList from '../EventList/EventList'

class UserEvents extends Component {

  render() {
    return (
      <div>
        Events that you singed up:
        <EventList eventsData={this.props.events}></EventList>
      </div>
      
      
    );
  }
}

export default UserEvents;