import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this);
    return (
      <div classNameName="">
        { this.props.children }
      </div>
    );
  }
}

export default connect()(App);
