import React from "react";
import { BsLinkedin, BsGithub } from "react-icons/bs";

function WorkLinks() {
  return (
    <div className="flex justify-center gap-16 pb-4 ">
      <a
        href="https://www.linkedin.com/in/joshuacaguirre/"
        target="_blank"
        className="flex"
      >
        <p className="mr-2 h-fit mt-1 font-bold text-lg">LinkedIn</p>
        <BsLinkedin size="2rem" />
      </a>
      <a href="https://github.com/JoGuirre" target="_blank" className="flex">
        <p className="mr-2 h-fit mt-1 font-bold text-lg">GitHub</p>
        <BsGithub size="2rem" />
      </a>
    </div>
  );
}

export default WorkLinks;
