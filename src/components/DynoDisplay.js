import React from 'react';
import './dyno-display.scss';

export default function DynoDisplay(props) {
  const exit = () => {
    console.log('exit');
    
  }
	return (
		<div className="dyno-display-container">
    <div className="exit"></div>
			<div className="title">{props.data.title}</div>
			{/* <div className="tech-stack" />
			<div className="description" />
			<a href="" className="github-url" />
			<a href="" className="deployed-url" /> */}
		</div>
	);
}
