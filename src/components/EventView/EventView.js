import React, { Component } from 'react';


import { DataContextConsumer } from '../../contexts/DataContext';

class EventView extends Component {



  render() {
    return (
      <DataContextConsumer>
        {
          ({ getEvent }) => {
            const eventId = parseInt(this.props.match.params.eventId)
            const event = getEvent(eventId)

            if (event === undefined) {
              return (
                <div>
                  Loading...
                </div>
              )
            }
            return (
              <div>
                <h1>{event.title}</h1>
                <p>{event.description}</p>
              </div>
            )
          }
        }
      </DataContextConsumer>
    )
  }
}

export default EventView