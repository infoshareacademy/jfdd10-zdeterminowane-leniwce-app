import React, { Component } from "react";
import EventParticipantListItem from '../EventParticipantListItem/EventParticipantListItem'

class EventParticipantList extends Component {
  render() {
    return (
      <div className='user-list-container'>

        {
                console.log(this.props.usersData)

          // this.props.usersData.map(
          //   user => (
          //     <div className='event-list-item-wrapper' key={user.id}>
                
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


