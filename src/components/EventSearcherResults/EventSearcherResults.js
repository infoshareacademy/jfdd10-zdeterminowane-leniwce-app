import React, { Component } from 'react';
import EventList from '../EventList/EventList'
import { Grid, Paper } from '@material-ui/core';
// import PropTypes from 'prop-types';


class EventSearcherResults extends Component {

  static defaultProps = {
    searchQuery: ''
  }


  render() {
    return (
      <>
        <div>
          <Grid container justify='center'>
            <Grid item >
            <h1>Event List</h1>



            </Grid>
          </Grid>

         
          <EventList eventsData={this.props.eventsData} />

        </div>

      </>
    )
  }
}

export default EventSearcherResults