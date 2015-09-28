import React, {Component} from 'react';
import Router, {Link} from 'react-router';
import {connect} from 'react-redux';
import NavBar from '../components/NavBar';
import Spinner from '../components/Spinner';

import 'bootstrap/dist/css/bootstrap.css';
import 'app.css';

@connect(state => ({routerState: state.router, example: state.example }))
class App extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		const {children} = this.props;
		const {example} = this.props;

		return (
			<div>
				<NavBar />
				<div className='container'>
				{example.isLoading ? <Spinner /> : children}
				</div>
			</div>
		);
	}
}

export default App;