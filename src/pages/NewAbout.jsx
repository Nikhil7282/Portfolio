import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCss3,
  faGitAlt,
  faHtml5,
  faJs,
  faNodeJs,
  faReact,
} from "@fortawesome/free-brands-svg-icons";

function NewAbout() {
  return (
    <div
      name="newAbout"
      className="w-full h-screen bg-[#0a192f] text-gray-300 flex"
    >
      <div className="w-1/2 h-screen">About Content</div>
      <div className="stage-cube-cont w-1/2 h-screen ml-0 flex">
        <div className="flex justify-center align-middle w-fit h-fit">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faHtml5} color="#e34c26" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faCss3} color="#e34c26" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faJs} color="#e34c26" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#e34c26" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faNodeJs} color="#e34c26" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGitAlt} color="#e34c26" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewAbout;
