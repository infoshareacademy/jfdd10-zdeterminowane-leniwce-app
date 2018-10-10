import React, { Component } from 'react';
import './EventListItem.css';

class EventListItem extends Component {

  state = {
    id: 1,
    img: '/event-icons/PH.png',
    title: 'event one',
    description: 'short description for event number one',


  }


  render() {
    return (
      <>
        <div>event item</div>
        <div>{this.state.title}</div>
        <img src={this.state.img} alt='event icon' />
        <div>{this.state.description}</div>

      </>
    )
  }
}

export default EventListItem