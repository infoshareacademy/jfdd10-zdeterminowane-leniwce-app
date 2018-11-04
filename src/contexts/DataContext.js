import React, { Component } from "react";
import firebase from 'firebase'
import firebasecfg from "../firebasecfg";


const DataContext = React.createContext();

firebase.initializeApp(firebasecfg);

export const DataContextConsumer = DataContext.Consumer;

export class DataProvider extends Component {
  state = {
    events: [],
    users: [],
    getEvent: (eventId) => this.state.events.find(event => event.id === eventId),
    getUser: (userId) => this.state.getUsersWithEvents().find(user => user.id === userId),
    getUsersWithEvents: () => this.state.users.map(
      user => ({
        ...user, events: this.state.events.filter(
          event => (Object.entries(event.attendingUsers || {}).map(([id]) => id)).includes(user.id)
        )
      })
    )
  };

  eventsRef = firebase.database().ref().child('events');
  usersRef = firebase.database().ref().child('users');

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

  listenUsers = () => {
    this.usersRef.on('value', snapshot => {
      this.setState({
        users: Object.entries(snapshot.val() || {}).map(([id, value]) => ({
          id,
          ...value
        })
        )
      })
    })
  }

  componentDidMount() {
    this.listenEvents();
    this.listenUsers();
  }

  render() {
    return (
      <DataContext.Provider value={this.state}>
        {this.props.children}
      </DataContext.Provider>
    );
  }
}
