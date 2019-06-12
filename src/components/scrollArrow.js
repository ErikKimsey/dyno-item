import React from 'react';
import './scroll-arrow.scss';

export default function ScrollArrow() {
	let cont = document.querySelectorAll('i');
	if (cont.length) {
		let i = 0;
		document.querySelector('.scroll-arrow-container').classList.add('animate-bounce');
		while (i < cont.length - 1) {
			setTimeout(() => {
				cont[i].classList.add('animate-bounce');
			}, 300);
			i++;
			console.log(cont[i]);
		}
		console.log('length');
	} else {
		console.log('nope');
	}

	return (
		<div className="scroll-arrow-container">
			<i className="arrow-1" />
			<i className="arrow-2" />
			<i className="arrow-3" />
		</div>
	);
}
