import logo from './logo.svg'
import { useState } from 'react'
import Square from './Square'
import './App.css'

function App () {
  const [squares, setSquares] = useState(['', '', '', '', '', '', '', '', ''])
  const [player, setPlayer] = useState(true)

  const handleClick = () => {
    setSquares(["","","","","","","","",""])
    setPlayer(true)
  }

  const calculateWinner = (arr) => {
    let lines = [[0,1,2], [0,3,6], [0,4,8],[1,4,7], [2,5,8], [3,4,5],[6,7,8], [2,4,6]]
    let answer = "Who will win"
    for (let i = 0; i < lines.length; i++) {
      const [a,b,c] = lines[i]
      if (arr[a] && arr[b] && arr[c]) {
        if ((arr[a] === arr[b]) && (arr[b] === arr[c])) {
          answer =  `Player ${arr[a]} won!!!`
        }
      } 
    }
    return answer
  }

  return (
    <div className="App">
      <button onClick={handleClick}>Reset</button>
      <div className="container">
        {squares.map((value, index) => {
          return (
            <Square
            squares={squares}
            player={player}
            setSquares={setSquares}
            setPlayer={setPlayer}
            squareValue={value}
            index={index}
            />
            )
          })}
          <span>{calculateWinner(squares)}</span>
      </div>
    </div>
  )
}


export default App;
