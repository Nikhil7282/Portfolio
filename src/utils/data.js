import Blog from "/projects/BlogHub.png";
import Xost from "/projects/Xost.png";
import Cipher from "/projects/cipher.png";

import Javascript from "/svgs/javascript-js.svg";

export const data = [
  {
    id: 1,
    title: "BlogHub",
    description:
      "BlogHub is a full-stack web application built using React, Node.js, and MongoDB. It allows users to create, read, update, and delete blog posts.BlogHub provides a platform to share your thoughts and experiences with the world.",
    imageUrl: Blog,
    github: "https://github.com/Nikhil7282/BlogHub-Client.git",
    live: "https://bloghub20.netlify.app/",
    tags: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDb",
      "End-to-End Development",
    ],
  },
  {
    id: 2,
    title: "Xost",
    description:
      "XOST is a real-time chat application built using React, Node.js, and WebSockets.Making it ideal for team collaboration, customer support, or social interactions.",
    imageUrl: Xost,
    github: "https://github.com/Nikhil7282/RoomChat.git",
    live: "https://x-ost.vercel.app/",
    tags: [
      "React",
      "Node.js",
      "Typescript",
      "Express.js",
      "MongoDb",
      "Web Sockets",
      "End-to-End Development",
    ],
  },
  {
    id: 3,
    title: "React JS Application",
    imageUrl: Cipher,
    description:
      "React Cipher is a web application designed to securely manage passwords. It uses MySQL for data storage and encryption techniques to safeguard sensitive information.",
    github: "https://github.com/Nikhil7282/ReactCipher-Client.git",
    live: "",
    tags: [
      "React",
      "Node.js",
      "Express.js",
      "MySQl",
      "JsonWebToken",
      "End-to-End Development",
    ],
  },
];

export const skillsData = [
  [1, "JavaScript", Javascript],
  [2, "TypeScript", "/svgs/typescript-icon.svg"],
  [3, "Java", "/svgs/java-vertical.svg"],
  [4, "React", "/svgs/react.svg"],
  [5, "Next.js", "/svgs/nextjs.svg"],
  [6, "Node.js", "/svgs/node-js.svg"],
  [7, "Express", "/svgs/express-original.svg"],
  [8, "Tailwind", "/svgs/tailwind-css.svg"],
  [9, "Framer", "/svgs/framer.svg"],
  [10, "Redux", "/svgs/redux-original.svg"],
  [11, "MongoDB", "/svgs/mongodb-original.svg"],
  [12, "MySQL", "/svgs/MySQL.svg"],
  [13, "Redis", "/svgs/redis.svg"],
  [14, "Cloudinary", "/svgs/cloudinary.svg"],
  [15, "Docker", "/svgs/Docker.svg"],
  [16, "Axios", "/svgs/axios.svg"],
  [17, "HTML", "/svgs/file-type-html.svg"],
  [18, "CSS", "/svgs/file-type-css.svg"],
  [19, "Git", "/svgs/git.svg"],
  [20, "GitHub", "/svgs/github.svg"],
  [21, "", "/svgs/etc.svg"],
];
