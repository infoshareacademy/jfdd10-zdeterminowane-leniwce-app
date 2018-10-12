import React, { Component } from 'react';
import EventSearcherResults from '../EventSearcherResults/EventSearcherResults'
import EventSearcherForm from '../EventSearcherForm/EventSearcherForm';

class EventSearcher extends Component {

  state = {
    events: [],
    searchQuery: ''
  }

  setSearchQuery = (query) =>
    this.setState({
      searchQuery: query
    })

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
        <EventSearcherForm getSearchQuery={this.setSearchQuery} />
        
        {
          this.state.searchQuery &&
          <p>
            Searched for: &nbsp;<span>{this.state.searchQuery}</span>
          </p>
        }


        <EventSearcherResults eventsData={this.state.events} />

      </>
    )
  }
}

export default EventSearcher