// ChordQuestion.js
import React from 'react';

function ChordQuestion({ chord, onAnswer }) {
  return (
    <div className="chord-question">
      <p>Which chord is this?</p>
      <button onClick={() => onAnswer(chord)}>{chord}</button>
    </div>
  );
}

export default ChordQuestion;
