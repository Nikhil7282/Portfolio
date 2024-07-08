import React, { useEffect, useState } from "react";
import Loader from "../components/Loading/Loader";

const About = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  });

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div
          name="about"
          className="w-full h-[calc(100vh-80px)] bg-[#0a192f] text-gray-300"
        >
          <div className="flex flex-col justify-center items-center w-full h-full">
            <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
              <div className="sm:text-right pb-8 pl-4">
                <p className="text-4xl font-bold inline border-b-4 border-pink-600">
                  About
                </p>
              </div>
              <div></div>
            </div>
            <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
              <div className="sm:text-right text-4xl font-bold">
                <p>
                  Hi. I'm Nikhil, nice to meet you. Please take a look around.
                </p>
              </div>
              <div>
                <p className="font-mono">
                  I am a Electronics and Communication graduate with aspirations
                  of becoming a prosperous developer. I'm passionate about
                  programming and also enjoy working with web technologies and
                  blockchain technologies. I'm always eager to connect with
                  like-minded individuals, so feel free to reach out if you'd
                  like to discuss a project or simply geek out about all things
                  web development!
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default About;
