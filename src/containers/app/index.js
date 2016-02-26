import React, { Component, PropTypes } from 'react';
import { connect } from 'redux';

class App extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="">
        <h1> App </h1>
      </div>
    );
  }
}

export default connect()(App);
