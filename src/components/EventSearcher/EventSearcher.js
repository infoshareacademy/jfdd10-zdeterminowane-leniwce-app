import React, { Component } from 'react';
import EventSearcherResults from '../EventSearcherResults/EventSearcherResults'
import EventSearcherForm from '../EventSearcherForm/EventSearcherForm';
import { Grid, Paper } from '@material-ui/core';
import UserSignUp from '../UserSignUp/UserSignUp'

class EventSearcher extends Component {

  state = {
    query: '',
  }

  setSearchQuery = (query) =>
    this.setState({
      query: query
    })

  // getFilteredEvents2 = () => this.state.events.filter((event) => {
  //     let eventTitle = event.title.toLowerCase();
  //     let eventDescription = event.description.toLowerCase();
  //     return eventTitle.includes(this.state.query.toLowerCase()) || eventDescription.includes(this.state.query.toLowerCase())
  //   })

  getFilteredEvents = () => this.props.eventsData.filter(
    event => [event.title, event.description].map(
      phrase => phrase.toLowerCase()
    ).some(phrase => phrase.includes(this.state.query.toLocaleLowerCase())))

  render() {
    return (
      <>
        <EventSearcherForm getSearchQuery={this.setSearchQuery} />
        <UserSignUp/>
        {/* {
          this.state.query &&
          <p>
            Searched for: &nbsp;<span>{this.state.query}</span>
          </p>
        } */}

        <Grid container justify='center'>
          <Grid item md={10} lg={8} sm>
            <Paper>
              <EventSearcherResults eventsData={this.getFilteredEvents()} searchQuery={this.state.query} />
            </Paper>
          </Grid>
        </Grid>
      </>
    )
  }
}

export default EventSearcher