import React, { Component } from "react";
import "./EventDescription.css";
import { Typography, Grid, Button } from "@material-ui/core";
import BackButton from "../BackButton/BackButton";
import { withAuthContext } from "../../contexts/AuthContext";
import firebase from 'firebase'


const joinEvent = (eventId, userId) => {
  firebase.database().ref(`events/${eventId}/attendingUsers`).update({
    [userId]: true
  })
}
class EventDescription extends Component {


  render() {
    const { user } = this.props.authContext;
    const eventParticipantsIds = this.props.event && this.props.event.attendingUsers && this.props.eventParticipantsIds

    if (this.props.event === undefined) {
      return <div>Loading...</div>;
    }

    const checkAttendingUsers = () => {
      if (this.props.event.attendingUsers) {
        return (eventParticipantsIds
          .find(eventParticipantId => user.uid === eventParticipantId) ?
          (
            <Button fullWidth variant='contained' size='large' disabled >Already joined</Button>
          )
          :
          (
            <Button
              onClick={() => joinEvent(this.props.event.id, user.uid)}
              variant='contained'
              fullWidth
              color='primary'
              size='large'>Join this Event</Button>
          )
        )
      } else {
        return (
          <Button
            onClick={() => joinEvent(this.props.event.id, user.uid)}
            variant='contained'
            fullWidth
            color='primary'
            size='large'>Join this Event</Button>
        )
      }

    }



    return (
      <Grid container justify='center' spacing={8}>

        <Grid item xl={12} lg={12} md={12} sm={12} xs={12} >
          <Typography variant='h3' paragraph align='center'>
            {this.props.event.title}
          </Typography>
        </Grid>

        <Grid item xl={4} lg={3} md={4} sm={12} xs={12} >
          <Typography paragraph align='center'>
            <img className="EventDescription-image" src={this.props.event.icon} alt=""
            />
          </Typography>
        </Grid>

        <Grid item xl={7} lg={8} md={7} sm={11} xs={11}>
          <Typography variant='h5' paragraph align='left'>
            {this.props.event.fullDescription}
          </Typography>
        </Grid>

        <Grid item xl={5} lg={5} md={5} sm={3} xs={11}>
          <BackButton />
        </Grid>

        <Grid item xl={5} lg={5} md={5} sm={8} xs={11}>

          {
            user ?
              (
                checkAttendingUsers()
              )
              :
              (
                <Button
                  variant='contained'
                  color='primary'
                  size='large'
                  fullWidth
                  disabled>Log in to join</Button>
              )
          }
        </Grid>

      </Grid>
    );
  }
}

export default withAuthContext(EventDescription);
