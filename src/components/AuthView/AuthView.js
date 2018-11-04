import React, { Component } from "react";
import { withAuthContext } from "../../contexts/AuthContext";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";


class AuthView extends Component {
  render() {

    return (
      <>
        <Button
          component={Link}
          to='/signIn'
          variant='contained'
          size='large'
        >
          Sign in
        </Button>

        <Button
          component={Link}
          to='/signUp'
          variant='contained'
          size='large'
        >
          Sign up
        </Button>

      </>)

  }
}

export default withAuthContext(AuthView);
