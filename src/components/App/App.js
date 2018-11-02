import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import HomeView from '../HomeView/HomeView';
import UserProfileView from '../UserProfileView/UserProfileView'
import EventView from '../EventView/EventView';
import { AppBar, Toolbar, Typography, IconButton, Menu, MenuItem } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import SignUpForm from '../SignUpForm/SignUpForm';
import Auth from '../Auth/Auth';
import { withAuthContext } from '../../contexts/AuthContext';
import SignInForm from '../SignInForm/SignInForm';
import EventCreateView from '../EventCreateView/EventCreateView';




class App extends Component {

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
    const { user } = this.props.authContext;

    return (
      <>
        <Router>
          <div >
            <AppBar position='static'>
              <Toolbar>
                <IconButton color="inherit" aria-label="Menu" aria-owns={anchorEl ? 'simple-menu' : null}
                  aria-haspopup="true"
                  onClick={this.handleClick}>
                  <MenuIcon>
                  </MenuIcon>
                </IconButton>

                <Typography variant="h6" color="inherit" style={{ flexGrow: 1 }}>
                  Lazyness Radar
                </Typography>

                <div>
                  <Auth />
                </div>



              </Toolbar>
            </AppBar>

            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={this.handleClose}
            >
              <MenuItem
                component={NavLink}
                exact to='/'
                onClick={this.handleClose}
              >
                Home Page
              </MenuItem>
              {user &&
                <MenuItem
                  component={NavLink}
                  to={`/user/${user.uid}`}
                  onClick={this.handleClose}
                >
                  User Profile
                </MenuItem>
              }
              {user &&
                <MenuItem
                  component={NavLink}
                  to={`/createEvent`}
                  onClick={this.handleClose}
                >
                  Create Event
                </MenuItem>
              }
              <MenuItem
                component={'a'}
                href={"http://zdeterminowane-leniwce.jfdd10.is-academy.pl/"}
                onClick={this.handleClose}
              >
                Landing page
              </MenuItem>


            </Menu>

            <Typography paragraph></Typography>

            <Route exact path="/" component={HomeView} />
            <Route exact path="/user" component={() => <h1> You shouldnt be here</h1>} />

            <Route exact path="/events" component={() => <h1> You shouldnt be here </h1>} />

            <Route path="/user/:userId" component={UserProfileView} />

            <Route path="/events/:eventId" component={EventView} />
            <Route path="/createEvent" component={EventCreateView} />

            <Route path="/signIn" component={SignInForm} />
            <Route path="/signUp" component={SignUpForm} />

          </div>
        </Router>
      </>
    );
  }
}

export default withAuthContext(App);
