import React, { Component } from 'react';
import './scroll-arrow.scss';

export default function ScrollArrow() {
	let contI = document.querySelectorAll('i');
	let cont = document.querySelector('.scroll-arrow-container');
	console.log(cont);
	// cont.style.display = 'none';

	const stagger = (e) => {
		e.classList.add('animate-bounce');
	};

	const hideContainer = () => {
		if (cont !== null) cont.classList.add('hide');
	};

	contI.forEach((e, i) => {
		i += 1;
		if (i === contI.length - 1) hideContainer();
		setTimeout(() => {
			stagger(e);
			console.log(i * 250);
		}, 200 * i);
		console.log('will you wait');
	});

	return (
		<div className="scroll-arrow-container">
			<i className="arrow-1" />
			<i className="arrow-2" />
			<i className="arrow-3" />
		</div>
	);
}
