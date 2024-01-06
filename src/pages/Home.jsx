import React, { useEffect, useState } from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import AnimatedLetters from "../components/animattedLetters/AnimatedLetters";

const Home = () => {
  const [letter, setLetter] = useState("text-animate");
  const roleArray = [
    "I",
    "'",
    "m",
    " ",
    "a",
    " ",
    "F",
    "u",
    "l",
    "l",
    " ",
    "S",
    "t",
    "a",
    "c",
    "k",
    " ",
    "D",
    "e",
    "v",
    "e",
    "l",
    "o",
    "p",
    "e",
    "r",
  ];

  useEffect(() => {
    const setLetterAfterDelay = () => {
      const timeoutId = setTimeout(() => {
        setLetter("text-animate-hover");
      }, 4000);
      return timeoutId;
    };
    const timeoutId = setLetterAfterDelay();
    return () => {
      clearTimeout(timeoutId);
    };
  }, []);
  return (
    <div name="home" className="w-full h-screen bg-[#0a192f]">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-pink-600 text-2xl">
          <span className={letter}>H</span>
          <span className={`${letter} _12`}>i,</span>
          <span> </span>
          <span className={`${letter} _13`}>I'</span>
          <span className={`${letter} _14`}>a</span>
          <span className={`${letter} _15`}>m</span>
        </p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
          <AnimatedLetters
            letter={letter}
            strArray={["N", "i", "k", "h", "i", "l"]}
            idx={16}
          />
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0]">
          <AnimatedLetters letter={letter} strArray={roleArray} idx={16} />
        </h2>
        <p className="text-[#8892b0] py-4 max-w-[700px]">
          I’m a full-stack developer specializing in building (and occasionally
          designing) exceptional digital experiences. Currently, I’m focused on
          building responsive full-stack web applications.
        </p>
        <div>
          <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600">
            View Work
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight className="ml-3 " />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
