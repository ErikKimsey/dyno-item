import React from 'react';

import './dyno-item.scss';

export default function DynoItem(props) {
	let data = props.data;

	const handleClick = () => {
		props.handleClick(data);
	};

	return (
		<div className="dyno-item-container" onClick={handleClick}>
			<div className="item">{data.title}</div>
		</div>
	);
}
