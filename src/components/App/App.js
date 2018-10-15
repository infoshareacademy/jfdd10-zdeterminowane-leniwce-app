
import React, { Component } from 'react';
import HomeView from '../HomeView/HomeView';
import './App.css';


class App extends Component {

  

  render() {

    return (
      <div className='app-container'>
        <h1>Lazyness Radar</h1>
        <HomeView  />
        <h1>KOmponent 1</h1>
        <h1>KOmponent 2</h1>
        <h1>KOmponent 3</h1>
      </div>

    );

  }
}

export default App;
