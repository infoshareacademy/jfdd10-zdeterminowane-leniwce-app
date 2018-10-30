import React, { Component } from 'react'
import firebase from 'firebase'
import { TextField, Button, Grid } from '@material-ui/core';


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
      <>
        <Grid container justify='center' >
          <form onSubmit={this.handleSubmit}>
            <Grid container item justify='center' spacing={8} >

              <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                <TextField
                  fullWidth={true}
                  color='secondary'
                  variant='outlined'
                  label='E-mail'
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

        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
          {
            this.state.error &&
            <Button
              style={{ color: 'red' }}
              size='large'
              fullWidth={true}
              disabled
            >
              {`! ${this.state.error} !`}
            </Button>
          }
        </Grid>
      </>
    );
  }
}

export default SignInForm
