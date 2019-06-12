import React from 'react';
import './scroll-arrow.scss';

function animateItems(e, d){
  
}

export default function ScrollArrow() {
	let cont = document.querySelectorAll('i');
	if (cont.length) {
		let i = 0,
			delay = 500;
		// document.querySelector('.scroll-arrow-container').classList.add('animate-bounce');
		while (i < cont.length - 1) {
			console.log(cont[i]);
			setTimeout(() => {
				cont[i].classList.add('animate-bounce');
				console.log(Date.now());
			}, delay);
			i++;
			delay += 500;
		}
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
