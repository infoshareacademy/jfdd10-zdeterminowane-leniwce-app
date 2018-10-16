
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";

import HomeView from '../HomeView/HomeView';
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
                  <NavLink to="/searcher">Event Searcher</NavLink>
                </p>


              </div>

              <div className='main-app-window'>
                <Route exact path="/" component={() => <h1>Hello</h1>} />
                <Route path="/searcher" component={HomeView} />



                <h1>KOmponent 1</h1>
                <h1>KOmponent 2</h1>
                <h1>KOmponent 3</h1>
              </div>
            </div>



          </div>

        </Router>
      </>


    );

  }
}

export default App;
