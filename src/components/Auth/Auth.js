import React, { Component } from "react";
import { withAuthContext } from "../../contexts/AuthContext";
import { Link } from "react-router-dom";
import AuthView from "../AuthView/AuthView";
import { Button } from "@material-ui/core";

class Auth extends Component {
  render() {
    const { user, signOut } = this.props.authContext;
    return user ? (
      <>
        <span>
          {`Logged in as: ${user.email}  `}
        </span>
        <Button onClick={() => signOut()} component={Link} to='/' variant='contained' size='medium'>
            Sign out
        </Button>
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


