import React, { Component } from 'react';
import './EventListItem.css';

class EventListItem extends Component {
  
  state = {
    id: 1,
    img: '/event-icons/PH.png',
    title: 'event one',


  }
  
  
  render () {
    return (
      <>
      <div>event item</div>
      <img src={this.state.img} alt='event icon'/>
      </>
    )
  }
}

export default EventListItem