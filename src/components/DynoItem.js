import React, { Component } from 'react';

import './dyno-item.scss';

export default class DynoItem extends Component {
	constructor(props) {
		super(props);
		this.state = {
			odd: false
		};
		this.item = React.createRef();
		this.itemTitle = React.createRef();
	}

	componentDidMount() {
		this.setIfOdd(this.props);
		if (this.props.isDisplaying === true) {
			this.item.current.classList.add('left-appeared');
			// this.item.current.classList.remove('left-disappeared');
		}
	}

	setIfOdd = (d) => {
		let odd = d.index % 2 === 0 ? true : false;
		this.setState({ odd: odd });
	};

	componentDidUpdate() {
		console.log('item update');

		if (this.props.isDisplaying === true) {
			setTimeout(() => {
				this.item.current.classList.remove('left-appeared');
				this.item.current.classList.add('left-disappeared');
			}, this.getRandomTime(100, 1000));
		} else {
			setTimeout(() => {
				this.item.current.classList.remove('left-disappeared');
				this.item.current.classList.add('left-appeared');
			}, this.getRandomTime(100, 1000));
		}
	}

	getRandomTime = (min, max) => {
		return Math.floor(Math.random() * (max - min + 1)) + min;
	};

	handleClick = () => {
		this.props.handleClick(this.props.data);
	};

	render() {
		return (
			<div className="dyno-item-container" ref={this.item} onClick={this.handleClick}>
				<div className="item" ref={this.itemTitle}>
					{this.props.data.title}
				</div>
			</div>
		);
	}
}
