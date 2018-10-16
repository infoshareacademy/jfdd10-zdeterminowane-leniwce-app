import React, { Component } from 'react';
import { Link } from "react-router-dom";

import PropTypes from 'prop-types';
import './EventListItem.css';

class EventListItem extends Component {

  static defaultProps = {
    eventIcon: 'https://static.thenounproject.com/png/656-200.png',
    eventTitle: 'TITLE MISSING',
    eventDescription: 'DESCRIPTION MISSING',
  }

  static propTypes = {
    /**
     * Event icon url adress
     */
    eventIcon: PropTypes.string,
    /**
     * Title for the event 
     */
    eventTitle: PropTypes.string,
    /**
     * Description for the event 
     */
    eventDescription: PropTypes.string,
  }

  render() {
    return (
      <>
        <div className='img-wrapper'>
          <img className='img' src={this.props.eventIcon} alt='event icon' />
        </div>

        <div className='item-text-wrapper'>
          <Link to={`/events/${this.props.id}`}><h1>{this.props.eventTitle}</h1></Link>
          <p>{this.props.eventDescription}</p>
        </div>
      </>
    )
  }
}



export default EventListItem