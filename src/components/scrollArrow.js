import React, { Component } from 'react';
import './scroll-arrow.scss';

export default function ScrollArrow() {
	let contI = document.querySelectorAll('i');
	let cont = document.querySelector('.scroll-arrow-container');
	console.log(cont);
	// cont.style.display = 'none';

	contI.forEach((e, i) => {
		i += 1;
		setTimeout(() => {
			stagger(e);
		}, 250 * i);
		console.log('yo');
	});

	if (cont !== null) cont.classList.add('hide');

	const stagger = (e) => {
		e.classList.add('animate-bounce');
	};

	return (
		<div className="scroll-arrow-container">
			<i className="arrow-1" />
			<i className="arrow-2" />
			<i className="arrow-3" />
			{/* <i className="arrow-2" />
			<i className="arrow-3" /> */}
		</div>
	);
}
