import React, { Component } from 'react';
import EventSearcherResults from '../EventSearcherResults/EventSearcherResults'
import EventSearcherForm from '../EventSearcherForm/EventSearcherForm';
import { Grid, Paper } from '@material-ui/core';

class EventSearcher extends Component {

  state = {
    query: '',
  }

  setSearchQuery = (query) =>
    this.setState({
      query: query
    })

  getFilteredEvents = () => this.props.eventsData.filter(
    event => [event.title, event.description].map(
      phrase => phrase.toLowerCase()
    ).some(phrase => phrase.includes(this.state.query.toLocaleLowerCase())))

  render() {
    return (
      <>
        <EventSearcherForm getSearchQuery={this.setSearchQuery} />

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