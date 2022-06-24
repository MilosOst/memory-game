import { useState } from 'react';
import './style.css'

import Scoreboard from './components/Scoreboard.js';
import Main from './components/Main.js';
import logo from './logo.svg';


function App() {
	const [score, setScore] = useState(0);
	const [highScore, setHighScore] = useState(0);

  	return (
		<div className="App">
			<header className="header">
				<h2 className="header-title">Memory Game</h2>
				<Scoreboard score={score} highScore={highScore}></Scoreboard>
			</header>
			<Main></Main>
		</div>
	);
}

export default App;
