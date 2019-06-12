import React, { Component } from 'react';
import DynoItem from './DynoItem';
import ScrollArrow from './scrollArrow';

import './dyno-list.scss';

export default class DynoList extends Component {
	constructor(props) {
		super(props);
		this.state = {};
		this.list = React.createRef();
	}

	componentDidMount() {}

	componentDidUpdate() {
		if (this.props.isDisplaying === true) {
			setTimeout(() => {
				this.list.current.classList.add('isDisplaying');
			}, 2000);
		} else {
			setTimeout(() => {
				this.list.current.classList.remove('isDisplaying');
			}, 120);
		}
	}

	handleClick = (e) => {
		this.props.handleClick(e);
	};

	render() {
		return (
			<div className="dyno-list-container" ref={this.list}>
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
