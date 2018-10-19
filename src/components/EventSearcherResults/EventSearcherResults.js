import React, { Component } from 'react';
import EventList from '../EventList/EventList'
// import PropTypes from 'prop-types';


class EventSearcherResults extends Component {

  static defaultProps = {
    searchQuery: ''
  }


  render() {
    return (
      <>
        <div>
          <h1>Event List</h1>

         
          <EventList eventsData={this.props.eventsData} />

        </div>

      </>
    )
  }
}

export default EventSearcherResults