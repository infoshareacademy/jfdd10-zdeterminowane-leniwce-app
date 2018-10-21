import React, { Component } from "react";
import "./EventDescription.css";

class EventDescription extends Component {
  render() {

    if (this.props.event === undefined) {
      return <div>Loading...</div>;
    }
    return (
      <div>
        {console.log(this.props.event)
        }

        <div className="EventDescription-description">
        {this.props.event.title}
          <img className="EventDescription-image" src={this.props.event.icon} alt=""
          />
          <div className="EventDescription-description--text">
            {this.props.event.fullDescription}
          </div>
        </div>
        <div className="EventDescription-description--buttonarea">
        </div>
      </div>
    );
  }
}

export default EventDescription;
