import React from "react";
import "./Key.css";
import {
  useSelector,
  useDispatch,
} from "react-redux";
import { rootState } from "../interface";
import { incPos, setBoard } from "../../redux/boardSlice";
interface IProps {
  letter: string
}

const Key: React.FC<IProps> = (props) => {
  const {
    letter
  } = props;
  const board = useSelector((state:rootState) => state.board.board);
  const pos = useSelector((state:rootState) => state.board.pos);
  const dispatch = useDispatch();

  const chooseLetter = () => {
    if (pos >= 30) {
      return;
    }
    const newBoard = [...board];
    newBoard[pos] = letter;  
    dispatch(setBoard(newBoard));
    dispatch(incPos());
  }

  return (
    <div className="letter" onClick={chooseLetter}>
      {letter}
    </div>
  );
};

export default Key;