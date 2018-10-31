import React, { Component } from 'react';
import EventList from '../EventList/EventList';
import { Grid } from '@material-ui/core';
import EventMapView from '../EventMapView/EventMapView';
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
          <EventMapView/> 

        </div>

      </>
    )
  }
}

export default EventSearcherResults