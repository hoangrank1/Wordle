import React from "react";
import "./keyboard.css";
import Key from "../Key/Key";
import { rootState } from "../interface";
import {
  useSelector,
  useDispatch,
} from "react-redux";
import { 
  decPos, 
  incRow, 
  setBoard 
} from "../../redux/boardSlice";
import wordList from "../../words.json";

const KeyBoard: React.FC = () => {
  const rows: string[] = [
    "q w e r t y u i o p", 
    "a s d f g h j k l", 
    "z x c v b n m"
  ];

  const pos = useSelector((state:rootState) => state.board.pos);
  const row = useSelector((state:rootState) => state.board.row);
  const board = useSelector((state:rootState) => state.board.board);
  const correctWord = useSelector((state:rootState) => state.board.correctWord);
  const dispatch = useDispatch();

  let allWords: string[] = wordList.words;
  let currentWord: string = `${board[pos-5]}${board[pos-4]}${board[pos-3]}${board[pos-2]}${board[pos-1]}`.toLowerCase();

  const clickBack = () => {
    if (Math.floor((pos - 1) / 5) < row) {
      return;
    }
    const newBoard = [...board];
    newBoard[pos - 1] = "";
    dispatch(setBoard(newBoard));
    dispatch(decPos());
  }

  const clickEnter = () => {
    const check = allWords.includes(currentWord);
    if (check === true) {
      if (pos === 0 || pos % 5 !== 0) {
        return;
      }
      if (currentWord.toUpperCase() === correctWord) {
        alert("The word is: " + correctWord);
      }
      dispatch(incRow());
    }
    else {
      alert("Invalid words");
    }
    if (pos === 30 && check === true) {
      alert("The word is: " + correctWord);
    }
  }

  return (
    <div className="keyboard-container">
      {rows.map((row, idx) => {
        return (
          <div key={idx} className="row">
            {idx === 2 && 
              <span className="letter-row" onClick={clickEnter}>
                Enter
              </span>
            }
            {row.split(" ").map((letter, idx) => {
              return (
                <div key={idx} className="letter-row">
                  <Key letter={letter.toUpperCase()} />
                  {letter === "m" && <span onClick={clickBack}>Back</span>}
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default KeyBoard;