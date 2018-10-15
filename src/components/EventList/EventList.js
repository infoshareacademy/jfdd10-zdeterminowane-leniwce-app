import React, { Component } from 'react';
import EventListItem from '../EventListItem/EventListItem';
import PropTypes from 'prop-types';

import './EventList.css';



class EventList extends Component {

  static defaultProps = {
    eventsData: [
      {
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
      <>
        <div className='event-list-container'>

          <div className='event-list'>
            {
              this.props.eventsData.map(
                event => (
                  <EventListItem key={event.id} eventIcon={event.url} eventTitle={event.title} eventDescription={event.description} />

                )
              )
            }


          </div>
        </div>

      </>
    )
  }
}

export default EventList