
import React, { Component } from 'react';
import HomeView from '../HomeView/HomeView';
import EventParticipantMap from '../EventParticipantMap/EventParticipantMap'

import './App.css';


class App extends Component {

  

  render() {

    return (
      <div className='app-container'>
        <h1>Lazyness Radar</h1>
        <EventParticipantMap/>
        <HomeView  />
      </div>

    );

  }
}

export default App;
