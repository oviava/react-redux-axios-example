import React, {Component} from 'react';
import {connect} from 'react-redux';
import Country from './Country';

@connect(state => ({data: state.example.data}))
class Countries extends Component{
	constructor(props){
		super(props);
	}

	render() {

		const {data} = this.props;

		return (
			<div className='container'>
				<table className='table table-bordered table-striped'>
					<thead>
						<tr>
							<th>Name</th>
							<th>Capital</th>
							<th>Population</th>
							<th>Domain</th>
						</tr>
					</thead>
					<tbody>
					{data.map(country => {
						return (
							<Country key={country.name} country={country} />
						)
					})}
					</tbody>
				</table>
			</div>
		)
	}
};

export default Countries;