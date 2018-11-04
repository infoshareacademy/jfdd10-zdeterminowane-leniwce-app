import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './EventListItem.css';
import { GridListTile, GridListTileBar, Button } from '@material-ui/core';

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
        <GridListTile
          component={Button}
          href={`/events/${this.props.id}`}
        >
          <img src={this.props.eventIcon} alt={this.props.eventTitle} />

          <GridListTileBar
            title={this.props.eventTitle}
            subtitle={<>{this.props.eventDescription}</>}
          />
        </GridListTile>
      </>
    )
  }
}



export default EventListItem

