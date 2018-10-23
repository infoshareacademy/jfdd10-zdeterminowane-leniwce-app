import React, { Component } from "react";
import firebase from 'firebase'
import firebasecfg from "../firebasecfg";

const DataContext = React.createContext();

firebase.initializeApp(firebasecfg);

// export const DataProvider = DataContext.Provider
export const DataContextConsumer = DataContext.Consumer; 

export class DataProvider extends Component {
  state = {
    events: [],
    users: [],
    getEvent: (eventId) => this.state.events.find(event => event.id === eventId),
    getUser: (userId) => this.state.users.find(user => user.id === userId),

  };

  eventsRef = firebase.database().ref().child('events');

  listenEvents = () => {
    this.eventsRef.on('value', snapshot => {
      this.setState({
        events: Object.entries(snapshot.val() || {}).map(([id, value]) => ({
          id,
          ...value
        })
        )
      })
    })
  }

  componentDidMount() {
    this.listenEvents();
    fetch('/data-storage/users.json').then(
      response => response.json()
    ).then(
      users => this.setState({ users: users })
    );
  }

  render() {
    return (
      <DataContext.Provider value={this.state}>
        {this.props.children}
      </DataContext.Provider>
    );
  }
}
