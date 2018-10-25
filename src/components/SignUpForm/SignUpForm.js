import React, { Component } from "react";

import "./SingUpForm.css";

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
  )

  render() {
    return (
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
          value={this.state.password}
          onChange={this.handleChange}
        />
        <button>Sign up</button>
      </form>
    );
  }
}

export default SignUpForm;