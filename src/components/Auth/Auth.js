import React, { Component } from "react";
import { withAuthContext } from "../../contexts/AuthContext";

import SignInForm from "../SignInForm/SignInForm";


class Auth extends Component {
  render() {
    const { user, signOut } = this.props.authContext;
    return user ? (
      <>
        <p>
          {`Logged in as: ${user.email}`} <button onClick={() => signOut()}>sign out</button>
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
