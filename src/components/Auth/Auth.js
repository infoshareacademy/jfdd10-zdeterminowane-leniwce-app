import React, { Component } from "react";
import { withAuthContext } from "../../contexts/AuthContext";
import { Link } from "react-router-dom";


import SignInForm from "../SignInForm/SignInForm";


class Auth extends Component {
  render() {
    const { user, signOut } = this.props.authContext;
    return user ? (
      <>
        <p>
          {`Logged in as: ${user.email}`} <button onClick={() => signOut()}><Link to='/'>Sign out</Link></button>
        </p>
        {this.props.children}
      </>
    ) : (
      <>
        <SignInForm />
      </>
    );
  }
}

export default withAuthContext(Auth);
