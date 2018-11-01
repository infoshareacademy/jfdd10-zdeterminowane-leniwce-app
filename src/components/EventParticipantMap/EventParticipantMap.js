import React, { Component } from "react";
import { Map, Marker, Popup, TileLayer } from "react-leaflet";
import "./EventParticipantMap.css";
import { Grid } from "@material-ui/core";

class EventParticipantMap extends Component {


  render() {
    const position = [this.props.locY, this.props.locX];

    return (
      <Grid item xs={12} sm={12} md={11} lg={11} xl={11}>
        <div>
          <Map center={position} zoom={13} style={{ height: 300 }}>
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
            />
            <Marker position={position}>
              <Popup>
                {this.props.eventTitle}
              </Popup>
            </Marker>
          </Map>
        </div>

      </Grid>
    );
  }
}

export default EventParticipantMap;
