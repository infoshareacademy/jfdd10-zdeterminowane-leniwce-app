import React, { Component } from "react";
import "./EventParticipantListItem.css";
import { Grid, Typography, Paper } from "@material-ui/core";
import { Link } from "react-router-dom";


class EventParticipantListItem extends Component {
  render() {
    return (
      <Grid item>
        <Paper
        component={Link}
        to={`/user/${this.props.id}`}
        >
          <Typography  align='center'>

            <img src={this.props.userAvatar} alt='user avatar'></img>

          </Typography>
          <Typography color='primary' align='center'>
            {this.props.userName}
          </Typography>
          <Typography color='primary' paragraph align='center'>
            {this.props.userLastName}

          </Typography>
        </Paper>


      </Grid>

    );
  }
}

export default EventParticipantListItem;