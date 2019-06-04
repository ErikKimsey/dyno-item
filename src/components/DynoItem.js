import React from 'react';

import './dyno-item.scss';

export default function DynoItem(props) {
	console.log(props.data);
	let data = props.data;
	return (
		<div className="dyno-item-container">
			<div className="item">{data.title}</div>
		</div>
	);
}
