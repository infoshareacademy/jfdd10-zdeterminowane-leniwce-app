import React, { Component } from 'react';
import EventList from '../EventList/EventList';
import { Grid, Button } from '@material-ui/core';
import EventMapView from '../EventMapView/EventMapView';

// import PropTypes from 'prop-types';


class EventSearcherResults extends Component {

  static defaultProps = {
    searchQuery: ''
  }

  state = {
    viewId: 'list'
  }

  render() {
    const viewId = this.state.viewId
    return (
      <>
        <div>
          <Grid container justify='space-around' >
            <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
              <Button
                fullWidth
                size='large'
                variant={viewId === 'list' ? 'contained' : 'outlined'}
                color={viewId === 'list' ?'primary' : 'default'}
                onClick={() => this.setState({ viewId: 'list' })}
              >
                Event List
              </Button>
            </Grid>

            <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
              <Button
                fullWidth
                size='large'
                variant={viewId === 'map' ? 'contained' : 'outlined'}
                color={viewId === 'map' ?'primary' : 'default'}
                onClick={() => this.setState({ viewId: 'map' })}
              >
                Event Map
              </Button>
            </Grid>
          </Grid>

          {
            viewId === 'list' &&
            <EventList eventsData={this.props.eventsData} />
          }
          {
            viewId === 'map' &&
            <EventMapView eventsData={this.props.eventsData} />
          }



        </div>

      </>
    )
  }
}

export default (EventSearcherResults)