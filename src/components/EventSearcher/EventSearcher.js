import React, { Component } from 'react';
import EventSearcherResults from '../EventSearcherResults/EventSearcherResults'
import EventSearcherForm from '../EventSearcherForm/EventSearcherForm';

class EventSearcher extends Component {

  state = {
    events: [],
    query: '',
  }

  setSearchQuery = (query) =>
    this.setState({
      query: query
    })

  componentDidMount() {
    fetch('/data-storage/events.json').then(
      response => response.json()
    ).then(
      events => this.setState({ events: events })
    );
  }

  getFilteredEvents = () => this.state.events.filter((event) => {
      let eventTitle = event.title.toLowerCase()
      return eventTitle.includes(this.state.query)
    })
  


  render() {
    return (
      <>
        <EventSearcherForm getSearchQuery={this.setSearchQuery} />
    
        

        <EventSearcherResults eventsData={this.getFilteredEvents()} searchQuery={this.state.query}/>

      </>
    )
  }
}

export default EventSearcher