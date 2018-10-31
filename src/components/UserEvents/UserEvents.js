import React, { Component } from "react";
import "./UserEvents.css";
import EventList from '../EventList/EventList'
import { Typography } from "@material-ui/core";

class UserEvents extends Component {

  render() {
    return (
      <div>
        <Typography color='secondary' align='center' paragraph variant='h4'>
          Events that you signed up for:
        </Typography>

        {this.props.events.length > 0 ?
          <EventList eventsData={this.props.events} />
          :
          <Typography align='center' variant='h5'>
            {' NONE ;('}
          </Typography>
        }
      </div>


    );
  }
}

export default UserEvents;