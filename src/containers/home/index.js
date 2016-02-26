import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this);
    return (
      <div className="wrap container-fluid">
        <div className="row around-xs">
          <div className="col-xs-3 center-xs">
            <div className="box">
              <h1> Home </h1>
            </div>
          </div>
          <div className="col-xs-3 center-xs">
            <div className="box">
              <h1> Home </h1>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect()(Home);
