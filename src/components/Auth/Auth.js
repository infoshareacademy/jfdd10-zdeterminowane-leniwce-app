import React, { Component } from "react";
import { withAuthContext } from "../../contexts/AuthContext";
import { Link } from "react-router-dom";


import AuthView from "../AuthView/AuthView";


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
        <AuthView />
      </>
    );
  }
}

export default withAuthContext(Auth);
