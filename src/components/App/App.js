
import React, { Component } from 'react';
import EventList from '../EventList/EventList';
import './App.css';


class App extends Component {

  state = {
    events: [],
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
        <EventList eventsData={this.state.events}/>
      </>

    );

  }
}

export default App;
