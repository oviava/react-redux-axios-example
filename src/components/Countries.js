import React, { Component } from 'react';
import { connect } from 'react-redux';

import Spinner from '../components/Spinner';
import Country from './Country';
import { fetchData } from '../actions/actions';

class Countries extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { fetchGoodData } = this.props;
    fetchGoodData();
  }

  render() {
    const { data, isLoading } = this.props;

    return isLoading ? (
      <Spinner />
    ) : (
      <div className="container">
        <table className="table table-bordered table-striped">
          <thead>
            <tr>
              <th>Name</th>
              <th>Capital</th>
              <th>Population</th>
              <th>Domain</th>
            </tr>
          </thead>
          <tbody>
            {data.map((country) => {
              return <Country key={country.name} country={country} />;
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  data: state.example.data,
  isLoading: state.example.isLoading,
});

const mapDispatchToProps = (dispatch) => ({
  fetchGoodData: () =>
    dispatch(fetchData('https://restcountries.eu/rest/v1/all')),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Countries);
