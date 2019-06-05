import React, { Component } from 'react';
import DynoItem from './DynoItem';
import DynoDisplay from '../components/DynoDisplay';

import './dyno-list.scss';

export default class DynoList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			displayDyno: false,
			currentDyno: {}
		};
		this.list = React.createRef();
	}

	handleClick = (d) => {
		this.setState({ displayDyno: true });
		this.displayDyno(d);
	};

	toggleList = () => {};

	displayDyno = (data) => {
		console.log(data);
		this.setState({ currentDyno: data });
	};

	handleExit = () => {
		this.setState({ displayDyno: false });
	};

	render() {
		console.log(this.state.displayDyno);

		return (
			<div className="dyno-list-container">
				<DynoDisplay data={this.state.currentDyno} exit={this.handleExit} />
				{this.props.data.map((e, i) => {
					return (
						<DynoItem
							isDisplaying={this.state.displayDyno}
							key={e.title}
							data={e}
							index={++i}
							handleClick={this.handleClick}
							exit={this.handleExit}
						/>
					);
				})}
			</div>
		);
	}
}
