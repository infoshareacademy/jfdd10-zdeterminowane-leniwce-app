import React, { Component } from "react";
import "./EventParticipantListItem.css";
import { Typography, Paper, Button } from "@material-ui/core";
import { Link } from "react-router-dom";

class EventParticipantListItem extends Component {
  render() {
    return (
        <Button>
          <Paper
            component={Link}
            to={`/user/${this.props.id}`}
            style={{ 
              textDecoration: 'none',
              width: 150
           }}
          >
            <Typography align='center'>
              <img src={this.props.userAvatar} alt='user avatar' style={{maxWidth: 100}}></img>
            </Typography>

            <Typography color='primary' align='center'>
              {this.props.userName}
            </Typography>

            <Typography color='primary' paragraph align='center'>
              {this.props.userLastName}
            </Typography>

          </Paper>
        </Button>
    );
  }
}

export default EventParticipantListItem;