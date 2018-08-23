import React, { Component } from 'react';

import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class NavBar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <nav className="navbar navbar-inverse navbar-static-top">
        <div className="container-fluid">
          <div className="navbar-header">
            <Link className="navbar-brand" to="/">
              React Redux Axios
            </Link>
          </div>
          <div id="navbar">
            <ul className="nav navbar-nav">
              <li>
                <Link to="/countries">Countries</Link>
              </li>
              <li>
                <Link to="/othercountry">Other Country</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

const mapStateToProps = (state) => ({ routerState: state.router });

export default connect(mapStateToProps)(NavBar);
