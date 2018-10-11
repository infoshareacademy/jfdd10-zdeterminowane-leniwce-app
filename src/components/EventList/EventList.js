import React, { Component } from 'react';
import EventListItem from '../EventListItem/EventListItem';
import './EventList.css';



class EventList extends Component {
  render() {
    return (
      <>
        <h1>Event List</h1>

        <div className='event-list'>
          {
            this.props.eventsData.map(
              event => (
                <EventListItem key={event.id} eventIcon={event.url} eventTitle={event.title} eventDescription={event.description}/>

              )
            )
          }


        </div>
      </>
    )
  }
}

export default EventList