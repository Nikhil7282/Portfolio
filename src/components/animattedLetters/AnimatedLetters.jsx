import "./letters.css";
import React from "react";

function AnimatedLetters({ letter, strArray, idx }) {
  return (
    <div>
      {strArray.map((char, i) => (
        <span key={char + i} className={`${letter} _${i + idx}`}>
          {char === " " ? <>&#160;</> : char}
        </span>
      ))}
    </div>
  );
}

export default AnimatedLetters;
