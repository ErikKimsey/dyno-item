import React, { Component } from 'react';
import DynoItem from '../components/DynoItem';
import DynoDisplay from '../components/DynoDisplay';
import DynoList from '../components/DynoList';

import './dyno.scss';

export default class Dyno extends Component {
	state = {
		sumpin: [],
		displayDyno: false
	};

	componentDidMount() {
		this.props.getStories('Yarn').then((data) => {
			// console.log(data);
			this.setState({ sumpin: data });
		});
	}

	handleAPI = (call) => {};

	handleClick = (d) => {
		console.log(d);
		this.setState({ displayDyno: true });
		this.displayDyno(d);
	};

	displayDyno = (data) => {
		console.log(data);
		if (this.state.displayDyno === true) {
			return <DynoDisplay />;
		}
	};

	render() {
		if(this.state.displayDyno){
      return <DynoDisplay />
    } else {
      return <DynoList data={this.state.sumpin}/>
    }
	}
}
