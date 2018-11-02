import React, { Component } from 'react';
import { Map, Marker, Popup, TileLayer } from "react-leaflet";

class EventMapView extends Component {

  render() {
    const gdanskCenter = [54.352, 18.6466];

    return (
      <div style={{ marginTop: 10}}>
        <Map center={gdanskCenter} zoom={10} style={{ height: 500 }}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
          />
          {this.props.eventsData.map(event => (
            <Marker key={ event.id } position={[event.locationY, event.locationX]}>
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