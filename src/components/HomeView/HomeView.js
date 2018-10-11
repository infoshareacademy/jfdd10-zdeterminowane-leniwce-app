import React, { Component } from 'react';
import EventSearcher from '../EventSearcher/EventSearcher'

class HomeView extends Component {

 

  render() {
    return (
      <>
        <EventSearcher eventsData={this.props.eventsData}/>

      </>
    )
  }
}

export default HomeView