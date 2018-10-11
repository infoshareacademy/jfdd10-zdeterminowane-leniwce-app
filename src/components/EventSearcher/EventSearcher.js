import React, { Component } from 'react';
import EventSearcherResults from '../EventSearcherResults/EventSearcherResults'

class EventSearcher extends Component {

  state = {
    searchQuery: 'spirit'
  }


  render() {
    return (
      <>
        <EventSearcherResults eventsData={this.props.eventsData} />

      </>
    )
  }
}

export default EventSearcher