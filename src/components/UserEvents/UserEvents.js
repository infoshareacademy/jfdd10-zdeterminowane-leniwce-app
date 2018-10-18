import React, { Component } from "react";
import "./UserEvents.css";
import EventList from '../EventList/EventList'

class UserEvents extends Component {



    // todo: trzeba zaimplementować dane!

  render() {
    return (
      <div>
        Eventy, na które się zapisałeś:
        <EventList eventsData={this.props.events}></EventList>
      </div>
      
      
    );
  }
}

export default UserEvents;