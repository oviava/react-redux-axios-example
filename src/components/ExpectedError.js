import React, {Component} from 'react';

class ExpectedError extends Component{
	constructor(props){
		super(props);
	}

	render() {
		return (
			<div className='container'>
				<h1>Data would have gone here</h1>
			</div>
		)
	}
};

export default ExpectedError;