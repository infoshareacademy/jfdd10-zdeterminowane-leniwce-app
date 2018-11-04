import React, { Component } from "react";
import { withAuthContext } from "../../contexts/AuthContext";
import { Grid, TextField, Button, Paper } from "@material-ui/core";
import { Map, Marker, Popup, TileLayer } from "react-leaflet";
import firebase from 'firebase'
import BackButton from "../BackButton/BackButton";

class EventCreateView extends Component {
  state = {
    title: '',
    description: '',
    icon: 'http://dummyimage.com/250x250.jpg/dddddd/000000',
    locationX: 18.621165392381958,
    locationY: 54.3541553799043,
    error: null
  }

  eventRef = firebase.database().ref().child('events')

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  addMarker = (e) => {
    this.setState({
      locationX: e.latlng.lng,
      locationY: e.latlng.lat
    })
  }

  handleSubmit = event => {
    event.preventDefault();

    if (this.state.title.length === 0) {
      return this.setState({
        error: 'Please add event title'
      })
    }

    if (this.state.description.length === 0) {
      return this.setState({
        error: 'Please add event description'
      })
    }

    if (this.state.locationX.length === 0) {
      return this.setState({
        error: 'Invalid location'
      })
    }

    if (this.state.locationY.length === 0) {
      return this.setState({
        error: 'Invalid location'
      })
    }

    let newEvent = {
      title: this.state.title,
      description: this.state.description,
      fullDescription: this.state.description,
      icon: this.state.icon,
      locationX: this.state.locationX,
      locationY: this.state.locationY
    }

    this.eventRef.push(newEvent)
    this.setState({
      title: '',
      description: '',
      icon: 'http://dummyimage.com/250x250.jpg/dddddd/000000',
      error: 'Event succesfully added to database, you can add another or leave this screen'
    });
  }

  render() {
    const position = [this.state.locationY, this.state.locationX];

    return (
      <>
        <Grid container justify='center' spacing={8} >

          <Paper>
            <form onSubmit={this.handleSubmit}>
              <Grid container item justify='center' spacing={8} >

                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                  <Map
                    onClick={this.addMarker}
                    center={position}
                    zoom={13}
                    style={{ height: 350 }}>
                    <TileLayer
                      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                      attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
                    />
                    <Marker position={position}>
                      <Popup>
                        {this.state.title}
                      </Popup>
                    </Marker>
                  </Map>
                </Grid>

                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                  <TextField
                    fullWidth={true}
                    color='secondary'
                    variant='outlined'
                    label="Title"
                    name="title"
                    value={this.state.title}
                    onChange={this.handleChange}
                  />
                </Grid>

                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                  <TextField
                    fullWidth={true}
                    color='secondary'
                    variant='outlined'
                    label="Description"
                    name="description"
                    multiline
                    rows='3'
                    value={this.state.description}
                    onChange={this.handleChange}
                  />
                </Grid>

                <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
                  <TextField
                    fullWidth={true}
                    color='secondary'
                    variant='outlined'
                    label="Location X"
                    name="locationX"
                    type='number'
                    value={this.state.locationX}
                    onChange={this.handleChange}
                  />
                </Grid>

                <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
                  <TextField
                    fullWidth={true}
                    color='secondary'
                    variant='outlined'
                    label="Location Y"
                    name="locationY"
                    type='number'
                    value={this.state.locationY}
                    onChange={this.handleChange}
                  />
                </Grid>

                <Grid item xs={12} sm={3} md={2} lg={2} xl={2}>
                  <BackButton />
                </Grid>

                <Grid item xs={12} sm={9} md={10} lg={10} xl={10}>
                  <Button
                    type='submit'
                    variant='contained'
                    size='large'
                    color='primary'
                    fullWidth={true}
                  >
                    Create Event
                  </Button>
                </Grid>
              </Grid>

            </form>
          </Paper>


        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
          {
            this.state.error &&

            <Button
              style={{ color: 'red' }}
              size='large'
              fullWidth={true}
              disabled
            >
              {`! ${this.state.error} !`}
            </Button>
          }
        </Grid>
      </>
    )
  }
}

export default withAuthContext(EventCreateView);
