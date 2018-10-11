import React, { Component } from 'react';
import './App.css';
import UserPersonalData from '../UserPersonalData/UserPersonalData'

class App extends Component {
  render() {
    return (
      <UserPersonalData foo={'bar'}/>
    );
  }
}

export default App;
