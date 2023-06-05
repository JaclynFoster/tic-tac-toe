import logo from './logo.svg';
import { useState } from 'react';
import Square from './Square'
import './App.css';

function App() {
  const [squares, setSquares] = useState(["","","","","","","","",""])
  const [player, setPlayer] = useState(true)
  return (
    <div className="App">
     <Square squares={squares} player={player} setSquares={setSquares} setPlayer={setPlayer}></Square>
    </div>
  );
}

export default App;
