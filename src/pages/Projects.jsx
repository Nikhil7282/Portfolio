/* eslint-disable react/jsx-no-comment-textnodes */
import React, { useEffect, useState } from "react";
import { data } from "../utils/data";
import Loader from "../components/Loading/Loader";
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
          <div className="pb-4">
            <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600">
              Projects
            </p>
            <p className="pt-4 pb-0">
              // View More Projects on{" "}
              <a
                className="text-pink-600 hover:text-gray-200"
                href="https://github.com/Nikhil7282"
              >
                Github
              </a>
            </p>
          </div>
          <section
            className="flex flex-col justify-center items-center w-full min-h-screen scroll-mt-36 dark:bg-darkBg dark:text-white px-5 pb-5 pt-0"
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
