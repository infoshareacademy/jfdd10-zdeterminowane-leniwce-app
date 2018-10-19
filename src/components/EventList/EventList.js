import React, { Component } from 'react';
import EventListItem from '../EventListItem/EventListItem';

import PropTypes from 'prop-types';

import './EventList.css';
import { List } from '@material-ui/core';



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


      <List>
        { 
          this.props.eventsData.map(
            event => (
              
                <EventListItem key={event.id} eventIcon={event.icon} id={event.id} eventTitle={event.title} eventDescription={event.description} />
              
            )
          ) || 'wait'
        }
      </List>

    )
  }
}

export default EventList