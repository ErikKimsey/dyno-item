import React, { Component } from 'react';
import DynoItem from './DynoItem';

import './dyno-list.scss';

export default class DynoList extends Component {
	constructor(props) {
		super(props);
		this.state = {};
		this.list = React.createRef();
	}

	componentDidMount() {
		console.log('mounted list');

		window.addEventListener('scroll', (e) => {
			console.log(e.target);
		});
	}

	handleClick = (e) => {
		this.props.handleClick(e);
	};

	render() {
		return (
			<div className="dyno-list-container">
				{this.props.data.map((e, i) => {
					return (
						<DynoItem
							isDisplaying={this.props.isDisplaying}
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
