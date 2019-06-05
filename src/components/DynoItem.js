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
		console.log(this.item.current.classList);
	}

	setIfOdd = (d) => {
		let odd = d.index % 2 === 0 ? true : false;
		this.setState({ odd: odd });
	};

	componentDidUpdate() {
		if (this.props.isDisplaying === true) {
			setTimeout(() => {
				this.item.current.classList.remove('left-appeared');
				this.item.current.classList.add('left-disappeared');
				// this.itemTitle.current.classList.add('item-disappeared');
				// this.itemTitle.current.classList.remove('item-appeared');
			}, this.getRandomTime(100, 1000));
		} else {
			setTimeout(() => {
				this.item.current.classList.remove('left-disappeared');
				this.item.current.classList.add('left-appeared');
				// this.itemTitle.current.classList.add('item-appeared');
				// this.itemTitle.current.classList.remove('item-disappeared');
			}, this.getRandomTime(100, 1000));
		}
	}

	handleTransition = () => {
		// if (this.props.isDisplaying === true) {
		// 	setTimeout(() => {
		// 		this.item.current.classList.add('left-disappeared');
		// 	}, this.getRandomTime(100, 1000));
		// }
	};

	getRandomTime = (min, max) => {
		// let _min = Math.ceil(min);
		// let max = Math.floor(max);
		return Math.floor(Math.random() * (max - min + 1)) + min;
	};

	handleClick = () => {
		this.props.handleClick(this.props.data);
		this.handleTransition();
	};

	render() {
		return (
			<div className="dyno-item-container" ref={this.item} onClick={this.handleClick}>
				{/* <div className="item" ref={this.itemTitle}> */}
				{this.props.data.title}
				{/* </div> */}
			</div>
		);
	}
}
