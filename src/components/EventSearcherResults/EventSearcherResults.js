import React, { Component } from 'react';
import EventList from '../EventList/EventList'


class EventSearcherResults extends Component {

 

  render() {
    return (
      <>
        <EventList eventsData={this.props.eventsData}/>

      </>
    )
  }
}

export default EventSearcherResults