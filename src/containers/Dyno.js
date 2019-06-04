import React, { Component } from 'react';
import DynoItem from '../components/DynoItem';


import './dyno.scss';

export default class Dyno extends Component {
	render() {
		return (
			<div>
				<div className="dyno-container">
					<DynoItem />
				</div>
			</div>
		);
	}
}
