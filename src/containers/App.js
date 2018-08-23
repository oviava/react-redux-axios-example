import React, { Component } from 'react';

import NavBar from '../components/NavBar';

import 'bootstrap/dist/css/bootstrap.css';
import '../styles/app.css';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { children } = this.props;

    return (
      <div>
        <NavBar />
        <div className="container">{children}</div>
      </div>
    );
  }
}

export default App;
