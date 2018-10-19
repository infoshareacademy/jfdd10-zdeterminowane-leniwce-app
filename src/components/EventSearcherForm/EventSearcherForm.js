import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import { TextField, Grid } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';


class EventSearcherForm extends Component {

  state = {
    query: ''
  }

  handleQueryChange = event => {
    this.setState({
      query: event.target.value
    },
      () => this.props.getSearchQuery(this.state.query)
    )
  }

  preventSubmit = event => {
    event.preventDefault();
    this.props.getSearchQuery(this.state.query);
  }


  render() {
    return (
      <>
      <Grid container md='auto' justify='center'>
      <Grid item lg={6} md={6} sm >
      <form onSubmit={this.preventSubmit}>
            <TextField fullWidth='true' label='Search field' type='search' margin='normal' variant='filled' value={this.state.query} onChange={this.handleQueryChange} />
            {/* <Button variant="contained" size='large'>
            Search
            </Button> */}

          </form>

      </Grid>
      
      </Grid>
         

      </>
    )
  }
}

export default EventSearcherForm