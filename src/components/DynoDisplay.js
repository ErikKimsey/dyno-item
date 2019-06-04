import React from 'react';
import './dyno-display.scss';

export default function DynoDisplay(props) {
	console.log(props.data);

	return (
		<div className="dyno-display-container">
			<div className="title">{props.data.title}</div>
			<div className="tech-stack" />
			<div className="description" />
			<div className="github-url" />
			<div className="deployed-url" />
		</div>
	);
}
