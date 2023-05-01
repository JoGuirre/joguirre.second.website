import React from "react";
import codePic from "../assets/code-pic.jpg";

function Hero() {
  return (
    <div id="hero-container" className="h-1/2">
      <div
        id="hero-words"
        className="h-2/5 flex-col text-left pt-6 pl-6 bg-gradient-to-tr from-gray-600 to-gray-900"
      >
        <h1 className="text-4xl font-bold pb-3">
          Hi, I'm{" "}
          <span className="bg-gradient-to-tr from-cyan-300 to-indigo-700 bg-clip-text text-transparent">
            Josh
          </span>
        </h1>
        <h2 className="text-xl font-semibold pl-4">Web Developer</h2>
        <h3 className="text-sm font-medium pl-4">Front-End | Back-End</h3>
      </div>
      <div id="hero-object" className="h-2/3 mx-4 mt-6 ">
        <div className="m-2 h-60 rounded-xl bg-white flex justify-center items-center ">
          <img
            src={codePic}
            alt="picture of coding screen"
            className="rounded-xl w-[99%] h-[99%]"
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
