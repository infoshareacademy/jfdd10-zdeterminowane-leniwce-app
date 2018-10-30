import React, { Component } from "react";
import firebase from 'firebase'
import { Grid, TextField, Button } from "@material-ui/core";

const makeNewUser = (userId, { name, surname, email }) => {
  firebase.database().ref('users/' + userId).set({
    first_name: name,
    last_name: surname,
    email: email,
    avatar: "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/20/20fd725c79d4d4839c9f36e791248eac315f3aad_full.jpg",
    description: 'Placeholder description on user profile'
  })
}


class SignUpForm extends Component {
  state = {
    name: "",
    surname: "",
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


    if (this.state.name.length === 0) {
      return this.setState({
        error: 'Please add your name'
      })
    }

    if (this.state.surname.length === 0) {
      return this.setState({
        error: 'Please add your surname'
      })
    }

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
    firebase.auth().createUserWithEmailAndPassword(

      this.state.email,
      this.state.password
    ).then(
      ({ user }) => {
        this.setState({ error: null });
        makeNewUser(user.uid, this.state)
      }
    ).then(
      () => this.props.history.push('/')
    ).catch(
      error => this.setState({ error: error.message })
    )
  }





  render() {
    return (
      <>
        <Grid container justify='center' >
          <form onSubmit={this.handleSubmit} className="SignUpForm">
            <Grid container item justify='center' spacing={8} >
              <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>

                <TextField
                  fullWidth={true}
                  color='secondary'
                  variant='outlined'
                  label="Name"
                  name="name"
                  value={this.state.name}
                  onChange={this.handleChange}
                />
              </Grid>

              <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>

                <TextField
                  fullWidth={true}
                  color='secondary'
                  variant='outlined'
                  label="Surname"
                  name="surname"
                  value={this.state.surname}
                  onChange={this.handleChange}
                />
              </Grid>

              <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>

                <TextField
                  fullWidth={true}
                  color='secondary'
                  variant='outlined'
                  label="E-mail"
                  name="email"
                  value={this.state.email}
                  onChange={this.handleChange}
                />
              </Grid>

              <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>

                <TextField
                  fullWidth={true}
                  color='secondary'
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
                  Sign up
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
      </>);
  }
}

export default SignUpForm;