import React, { Component } from 'react';
import DynoItem from '../components/DynoItem';
import DynoDisplay from '../components/DynoDisplay';

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
		return (
			<div>
				<div className="dyno-container">
					{
            (this.state.displayDyno === false) ?
              {
                return (this.state.sumpin.map((e) => {
                  
                    return <DynoItem handleClick={this.handleClick} data={e} />;
                  
              }))
              }

          }
				</div>
			</div>
		);
	}
}
