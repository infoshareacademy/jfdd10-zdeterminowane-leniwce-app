import React, { Component } from "react";

const DataContext = React.createContext();

// export const DataProvider = DataContext.Provider
export const DataContextConsumer = DataContext.Consumer;

export class DataProvider extends Component {
  state = {
    events: [],
    users: []
  };


  componentDidMount() {
    fetch('/data-storage/events.json').then(
      response => response.json()
    ).then(
      events => this.setState({ events: events })
    );
    // fetch('/data-storage/users.json').then(
    //   response => response.json()
    // ).then(
    //   users => this.setState({ users: users })
    // );
  }

  render() {
    return (
      <DataContext.Provider value={this.state}>
        {this.props.children}
      </DataContext.Provider>
    );
  }
}
