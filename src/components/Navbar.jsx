import React, { useState } from "react";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import Logo from "/Logo.png";
import { useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const handleClick = (route) => {
    setNav(!nav);
    if (route) {
      navigate(`${route}`);
    } else {
      return;
    }
  };

  return (
    <div className="w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300">
      <div onClick={() => navigate("/")}>
        <img
          src={Logo}
          alt="Logo Image"
          style={{ width: "100px", height: "100px" }}
        />
      </div>
      <ul className="hidden md:flex">
        <li onClick={() => navigate("/")}>Home</li>
        <li onClick={() => navigate("/about")}>About</li>
        <li onClick={() => navigate("/skills")}>Skills</li>
        <li onClick={() => navigate("/projects")}>Projects</li>
        <li onClick={() => navigate("/contact")}>Contact</li>
      </ul>

      <div
        onClick={() => handleClick()}
        className="md:hidden z-30 text-2xl mr-4"
      >
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[rgba(10,25,47,0.85)] flex flex-col justify-center items-center z-20"
        }
      >
        <li className="py-6 text-4xl" onClick={() => handleClick("/")}>
          Home
        </li>
        <li className="py-6 text-4xl" onClick={() => handleClick("/about")}>
          {" "}
          About
        </li>
        <li className="py-6 text-4xl" onClick={() => handleClick("/skills")}>
          {" "}
          Skills
        </li>
        <li className="py-6 text-4xl" onClick={() => handleClick("/projects")}>
          {" "}
          Projects
        </li>
        <li className="py-6 text-4xl" onClick={() => handleClick("/contact")}>
          {" "}
          Contact
        </li>
      </ul>

      {location.pathname === "/" && (
        <div className="hidden lg:flex fixed flex-col top-[35%] right-0">
          <ul>
            <li className="w-[160px] h-[60px] flex justify-between items-center relative right-[-100px] hover:right-[-10px] duration-300 bg-blue-600">
              <a
                className="flex justify-between items-center w-full text-gray-300"
                href="http://www.linkedin.com/in/nikhil-sa"
                target="_blank"
              >
                <FaLinkedin size={30} />
                Linkedin
              </a>
            </li>
            <li className="w-[160px] h-[60px] flex justify-between items-center relative right-[-100px] hover:right-[-10px] duration-300 bg-[#333333]">
              <a
                className="flex justify-between items-center w-full text-gray-300"
                href="https://github.com/Nikhil7282"
                target="_blank"
              >
                <FaGithub size={30} />
                Github
              </a>
            </li>
            <li className="w-[160px] h-[60px] flex justify-between items-center relative right-[-100px] hover:right-[-10px] duration-300 bg-[#6fc2b0]">
              <a
                className="flex justify-between items-center w-full text-gray-300"
                href="https://mail.google.com/"
                target="_blank"
              >
                <HiOutlineMail size={30} />
                Email
              </a>
            </li>
            <li className="w-[160px] h-[60px] flex justify-between items-center relative right-[-100px] hover:right-[-10px] duration-300 bg-[#565f69]">
              <a
                className="flex justify-between items-center w-full text-gray-300"
                href="https://drive.google.com/file/d/1i_7w3qx5v1KlgFtzUnwKdJp6jvYgOm4S/view?usp=sharing"
                target="_blank"
              >
                <BsFillPersonLinesFill size={30} />
                Resume
              </a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
