import React from "react";
import "./square.css";
import {
  motion
} from "framer-motion";

interface IProps {
  val: string;
  squareIdx: number;
}

const Square: React.FC<IProps> = (props) => {
  const {
    val,
    squareIdx,
  } = props;
  const variants = {
    filled: () => ({
      scale: [1.2, 1], // scale to 1.2 then comeback to 1
      transition: {
        duration: 0.2
      }
    }),
    unfilled: () => ({
      scale: [1.2, 1], // scale to 1.2 then comeback to 1
      transition: {
        duration: 0.2
      }
    }),
  }

  return (
    <motion.div 
      animate={val ? "filled" : "unfilled"} 
      variants={variants}
    >
      <div className="square" key={squareIdx}>
        {val}
      </div>
    </motion.div>
  );
};

export default Square;