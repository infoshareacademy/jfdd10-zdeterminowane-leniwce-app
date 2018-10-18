import React, { Component } from 'react';
import EventDescription from  '../EventDescription/EventDescription'
import EventParticipantMap from '../EventParticipantMap/EventParticipantMap'
import EventParticipantList from '../EventParticipantList/EventParticipantList'



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
                <EventDescription description={event.description}/>
                <EventParticipantList/>
                <EventParticipantMap/>
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






