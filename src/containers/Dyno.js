import React, { Component } from 'react';
import DynoItem from '../components/DynoItem';

import './dyno.scss';

export default class Dyno extends Component {
	state = {
		sumpin: []
	};

	componentDidMount() {
		this.props.getStories('Yarn').then((data) => {
			console.log(data);
			this.setState({ sumpin: data });
		});
	}

	handleAPI = (call) => {};

	render() {
		console.log(this.state.sumpin);
		return (
			<div>
				<div className="dyno-container">
					{this.state.sumpin.map((e) => {
						console.log(e);
						{
							return <DynoItem data={e} />;
						}
					})}
				</div>
			</div>
		);
	}
}
