import React, { Component } from 'react';
import DynoDisplay from '../components/DynoDisplay';
import DynoList from '../components/DynoList';

import './dyno.scss';

export default class Dyno extends Component {
	state = {
		displayDyno: false,
		sumpin: [],
		currentDyno: {}
	};

	componentDidMount() {
		window.addEventListener('scroll', (e) => {
			console.log(e.target);
		});
		this.props.getStories('Yarn').then((data) => {
			this.setState({ sumpin: data });
		});
	}

	displayDyno = (data) => {
		console.log(data);
		this.setState({ currentDyno: data });
	};

	handleExit = () => {
		this.setState({ displayDyno: false });
	};

	handleClick = (d) => {
		this.setState({ displayDyno: true });
		this.displayDyno(d);
	};

	render() {
		return (
			<div>
				<DynoDisplay data={this.state.currentDyno} exit={this.handleExit} handleClick={this.handleClick} />
				<DynoList
					data={this.state.sumpin}
					handleClick={this.handleClick}
					isDisplaying={this.state.displayDyno}
				/>
			</div>
		);
	}
}
