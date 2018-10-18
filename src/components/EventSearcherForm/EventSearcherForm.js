import React, { Component } from 'react';
import Button from '@material-ui/core/Button';


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
        <div>
          <h1>Event Searcher</h1>
          <form onSubmit={this.preventSubmit}>
            <input value={this.state.query} onChange={this.handleQueryChange} />
            <Button variant="contained">Search</Button>

          </form>
        </div>

      </>
    )
  }
}

export default EventSearcherForm