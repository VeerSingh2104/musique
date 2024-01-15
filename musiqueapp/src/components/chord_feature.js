// App.js
import React, { useState, useEffect } from 'react';
import Game from './Game';

function App() {
  return (
    <div className="app-container">
      <h1>Guitar Chord Game</h1>
      <Game />
    </div>
  );
}

export default App;
