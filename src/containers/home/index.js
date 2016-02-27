import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { increment, decrement } from '../../actions';
import FlatButton from 'material-ui/lib/flat-button';
import Colors from 'material-ui/lib/styles/colors';


const style = {
  margin: 12,
  paddingTop: 10,
  color: Colors.blue100
};

class Home extends Component {
  constructor(props) {
    super(props);
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }

  increment() {
    this.props.increment(this.props.count);
  }

  decrement() {
    this.props.decrement(this.props.count);
  }

  render() {
    return (
      <div className="wrap container-fluid">
        <div className="row around-xs">
          <div className="col-xs-3 center-xs">
            <div className="box">
              <h1>{this.props.count}</h1>
            </div>
          </div>
        </div>
        <div className="row around-xs">
          <div className="col-xs-5 center-xs">
            <div className="box">
              <div className="">
                <FlatButton onClick={ this.increment } primary={true} style={style} label={<i className="fa fa-plus fa-2x"></i>} />
                <FlatButton onClick={ this.decrement } secondary={true} style={style} label={<i className="fa fa-minus fa-2x"></i>} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Home.propTypes = {
  count: PropTypes.number,
  increment: PropTypes.func.isRequired,
  decrement: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  return { count: state.counter.count };
}

export default connect(mapStateToProps, { increment, decrement })(Home);
