import React from 'react';
import './App.css';
import Board from './Components/Board/Board';
import Heading from './Components/Heading/Heading';
import KeyBoard from './Components/Keyboard/Keyboard';
import { useSelector } from 'react-redux';
import { rootState } from './Components/interface';


function App() {
  const board = useSelector((state:rootState) => state.board.board);

  return (
    <div className="App">
      <Heading 
        type="h1" 
        text="Wordiee"
      />
      <Heading 
        type="subtitle" 
        text="Another Wordle Clone"
      />
      <div className="board-container">
        <Board board={board} />
      </div>
      <div className="keyboard">
        <KeyBoard />
      </div>
    </div>
  );
}

export default App;