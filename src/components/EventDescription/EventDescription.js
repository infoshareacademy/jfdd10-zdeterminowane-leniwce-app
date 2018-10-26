import React, { Component } from "react";
import "./EventDescription.css";
import { Typography, Grid, Button } from "@material-ui/core";

class EventDescription extends Component {
  render() {

    if (this.props.event === undefined) {
      return <div>Loading...</div>;
    }
    return (
      <Grid container justify='center'>



        <Grid item lg={12} md={12} sm={12} xs={12} >
          <Typography variant='h3' paragraph align='center'>
            {this.props.event.title}
          </Typography>
        </Grid>

        <Grid item lg={4} md={4} sm={12} xs={12} >
          <Typography paragraph align='center'>
            <img className="EventDescription-image" src={this.props.event.icon} alt=""
            />
          </Typography>
        </Grid>

        <Grid item lg={8} md={8} sm={12}>
          <Typography variant='h5' paragraph align='center'>
            {this.props.event.fullDescription}
          </Typography>
        </Grid>
        <Button variant='contained' color='primary' size='large'>Join this Event</Button>


      </Grid>
    );
  }
}

export default EventDescription;
