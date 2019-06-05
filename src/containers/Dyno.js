import React, { Component } from 'react';
import DynoItem from '../components/DynoItem';
import DynoDisplay from '../components/DynoDisplay';
import DynoList from '../components/DynoList';

import './dyno.scss';

export default class Dyno extends Component {
	state = {
		sumpin: [],
	};

	componentDidMount() {
		this.props.getStories('Yarn').then((data) => {
			this.setState({ sumpin: data });
		});
	}

	render() {

			return <DynoList data={this.state.sumpin} handleClick={this.handleClick} />
		// if (this.state.displayDyno) {
		// 	return <DynoDisplay data={this.state.currentDyno} exit={this.handleExit} />;
		// } else {
		// 	return <DynoList data={this.state.sumpin} handleClick={this.handleClick} />;
		// }
	}
}
