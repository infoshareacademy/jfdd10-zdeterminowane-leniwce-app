import React, { Component } from 'react';
import EventSearcherResults from '../EventSearcherResults/EventSearcherResults'

class EventSearcher extends Component {

  state = {
    events: [],
    searchQuery: 'spirit'
  }

  componentDidMount() {
    fetch('/data-storage/events.json').then(
      response => response.json()
    ).then(
      events => this.setState({ events: events })
    );
  }


  render() {
    return (
      <>
        <EventSearcherResults eventsData={this.state.events} />

      </>
    )
  }
}

export default EventSearcher