import React, { Component } from "react";
import { withRouter } from 'react-router-dom'
import { Button } from "@material-ui/core";


class BackButton extends Component {

  handleBack = () => {
    this.props.history.goBack()
  }

  render() {
    return (
      <Button fullWidth
        onClick={this.handleBack}
        variant='outlined'
        color='primary'
        size='large'
      >
        Go back
      </Button>
    )
  }
}

export default withRouter(BackButton)