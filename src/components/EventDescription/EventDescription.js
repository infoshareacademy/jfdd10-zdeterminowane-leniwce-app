import React, { Component } from "react";
import "./EventDescription.css";

class EventDescription extends Component {
  render() {
    return (
      <div>

        <div className="EventDescription-description">
          <img className="EventDescription-image" alt=""
          />
          <div className="EventDescription-description--text">
            {this.props.event.fullDescription}
          </div>
        </div>
        <div className="EventDescription-description--buttonarea">
          <button className="EventDescription-description--button">Join</button>
        </div>
      </div>
    );
  }
}

export default EventDescription;
