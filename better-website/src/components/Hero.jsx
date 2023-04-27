import React from "react";

function Hero() {
  return (
    <div id="hero-container" className="h-1/2">
      <div
        id="hero-words"
        className="h-2/5 flex-col text-left pt-6 pl-6 bg-gradient-to-tr from-gray-600 to-gray-900"
      >
        <h1 className="text-4xl font-black pb-3">
          Hi, I'm{" "}
          <span className="bg-gradient-to-tr from-cyan-300 to-indigo-700 bg-clip-text text-transparent">
            Josh
          </span>
        </h1>
        <h2 className="text-xl font-bold pl-4">Web Developer</h2>
        <h3 className="text-sm font-medium pl-4">Front-End | Back-End</h3>
      </div>
      <div id="hero-object" className="h-2/3">
        <div className="m-2 h-60 rounded-xl bg-gray-500">&nbsp;</div>
      </div>
    </div>
  );
}

export default Hero;
