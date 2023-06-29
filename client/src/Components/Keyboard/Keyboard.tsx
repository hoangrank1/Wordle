import React from "react";
import "./keyboard.css";
import Key from "../Key/Key";
import { rootState } from "../interface";
import {
  useSelector,
  useDispatch,
} from "react-redux";
import { decPos, incRow, setBoard } from "../../redux/boardSlice";

const KeyBoard: React.FC = () => {
  const rows: string[] = [
    "q w e r t y u i o p", 
    "a s d f g h j k l", 
    "z x c v b n m"
  ];

  const pos = useSelector((state:rootState) => state.board.pos);
  const board = useSelector((state:rootState) => state.board.board);
  const dispatch = useDispatch();

  const clickBack = () => {
    if (pos <= 0) {
      return;
    }
    const newBoard = [...board];
    newBoard[pos - 1] = "";
    dispatch(setBoard(newBoard));
    dispatch(decPos());
  }

  const clickEnter = () => {
    if (pos === 0 || pos % 5 !== 0) {
      return;
    }
    dispatch(incRow());
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