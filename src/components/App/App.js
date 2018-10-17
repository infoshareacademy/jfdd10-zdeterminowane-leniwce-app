
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";

import HomeView from '../HomeView/HomeView';
import EventParticipantMap from '../EventParticipantMap/EventParticipantMap'




// import when done
// import UserProfileView from '../UserProfileView/UserProfileView'
// import EventView from '../EventView/EventView'

import './App.css';

class App extends Component {



  render() {

    return (
      <>


        <Router>
          <div className='app-container'>
            <h1>Lazyness Radar</h1>
            <div className='app-wrapper'>

              <div className='app-links'>
                <p>
                  <NavLink exact to='/'>Home Page</NavLink>
                </p>
                <p>
                  <NavLink to="/user">User Profile</NavLink>
                </p>
                <p>
                  <NavLink to="/events">Event View (for testing)</NavLink>
                </p>

              </div>

              <div className='main-app-window'>
                <Route exact path="/" component={HomeView} />
                {/* <Route path="/user" component={UserProfileView} /> */}
                <Route path="/user" component={() => <h1> When UserProfileView is ready, replace this in App</h1>} />

                {/* <Route path="/event" component={EventView} /> */}
                <Route exact path="/events" component={() => <h1> When EventView is ready, replace this in App</h1>}  />

                <Route path="/events/:eventId" component={() => <h1> When EventView is ready, replace this in App</h1>}  />
                <EventParticipantMap/>
              </div>
            </div>



          </div>

        </Router>
      </>


    );

  }
}

export default App;
