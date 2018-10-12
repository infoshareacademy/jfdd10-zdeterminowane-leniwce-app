import React, { Component } from 'react';


class EventSearcherForm extends Component {

state ={
  query: ''
}

handleQueryChange = event => {
  this.setState({
    query: event.target.value
  })
}

preventSubmit= event => {
  event.preventDefault();
  this.props.getSearchQuery(this.state.query);
}


  render() {
    return (
      <>
        <div>
          <h1>Event Searcher</h1>
          <form onSubmit={this.preventSubmit}>
          <input value={this.state.query} onChange={this.handleQueryChange}/>
          <button>Search</button>

          </form>
        </div>

      </>
    )
  }
}

export default EventSearcherForm