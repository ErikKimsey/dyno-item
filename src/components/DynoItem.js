import React, { Component } from 'react';

import './dyno-item.scss';

export default class DynoItem extends Component {
	constructor(props) {
		super(props);
		this.state = {
			odd: false
		};
	}

	componentDidMount() {
		this.setIfOdd(this.props);
	}

	setIfOdd = (d) => {
		let odd = d.index % 2 === 0 ? true : false;
		this.setState({ odd: odd });
	};

	handleClick = () => {
		this.props.handleClick(this.props.data);
	};

	render() {
		return (
			<div className="dyno-item-container" onClick={this.handleClick}>
				<div className="item">{this.props.data.title}</div>
			</div>
		);
	}
}
