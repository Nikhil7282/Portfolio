import React, { useEffect, useState } from "react";
import Loader from "../components/Loading/Loader";
import { skillsData } from "../utils/data";
import { motion } from "framer-motion";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

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
      className="w-full md:h-[calc(100vh-80px)] h-screen bg-[#0a192f] text-gray-300 flex justify-center "
    >
      {loading ? (
        <Loader />
      ) : (
        <div className="rounded-md flex flex-col antialiased bg-[#0a192f] dark:bg-inherit dark:bg-grid-white/[0.05] justify-center  overflow-hidden">
          <h2 className="text-4xl uppercase mb-8 text-center font-semibold">
            My Skills
          </h2>
          <ul className="flex flex-wrap justify-center items-center gap-2 text-lg text-gray-800 my-26 max-w-[53rem]">
            {skillsData.map((skill, idx) => (
              <motion.li
                className="bg-zinc-400 borderBlack flex justify-center items-center rounded-xl px-5 py-3 dark:bg-white/10 dark:text-white/80"
                key={skill[0]}
                variants={fadeInAnimationVariants}
                initial="initial"
                whileInView="animate"
                viewport={{
                  once: true,
                }}
                custom={idx}
              >
                <img
                  src={skill[2]}
                  alt={skill[1]}
                  width={24}
                  height={24}
                  className="w-6 h-6 mr-2 inline"
                />
                {skill[1]}
              </motion.li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Skills;
