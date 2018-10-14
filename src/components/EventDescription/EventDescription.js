import React, { Component } from "react";
import "./EventDescription.css";

class EventDescription extends Component {
  render() {
    return (
      <div className="event__description">
        <img
          className="event__image"
          src="http://placehold.jp/150x150.png"
          alt=""
        />
        <div className="event__description--text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          fringilla elementum justo, scelerisque feugiat ligula tristique
          convallis. Maecenas lectus nulla, venenatis vel sagittis vitae,
          sodales eget dui. Proin a ex sed diam cursus efficitur sit amet
          lacinia tortor. Maecenas tincidunt euismod vestibulum. Suspendisse vel
          convallis quam, sed rhoncus lacus. Aliquam ornare arcu sapien, semper
          ultrices ipsum ultricies at. Maecenas tincidunt efficitur interdum.
        </div>
      </div>
      
    );
  }
}

export default EventDescription;
