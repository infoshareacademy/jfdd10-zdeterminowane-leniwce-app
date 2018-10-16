import React, { Component } from 'react';
import EventSearcher from '../EventSearcher/EventSearcher'
import UserProfileView from '../UserProfileView/UserProfileView'

class HomeView extends Component {

 

  render() {
    return (
      <>
        <UserProfileView/>
        <EventSearcher />
      </>
    )
  }
}

export default HomeView