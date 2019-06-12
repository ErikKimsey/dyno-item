import React from 'react';
import './dyno-display.scss';

export default function DynoDisplay(props) {
	const exit = () => {
		props.exit();
	};
	return (
		<div className="dyno-display-container">
			<div className="display-item title">{props.data.title}</div>
			<div className="display-item tech-stack" />
			<div className="display-item description" />
			<a href={props.data.url} target="_blank">
				{props.data.url}
			</a>
			<div className="display-item title">by: {props.data.author}</div>
			<a href="" className="display-item github-url" />
			<a href="" className="display-item deployed-url" />
			<div className="display-item exit" onClick={exit}>
				Back
			</div>
		</div>
	);
}
