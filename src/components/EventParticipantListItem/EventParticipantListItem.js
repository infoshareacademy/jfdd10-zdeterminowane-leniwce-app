import React, { Component } from "react";
import "./EventParticipantListItem.css";
import { Grid, Typography, Paper, Button } from "@material-ui/core";
import { Link } from "react-router-dom";


class EventParticipantListItem extends Component {
  render() {
    return (
      <Grid item>
        <Button>
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
        </Button>

      </Grid>

    );
  }
}

export default EventParticipantListItem;