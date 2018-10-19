import React, { Component } from 'react';
import { TextField, Grid } from '@material-ui/core';


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
        <Grid container justify='center'>
          <Grid item lg={8} md={10} sm={12} xs={12}>
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