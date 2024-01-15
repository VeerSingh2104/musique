// Game.js
import React, { useState } from 'react';
import ChordQuestion from './ChordQuestion';

function Game() {
  const [currentChord, setCurrentChord] = useState(fetchNewChord());
  const [score, setScore] = useState(0);

  const handleAnswer = (selectedChord) => {
    if (selectedChord === currentChord) {
      setScore(score + 1);
    }
    setCurrentChord(fetchNewChord());
  };

  const fetchNewChord = () => {
    // List of available chords
    const chords = ['A', 'B', 'C', 'D'];

    // Randomly select a chord from the list
    const randomIndex = Math.floor(Math.random() * chords.length);
    return chords[randomIndex];
  };
  return (
    <div className="game-container">
      <ChordQuestion chord={currentChord} onAnswer={handleAnswer} />
      <p>Score: {score}</p>
    </div>
  );
}

export default Game;
