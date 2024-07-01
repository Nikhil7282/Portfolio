import React, { useEffect, useState } from "react";
import HTMLImg from "../assets/html.png";
import CSSImg from "../assets/css.png";
import JavaScript from "../assets/javascript.png";
import ReactImg from "../assets/react.png";
import NodeImg from "../assets/node.png";
import GitHubImg from "../assets/github.png";
import TailwindImg from "../assets/tailwind.png";
import MongoImg from "../assets/mongo.png";
import Loader from "../components/Loading/Loader";
import { InfiniteCards } from "../components/InfinateCards";

const items = [
  { src: HTMLImg, title: "HTML" },
  { src: CSSImg, title: "CSS" },
  { src: JavaScript, title: "JavaScript" },
  { src: ReactImg, title: "React" },
  { src: NodeImg, title: "Node" },
  { src: GitHubImg, title: "Github" },
  { src: TailwindImg, title: "Tailwind" },
  { src: MongoImg, title: "MongoDb" },
];

const Skills = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  });
  return (
    <div
      name="skills"
      className="w-full h-[calc(100vh-80px)] bg-[#0a192f] text-gray-300 flex justify-center items-center"
    >
      {loading ? (
        <Loader />
      ) : (
        <div className="h-fit rounded-md flex flex-col antialiased bg-[#0a192f] dark:bg-inherit dark:bg-grid-white/[0.05] items-center justify-center  overflow-hidden">
          <div className="text-left pb-8 w-full ml-5 md:text-center">
            <p className="text-4xl font-bold inline border-b-4 border-pink-600">
              Skills
            </p>
          </div>
          <p className="ml-2 font-mono mb-5">
            {" "}
            I thrive on challenges and am always eager to learn and adapt to new
            technologies and industry trends.
          </p>
          <InfiniteCards items={items} direction="right" speed="normal" />
        </div>
      )}
    </div>
  );
};

export default Skills;
