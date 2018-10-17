import React, { Component } from "react";
import { Map, Marker, Popup, TileLayer } from "react-leaflet";
import "./EventParticipantMap.css";

const position = [54.3897726, 18.591526];
class EventParticipantMap extends Component {
  render() {
    return (
      <div>
        <Map center={position} zoom={13} style={{ height: 300 }}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
          />
          <Marker position={position}>
            <Popup>
              A pretty CSS3 popup.
              <br />
              Easily customizable.
            </Popup>
          </Marker>
        </Map>
      </div>
    );
  }
}

export default EventParticipantMap;
