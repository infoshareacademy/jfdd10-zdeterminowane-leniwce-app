import React, { Component } from "react";
import "./EventCreateView.css";
import { Map, Marker, Popup, TileLayer } from "react-leaflet";


class EventCreateView extends Component {
  state ={
    title: "",
    description: "",
    locationx: "",
    locationy: "",
  }
    addMarker = (e) => {
    console.log(e.latlng)
  }

  render() {
    const position = [56, 18];

    return (
      <form className="eventcreate-form">
        <input className="eventcreate-form__name" value="Nazwa"/>

        
        <div>
        <Map center={position} zoom={13} style={{ height: 300 }} onClick={this.addMarker}>
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
        <input className="eventcreate-form__desc" value="Opis"/>
        <input className="eventcreate-form__coor" value="Koodrynaty"/>

      <div className="eventcreate-form__btn">
        <button className="eventcreate-form__Canbtn">Cancel</button>
        <button className="eventcreate-form__Addbtm">Add</button>
      </div> 
     </form>
    );
  }
}

export default EventCreateView;
