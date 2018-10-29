import React, { Component } from 'react'
import firebase from 'firebase'
import { Link } from "react-router-dom";


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
      return this.setState ({
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
    ).then (
      () => this.setState({ error: null})
    ).catch(
      error => {
        this.setState({error: error.message})
      }
    )
  }

  render() {
    return (
      <>
      <form onSubmit={this.handleSubmit} className="SignUpForm">
        {this.state.error && <p>{this.state.error.message}</p>}
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
        <button>Sign in</button>

        <button>

        <Link to='/signUp'>Sign up</Link>
        </button>


      </form>
      {
        this.state.error && <div style={{color: 'red'}}>{this.state.error}</div>
      }
        </>
    );
  }
}

export default SignInForm
