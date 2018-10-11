import React, { Component } from 'react';
import HomeView from '../HomeView/HomeView';
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
      <div className='app-container'>
        <h1>Lazyness Radar</h1>
        <HomeView eventsData={this.state.events} />
      </div>

    );
  }
}

export default App;
