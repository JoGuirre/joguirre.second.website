import React from "react";
import { BsLinkedin, BsGithub } from "react-icons/bs";

function WorkLinks() {
  return (
    <div className="flex justify-center gap-16 pb-4 md:pb-0 md:pt-4 md:gap-40">
      <a
        href="https://www.linkedin.com/in/joshuacaguirre/"
        target="_blank"
        className="flex md:p-4 md:hover:bg-gray-500 rounded-lg"
      >
        <p className="mr-2 h-fit mt-1 font-bold text-lg">LinkedIn</p>
        <BsLinkedin size="2rem" />
      </a>
      <a
        href="https://github.com/JoGuirre"
        target="_blank"
        className="flex md:p-4 md:hover:bg-gray-500 rounded-lg"
      >
        <p className="mr-2 h-fit mt-1 font-bold text-lg">GitHub</p>
        <BsGithub size="2rem" />
      </a>
    </div>
  );
}

export default WorkLinks;
