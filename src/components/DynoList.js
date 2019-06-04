import React from 'react';
import DynoItem from './DynoItem';

import './dyno-list.scss';

export default function DynoList(props) {
  console.log(props.data);
  
  const handleClick = (d) => {
    props.handleClick(d);
  }

	return (
		<div className="dyno-list-container">
			{props.data.map((e) => {
				return <DynoItem key={e.title} data={e} handleClick={handleClick}/>;
			})}
		</div>
	);
}
