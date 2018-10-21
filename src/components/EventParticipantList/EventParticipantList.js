import React, { Component } from "react";
import EventParticipantListItem from '../EventParticipantListItem/EventParticipantListItem'
import { Grid, Typography } from "@material-ui/core";

class EventParticipantList extends Component {
  render() {

    if (this.props.users === undefined) {
      return <div>Loading...</div>;
    }
    return (
      <Grid container item lg={12} md={12} sm={12} xs={12} >
        <Grid item lg={12} md={12} sm={12} xs={12}>
        <Typography  color='secondary' variant='h5' paragraph align='center'>

        Users attending this event:
        </Typography>
        </Grid>
        {

          this.props.users &&
          this.props.users.length > 0 ?
          <Grid item container lg={12} md={12} sm={12} xs={12} justify='center'>
            {this.props.users.map(
              user => (
         

                  <EventParticipantListItem
                    key={user.id}
                    userAvatar={user.avatar}
                    id={user.id}
                    userName={user.first_name}
                    userLastName={user.last_name}
                  />


     
              )
            )}

          </Grid> : <Grid item>None </Grid>

        }
      </Grid>

    );
  }
}

export default EventParticipantList;


