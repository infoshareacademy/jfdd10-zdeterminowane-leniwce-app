import React, { Component } from 'react';
import EventSearcher from '../EventSearcher/EventSearcher'
import { DataContextConsumer } from '../../contexts/DataContext';

class HomeView extends Component {
  render() {
    return (
      <>
        <DataContextConsumer>
          {
            ({ events, users }) => {
              if (events === null) {
                return (
                  <div>
                    Loading...
                  </div>
                )
              }

              return (
                <div>
                  {
                    events && <EventSearcher eventsData={events} />
                  }
                </div>
              )
            }
          }
        </DataContextConsumer>
      </>
    )
  }
}

export default HomeView