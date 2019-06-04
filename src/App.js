import React from 'react';
import logo from './logo.svg';
import './App.css';

import { getStories } from './utils/API';

import Dyno from './containers/Dyno';

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<Dyno getStories={getStories} />
			</header>
		</div>
	);
}

export default App;
