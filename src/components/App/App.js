
import React, { Component } from 'react';
import HomeView from '../HomeView/HomeView';
import './App.css';


class App extends Component {

  

  render() {

    return (
      <div className='app-container'>
        <h1>Lazyness Radar</h1>
        <HomeView  />
      </div>

    );

  }
}

export default App;
