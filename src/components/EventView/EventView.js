import React, { Component } from "react";
import EventDescription from "../EventDescription/EventDescription";
import EventParticipantMap from "../EventParticipantMap/EventParticipantMap";
import EventParticipantList from "../EventParticipantList/EventParticipantList";

import { DataContextConsumer } from "../../contexts/DataContext";
import { Paper, Grid } from "@material-ui/core";

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
              <Grid container justify='center' >
                <Grid item lg={10} md={10} sm>
                  <Paper>
                    <Paper>
                      <EventDescription
                        event={event}
                      />
                    </Paper>
                    <Paper>
                      {
                        event &&
                        event.attendingUsers &&
                        eventParticipantsIds &&
                        <EventParticipantList
                          users={eventParticipantsIds.map(
                            eventParticipantId => users.find(
                              user => user.id === eventParticipantId
                            )
                          ).filter(Boolean)
                          } />
                      }
                    </Paper>
                    <Paper>
                      {
                        event &&
                        <EventParticipantMap eventTitle={event.title} locX={event.locationX} locY={event.locationY} />

                      }
                    </Paper>



                  </Paper>



                </Grid>
              </Grid>



            </div>
          );
        }}
      </DataContextConsumer>
    );
  }
}

export default EventView;
