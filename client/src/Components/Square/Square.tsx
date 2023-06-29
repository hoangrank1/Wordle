import React from "react";
import "./square.css";

interface IProps {
  val: string;
  squareIdx: number;
}

const Square: React.FC<IProps> = (props) => {
  const {
    val,
    squareIdx,
  } = props;

  return (
    <div className="square" key={squareIdx}>
      {val}
    </div>
  );
};

export default Square;