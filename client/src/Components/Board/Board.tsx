import React from "react";
import "./board.css";
import Square from "../Square/Square";

interface IProps {
  board: string[];
}

const Board: React.FC<IProps> = (props) => {
  const {
    board
  } = props;

  return (
    <div className="board">
      {board.map((square, idx) => {
        return (
          <Square key={idx} val={square} squareIdx={idx} />
        );
      })}
    </div>
  );
};

export default Board;