import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import HomeView from '../HomeView/HomeView';
import UserProfileView from '../UserProfileView/UserProfileView'
import EventView from '../EventView/EventView';
import { AppBar, Toolbar, Typography, IconButton, Menu, MenuItem } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';



class App extends Component {

  styles = {
    root: {
      flexGrow: 1,
    },
    grow: {
      flexGrow: 1,
    },
    menuButton: {
      marginLeft: -12,
      marginRight: 20,
    },
  };

  state = {
    anchorEl: null,
  };

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };


  render() {
    const { anchorEl } = this.state;

    return (
      <>
        <Router>
          <div className={this.styles.root}>
            <AppBar className='appBar' position='static'>
              <Toolbar>
                <IconButton color="inherit" aria-label="Menu" aria-owns={anchorEl ? 'simple-menu' : null}
                  aria-haspopup="true"
                  onClick={this.handleClick}>
                  <MenuIcon>
                  </MenuIcon>
                </IconButton>

                <Typography variant="title" color="inherit" >
                  Lazyness Radar
                </Typography>
                
              </Toolbar>
            </AppBar>

            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={this.handleClose}
            >
              <MenuItem onClick={this.handleClose}>
                <NavLink exact to='/'>Home Page</NavLink>
              </MenuItem>
              <MenuItem onClick={this.handleClose}>
                <NavLink to="/user/1">User Profile</NavLink>
              </MenuItem>
            </Menu>


            <main className='content'>
              <Route exact path="/" component={HomeView} />
              {/* <Route path="/user" component={UserProfileView} /> */}
              <Route exact path="/user" component={() => <h1> When UserProfileView is ready, replace this in App</h1>} />

              {/* <Route path="/event" component={EventView} /> */}
              <Route exact path="/events" component={() => <h1> You shouldnt be here </h1>} />

              <Route path="/user/:userId" component={UserProfileView} />

              <Route path="/events/:eventId" component={EventView} />
            </main>
          </div>
        </Router>
      </>
    );
  }
}

export default App;
