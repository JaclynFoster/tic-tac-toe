import logo from './logo.svg';
import Square from './Square'
import './App.css';

function App() {
  const myVar = "Variable"
  return (
    <div className="App">
     <Square propVar={myVar}/>
    </div>
  );
}

export default App;
