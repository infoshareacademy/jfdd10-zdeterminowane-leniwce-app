import React, { Component } from "react";
import { withAuthContext } from "../../contexts/AuthContext";
import { Link } from "react-router-dom";
import { Grid, TextField, Button } from "@material-ui/core";


class EventCreateView extends Component {
  state = {
    title: '',
    description: '',
    fullDescription: '',
    icon: '',
    locationX: 18.8,
    locationY: 54.25
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
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
    console.log(this.state)
  }


  render() {
    return (
      <>
        <Grid container justify='center' >
          <form onSubmit={this.handleSubmit}>
            <Grid container item justify='center' spacing={8} >
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
              <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
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
