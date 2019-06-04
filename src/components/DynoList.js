import React from 'react';
import DynoItem from './DynoItem';

import './dyno-list.scss';

export default function DynoList(props) {
	console.log(props.data);

	return (
		<div className="dyno-list-container">
			{props.data.map((e) => {
				return <DynoItem key={e.title} data={e} />;
			})}
		</div>
	);
}
