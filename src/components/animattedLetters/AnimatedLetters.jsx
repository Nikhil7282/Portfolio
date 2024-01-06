import "./letters.css";
import React from "react";

function AnimatedLetters({ letter, strArray, idx }) {
  return (
    <span>
      {strArray.map((char, i) => (
        <span key={char + i} className={`${letter} _${i + idx}`}>
          {char}
        </span>
      ))}
    </span>
  );
}

export default AnimatedLetters;
