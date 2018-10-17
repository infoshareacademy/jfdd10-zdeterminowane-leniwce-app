import React, { Component } from 'react';
import EventSearcherResults from '../EventSearcherResults/EventSearcherResults'
import EventSearcherForm from '../EventSearcherForm/EventSearcherForm';

class EventSearcher extends Component {

  state = {
    query: '',
  }

  setSearchQuery = (query) =>
    this.setState({
      query: query
    })

  

  // getFilteredEvents2 = () => this.state.events.filter((event) => {
  //     let eventTitle = event.title.toLowerCase();
  //     let eventDescription = event.description.toLowerCase();
  //     return eventTitle.includes(this.state.query.toLowerCase()) || eventDescription.includes(this.state.query.toLowerCase())
  //   })

  getFilteredEvents = () => this.props.eventsData.filter(
    event => [event.title, event.description].map(
      phrase => phrase.toLowerCase()
      ).some(phrase => phrase.includes(this.state.query.toLocaleLowerCase())))
  


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