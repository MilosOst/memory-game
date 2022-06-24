import { useState } from 'react';
import './style.css'

import Scoreboard from './components/Scoreboard.js';
import Main from './components/Main.js';


function App() {
	const [score, setScore] = useState(0);
	const [highScore, setHighScore] = useState(0);

	const incrementScore = () => {
		setScore(score + 1);
	};

	const resetScore = () => {
		// Check if new high score exists
		if (score > highScore) setHighScore(score);
		setScore(0);
	}

  	return (
		<div className="App">
			<header className="header">
				<h2 className="header-title"> NBA Memory Game</h2>
				<Scoreboard score={score} highScore={highScore}></Scoreboard>
			</header>
			<Main incrementScore={incrementScore} resetScore={resetScore} score={score}></Main>
		</div>
	);
}

export default App;
