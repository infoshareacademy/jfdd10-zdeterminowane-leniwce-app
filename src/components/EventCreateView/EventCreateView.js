import React, { Component } from "react";
import { withAuthContext } from "../../contexts/AuthContext";
import { Link } from "react-router-dom";


class EventCreateView extends Component {
  render() {
    return(
      <>
      map here and some shitty inputs
      </>
    )
  }
}

export default withAuthContext(EventCreateView);
