import React, { Component } from 'react';
import EventList from '../EventList/EventList';
import { Grid, Button } from '@material-ui/core';
import EventMapView from '../EventMapView/EventMapView';

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
        <div >
          <Grid container justify='center' >
            <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
              <Button
                fullWidth
                size='large'
                variant={viewId === 'list' ? 'contained' : 'outlined'}
                color={viewId === 'list' ? 'primary' : 'default'}
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
                color={viewId === 'map' ? 'primary' : 'default'}
                onClick={() => this.setState({ viewId: 'map' })}
              >
                Event Map
              </Button>
            </Grid>
          </Grid>

          {
            viewId === 'list' &&
            <Grid 
            style={{
              marginTop: 10,
              backgroundColor: 'rgba(151, 193, 237, 0.2)',
              
            }}
            item xs={12} sm={12} md={12} lg={12} xl={12}>

              <EventList eventsData={this.props.eventsData} />
            </Grid>
          }
          {
            viewId === 'map' &&
            <Grid 
            style={{
              marginTop: 10,
              backgroundColor: 'rgb(151, 193, 237)',
            }}
            item xs={12} sm={12} md={12} lg={12} xl={12}>

              <EventMapView eventsData={this.props.eventsData} />
            </Grid>
          }
        </div>
      </>
    )
  }
}

export default (EventSearcherResults)