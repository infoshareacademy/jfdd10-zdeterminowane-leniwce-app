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
          const eventId = this.props.match.params.eventId;
          const event = getEvent(eventId);
          const eventParticipantsIds = event && event.attendingUsers && (Object.entries(event.attendingUsers).map(([id]) => id))

          return (
            <div>
              <Grid container justify='center' >
                <Grid container justify='center' item xs={12} sm={11} md={10} lg={10} xl={10} spacing={16} alignContent='space-between' >
                  <Paper>

                    <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                      <EventDescription
                        event={event} eventParticipantsIds={eventParticipantsIds}
                      />
                    </Grid>

                    <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
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
                    </Grid>

                    <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                      {
                        event &&
                        <EventParticipantMap eventTitle={event.title} locX={event.locationX} locY={event.locationY} />
                      }
                    </Grid>

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
