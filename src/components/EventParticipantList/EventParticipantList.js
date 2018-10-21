import React, { Component } from "react";
import EventParticipantListItem from '../EventParticipantListItem/EventParticipantListItem'

class EventParticipantList extends Component {
  render() {
    return (
      <div className='user-list-container'>
        {
          // this.props.users.map(
          //   user => (
          //     <div className='event-list-item-wrapper' >
                
          //         <EventParticipantListItem
          //         userAvatar={user.avatar}
          //         id={user.id}
          //         userName={user.first_name}
          //         userLastName={user.last_name} />
                
                
          //     </div>
          //   )
          // )
        }
      </div>
  
    );
  }
}

export default EventParticipantList;


