import React from "react";
import { BsLinkedin, BsGithub } from "react-icons/bs";

function WorkLinks() {
  return (
    <div className="flex justify-around mt-[-80px] mb-6">
      <a href="https://www.linkedin.com/in/joshuacaguirre/" className="flex">
        <p className="mr-2 h-fit mt-1 text-gray-400 font-bold text-lg">
          LinkedIn
        </p>
        <BsLinkedin size="2rem" color="grey" />
      </a>
      <a href="https://github.com/JoGuirre" className="flex">
        <p className="mr-2 h-fit mt-1 text-gray-400 font-bold text-lg">
          GitHub
        </p>
        <BsGithub size="2rem" color="grey" />
      </a>
    </div>
  );
}

export default WorkLinks;
