import React, { Component } from "react";
import EventParticipantListItem from '../EventParticipantListItem/EventParticipantListItem'

class EventParticipantList extends Component {
  render() {

    if (this.props.users === undefined) {
      return <div>Loading...</div>;
    }
    return (
      <div className='user-list-container'>
        {console.log(this.props.users)}

        test 1 2 3
        {

          this.props.users ?
            <div>
              {this.props.users.map(
                user => (
                  <div key={user.id}>

                    <EventParticipantListItem
                      userAvatar={user.avatar}
                      id={user.id}
                      userName={user.first_name}
                      userLastName={user.last_name} />


                  </div>
                )
              )}

            </div>
            : <div> Loading ... </div>
        }
      </div>

    );
  }
}

export default EventParticipantList;


