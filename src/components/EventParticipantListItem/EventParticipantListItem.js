import React, { Component } from "react";
import "./EventParticipantListItem.css";
import { Grid, Typography, Paper } from "@material-ui/core";

class EventParticipantListItem extends Component {
  render() {
    return (
      <Grid item>
        <Paper>
          <Typography paragraph align='center'>

            <img src={this.props.userAvatar} alt='user avatar'></img>
            <Typography color='primary' paragraph>
              <p>{this.props.userName}</p>

              <p>{this.props.userLastName}</p>
            </Typography>
          </Typography>

        </Paper>


      </Grid>

    );
  }
}

export default EventParticipantListItem;