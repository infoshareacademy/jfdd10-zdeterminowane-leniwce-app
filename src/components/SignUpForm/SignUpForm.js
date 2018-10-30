import React, { Component } from "react";
import firebase from 'firebase'

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
      return this.setState ({
        error: 'Please add your name'
      })
    }

    if (this.state.surname.length === 0) {
      return this.setState ({
        error: 'Please add your surname'
      })
    }

    if (this.state.email.length === 0) {
      return this.setState ({
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
      <form onSubmit={this.handleSubmit} className="SignUpForm">
        {this.state.error && <p>{this.state.error.message}</p>}
        <input
          placeholder="Enter name"
          name="name"
          value={this.state.name}
          onChange={this.handleChange}
        />
        <input
          placeholder="Enter surname"
          name="surname"
          value={this.state.surname}
          onChange={this.handleChange}
        />
        <input
          placeholder="Enter email"
          name="email"
          value={this.state.email}
          onChange={this.handleChange}
        />
        <input
          placeholder="Enter password"
          name="password"
          type="password"
          value={this.state.password}
          onChange={this.handleChange}
        />
        <button>Sign up</button>
      </form>
      {
        this.state.error && <div style={{color: 'red'}}>{this.state.error}</div>
      }
      </>
    );
  }
}

export default SignUpForm;