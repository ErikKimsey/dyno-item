import React from 'react';
import DynoItem from './DynoItem';

import './dyno-list.scss';

export default function DynoList(props) {
	return (
		<div className="dyno-list-container">
			{props.data.map((e) => {
				return <DynoItem key={e.title} data={e} handleClick={props.handleClick} exit={props.exit} />;
			})}
		</div>
	);
}
