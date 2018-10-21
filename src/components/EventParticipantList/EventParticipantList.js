import React, { Component } from "react";
import EventParticipantListItem from '../EventParticipantListItem/EventParticipantListItem'

class EventParticipantList extends Component {
  render() {
    return (
      <div className='user-list-container'>
        {
          this.props.eventsData.map(
            user => (
              <div className='event-list-item-wrapper' key={user.id}>
                
                  <EventParticipantListItem eventIcon={user.icon} id={user.id} userTitle={user.title} userDescription={user.description} />
                
                <div className='user-list-item-show'>
                  

                </div>
              </div>
            )
          )
        }
      </div>
  
    );
  }
}

export default EventParticipantList;


