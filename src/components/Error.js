import React, { Component } from 'react';

import { connect } from 'react-redux';

class Error extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { data } = this.props;
    return (
      <div className="row">
        <div className="col-md-12">
          <div className="error-template">
            <h1>Oops!</h1>
            <h2>{data.status}</h2>
            <div className="error-details">{data.message}</div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({ data: state.example.data });

export default connect(mapStateToProps)(Error);
