import React, { Component, PropTypes } from 'react';
import { connect } from 'redux';

class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="">
        <h1> Home </h1>
      </div>
    );
  }
}

export default connect()(Home);
