import React, { Component } from "react";
import "./UserEvents.css";
import EventList from '../EventList/EventList'
import { Typography } from "@material-ui/core";

class UserEvents extends Component {

  render() {
    return (
      <div>
        <Typography color='secondary' align='center' variant='h4'>
          Events that you signed up for:
  
        </Typography>
        <EventList eventsData={this.props.events}></EventList>
      </div>


    );
  }
}

export default UserEvents;