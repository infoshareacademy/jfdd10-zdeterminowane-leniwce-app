import React, { Component } from 'react';
import './EventListItem.css';

class EventListItem extends Component {

  state = {
    id: 1,
    img: '/event-icons/PH.png',
    title: 'event one title',
    description: 'short description for event number one',


  }


  render() {
    return (
      <>
        <div className='item'>
          <img src={this.state.img} alt='event icon' />
          <div>
            <h1>{this.state.title}</h1>
            <p>{this.state.description}</p>
          </div>

        </div>


      </>
    )
  }
}

export default EventListItem