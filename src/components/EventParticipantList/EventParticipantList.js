import React, { Component } from "react";
import EventParticipantListItem from '../EventParticipantListItem/EventParticipantListItem'
import { Grid, Typography } from "@material-ui/core";

class EventParticipantList extends Component {
  render() {

    if (this.props.users === undefined) {
      return <div>Loading...</div>;
    }
    return (
      <Grid container item xl={12} lg={12} md={12} sm={12} xs={12} spacing={16} >
        <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
          <Typography color='secondary' variant='h5' paragraph align='center'>

            Users attending this event:
        </Typography>
        </Grid>
        {
          this.props.users &&
            this.props.users.length > 0 ?
            <Grid item container xl={12} lg={12} md={12} sm={12} xs={12} justify='center' spacing={16}>
              {this.props.users.map(
                user => (
                  <Grid item container xl={2} lg={2} md={2} sm={3} xs={12} justify='center' key={user.id}>
                    <EventParticipantListItem

                      userAvatar={user.avatar}
                      id={user.id}
                      userName={user.first_name}
                      userLastName={user.last_name}
                    />
                  </Grid>
                )
              )}
            </Grid> : <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>None </Grid>
        }
      </Grid>
    );
  }
}

export default EventParticipantList;


