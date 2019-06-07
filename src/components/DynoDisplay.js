import React from 'react';
import './dyno-display.scss';

export default function DynoDisplay(props) {
	const exit = () => {
		props.exit();
	};
	return (
		<div className="dyno-display-container">
			<div className="title">{props.data.title}</div>
			<div className="tech-stack" />
			<div className="description" />
			<a href={props.data.url} target="_blank">
				{props.data.url}
			</a>
			<div>by: {props.data.author}</div>
			<a href="" className="github-url" />
			<a href="" className="deployed-url" />
			<div className="exit" onClick={exit}>
				Back
			</div>
		</div>
	);
}
