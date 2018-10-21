import React, { Component } from "react";
import EventDescription from "../EventDescription/EventDescription";
import EventParticipantMap from "../EventParticipantMap/EventParticipantMap";
import EventParticipantList from "../EventParticipantList/EventParticipantList";

import { DataContextConsumer } from "../../contexts/DataContext";

class EventView extends Component {
  render() {
    return (
      <DataContextConsumer>
        {({ getEvent, users }) => {
          const eventId = parseInt(this.props.match.params.eventId);
          const event = getEvent(eventId);
          const eventParticipantsIds = event && event.attendingUsers


          return (
            <div>
              <EventDescription
                event={event}
              />

              <div>
                {
                  event &&
                  event.attendingUsers &&
                  eventParticipantsIds &&
                  <EventParticipantList
                    users={eventParticipantsIds.map(
                      eventParticipantId => users.find(
                        user => user.id === eventParticipantId
                      )
                    )
                  } />
                }
              </div>


                <div>
                  {
                    event &&
                    <EventParticipantMap eventTitle={event.title} locX={event.locationX} locY={event.locationY}/>

                  }
                </div>

            </div>
          );
        }}
      </DataContextConsumer>
    );
  }
}

export default EventView;
