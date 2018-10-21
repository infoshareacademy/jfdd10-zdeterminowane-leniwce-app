import React, { Component } from 'react';
import { TextField, Grid, InputAdornment } from '@material-ui/core';
import AccountCircle from '@material-ui/icons/AccountCircle';
import SearchIcon from '@material-ui/icons/Search'



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
    const styles = {
      textField: {
        fontSize: 150
      }
    }
    return (
      <>
        <Grid container justify='center'>
          <Grid item lg={8} md={10} sm={12} xs={12}>
            <form onSubmit={this.preventSubmit}>
              <TextField
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon />
                    </InputAdornment>
                  ),
                }}


                placeholder='Search for events'
                fullWidth={true}
                type='search'
                margin='normal'
                variant='filled'
                value={this.state.query} onChange={this.handleQueryChange} />

            </form>
          </Grid>
        </Grid>
      </>
    )
  }
}

export default EventSearcherForm