import React, { Component } from 'react';
import { connect } from 'react-redux';

import Spinner from '../components/Spinner';
import { fetchData } from '../actions/actions';

class ExpectedError extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { fetchBadData } = this.props;
    fetchBadData();
  }

  render() {
    const { isLoading } = this.props;
    return isLoading ? (
      <Spinner />
    ) : (
      <div className="container">
        <h1>Data would have gone here</h1>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  data: state.example.data,
  isLoading: state.example.isLoading,
});

const mapDispatchToProps = (dispatch) => ({
  fetchBadData: () =>
    dispatch(fetchData('https://restcountries.eu/rest/v1/callingcode/123123')),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ExpectedError);
