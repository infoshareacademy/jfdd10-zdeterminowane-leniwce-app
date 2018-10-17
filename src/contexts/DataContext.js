import React, { Component } from "react";

const DataContext = React.createContext();

// export const DataProvider = DataContext.Provider
export const DataContextConsumer = DataContext.Consumer;

export class DataProvider extends Component {
  state = {
    events: []
  };


  componentDidMount() {
    fetch('/data-storage/events.json').then(
      response => response.json()
    ).then(
      events => this.setState({ events: events })
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
