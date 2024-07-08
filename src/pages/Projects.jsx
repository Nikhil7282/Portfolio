import React, { useEffect, useState } from "react";
import { data } from "../utils/data";
import Loader from "../components/Loading/Loader";
import { motion } from "framer-motion";
import ProjectCard from "../components/ProjectCard";

function Projects() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  });

  return (
    <div
      name="projects"
      className="w-full min-h-fit text-gray-300 bg-[#0a192f]"
    >
      {loading ? (
        <Loader />
      ) : (
        <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center items-center w-full">
          <div className="pb-8">
            <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600">
              Projects
            </p>
            <p className="py-6">
              // View More Projects on{" "}
              <a
                className="text-pink-600 hover:text-gray-200"
                href="https://github.com/Nikhil7282"
              >
                Github
              </a>
            </p>
          </div>

          {/* <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 mb-5">
            {data.map((item, index) => (
              <div
                key={index}
                style={{ backgroundImage: `url(${item.image})` }}
                className="shadow-lg shadow-[#040c16] group container rounded-md 
              flex justify-center text-center items-center mx-auto content-div "
              >
                <div className="opacity-0 group-hover:opacity-100 ">
                  <span className="text-2xl font bold text-white tracking-wider ">
                    {item.name}
                  </span>
                  <div className="pt-8 text-center ">
                    {item.github && (
                      <a href={item.github} target="_blank">
                        <button
                          className="text-center rounded-lg px-4 py-3 m-2
                       bg-white text-gray-700 font-bold text-lg"
                        >
                          Code
                        </button>
                      </a>
                    )}
                    {item.live && (
                      <a href={item.live} target="_blank">
                        <button
                          className="text-center rounded-lg px-4 py-3 m-2
                       bg-white text-gray-700 font-bold text-lg"
                        >
                          Live
                        </button>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div> */}
          <section
            className="flex flex-col justify-center items-center w-full min-h-screen scroll-mt-36 dark:bg-darkBg dark:text-white p-5"
            id="projects"
          >
            <div className="my-10">
              {data.map((project, index) => (
                <React.Fragment key={index}>
                  <ProjectCard {...project} />
                </React.Fragment>
              ))}
            </div>
          </section>
        </div>
      )}
    </div>
  );
}

export default Projects;
