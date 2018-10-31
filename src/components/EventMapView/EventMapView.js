import React, { Component } from 'react';

import { Map, Marker, Popup, TileLayer } from "react-leaflet";

class EventMapView extends Component {

  render() {

    const gdanskCenter = [54.352, 18.6466];
    console.log('events', this.props.eventsData);

    return (

      <div>
        <Map center={gdanskCenter} zoom={10} style={{ height: 300 }}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
          />
          {this.props.eventsData.map(event => (
            <Marker position={[event.locationY, event.locationX]}>
              <Popup>
                {event.title}
              </Popup>
            </Marker>
          ))}
        </Map>
      </div>
    )
  }
}

export default EventMapView