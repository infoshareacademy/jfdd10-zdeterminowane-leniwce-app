import React, { Component } from 'react';
import EventSearcher from '../EventSearcher/EventSearcher'
import { DataContextConsumer } from '../../contexts/DataContext';

class HomeView extends Component {



  render() {
    return (
      <>
        <DataContextConsumer>
          {
            ({ events, users }) => (
              <EventSearcher eventsData={events} />
            )
          }
        </DataContextConsumer>

      </>
    )
  }
}

export default HomeView