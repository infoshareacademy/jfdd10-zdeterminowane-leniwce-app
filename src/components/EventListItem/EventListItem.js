import React, { Component } from 'react';
import { Link } from "react-router-dom";

import PropTypes from 'prop-types';
import './EventListItem.css';
import { ListItem, ListItemAvatar, Avatar, ListItemText } from '@material-ui/core';

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
        <ListItem
        button
        divider
        component={Link} 
        to={`/events/${this.props.id}`}
        >
          <ListItemAvatar >
            <Avatar src={this.props.eventIcon} />
          </ListItemAvatar>

          <ListItemText
          primaryTypographyProps={{variant: 'h4'}}
            primary={this.props.eventTitle}
            secondaryTypographyProps={{variant: 'subheading'}}
            secondary={this.props.eventDescription}
          />
          
        </ListItem>
      </>
    )
  }
}



export default EventListItem