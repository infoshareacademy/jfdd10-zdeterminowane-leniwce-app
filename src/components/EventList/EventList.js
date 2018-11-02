import React, { Component } from 'react';
import EventListItem from '../EventListItem/EventListItem';
import PropTypes from 'prop-types';
import './EventList.css';
import { List, GridList, Grid } from '@material-ui/core';



class EventList extends Component {

  static defaultProps = {
    eventsData: [
      {
        id: 1,
        title: 'TITLE MISSING',
        description: 'DESCRIPTION MISSING'
      }
    ]
  }

  static propTypes = {
    /**
     * Array of objects, usually from .json file
     */
    eventsData: PropTypes.array
  }

  render() {


    return (


      <GridList 
      component={Grid}
      container
      justify='center'
      
      spacing={8}>
        {this.props.eventsData &&
          this.props.eventsData.length > 0 &&
          this.props.eventsData.map(
            event => (

              <EventListItem key={event.id} eventIcon={event.icon} id={event.id} eventTitle={event.title} eventDescription={event.description} />

            )
          )
        }
      </GridList>

    )
  }
}

export default EventList