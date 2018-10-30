import React, { Component } from 'react'
import firebase from 'firebase'
import { Link } from "react-router-dom";
import { TextField, Button, Grid, Typography } from '@material-ui/core';


class SignInForm extends Component {
  state = {

    email: "",
    password: "",
    error: null
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault();

    if (this.state.email.length === 0) {
      return this.setState({
        error: 'Please add your email'
      })
    }

    if (this.state.password.length === 0) {
      return this.setState({
        error: 'Please add your password'
      })
    }

    firebase.auth().signInWithEmailAndPassword(
      this.state.email,
      this.state.password
    ).then(
      () => this.setState({ error: null })
    ).then(
      () => this.props.history.push('/')
    ).catch(
      error => {
        this.setState({ error: error.message })
      }
    )
  }

  render() {
    return (
      <Grid container justify='center' >
        <form onSubmit={this.handleSubmit}>
          <Grid container item justify='center' spacing={8} >

            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
              <TextField
                fullWidth={true}
                color='secondary'
                variant='outlined'
                label='e-mail'
                name="email"
                value={this.state.email}
                onChange={this.handleChange}
              />
            </Grid>

            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
              <TextField
                fullWidth={true}
                variant='outlined'
                label="Password"
                name="password"
                type="password"
                value={this.state.password}
                onChange={this.handleChange}
              />
            </Grid>
            
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
              <Button
                onClick={() => this.handleSubmit}
                type='submit'
                variant='contained'
                size='large'
                color='primary'
                fullWidth={true}

              >
                Sign in
              </Button>
            </Grid>

          </Grid>




        </form>
        {
          this.state.error && <div style={{ color: 'red' }}>{this.state.error}</div>
        }
      </Grid>
    );
  }
}

export default SignInForm
