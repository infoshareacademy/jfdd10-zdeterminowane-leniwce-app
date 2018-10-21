import React, { Component } from "react";
import "./UserEvents.css";
import EventList from '../EventList/EventList'
import { Typography } from "@material-ui/core";

class UserEvents extends Component {

  render() {
    return (
      <div>
        <Typography variant='h4'>
          Events that you singed up:
  
        </Typography>
        <EventList eventsData={this.props.events}></EventList>
      </div>


    );
  }
}

export default UserEvents;