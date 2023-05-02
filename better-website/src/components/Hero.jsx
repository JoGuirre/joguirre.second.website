import React, { useState, useEffect } from "react";
import MyLogo from "./MyLogo";
import WorkLinks from "./WorkLinks";

import codePic from "../assets/code-pic.jpg";
import codePic1 from "../assets/code-pic-1.jpg";
import codePic2 from "../assets/code-pic-2.jpg";

import { IoLogoCss3, IoLogoJavascript, IoLogoHtml5 } from "react-icons/io";
import { GrReactjs } from "react-icons/gr";
import { SiVite, SiTailwindcss } from "react-icons/si";

function Hero() {
  const carouselArray = [codePic, codePic1, codePic2];
  const thingsIAmArray = [
    "Navy Veteran",
    "Guitar Player",
    "Gamer",
    "Cool Guy",
    "Obscure Music Listener",
    "Plant Dad",
    "Dog Lover",
  ];
  const [highlightedText, setHighlightedText] = useState("");

  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [currentWord, setCurrentWord] = useState("");
  const [currentWordsIndex, setCurrentWordsIndex] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      const nextIndexPics = (currentSlideIndex + 1) % carouselArray.length;
      setCurrentSlideIndex(nextIndexPics);
    }, 10000);
  }, [currentSlideIndex]);

  useEffect(() => {
    const nextIndexWords = (currentWordsIndex + 1) % thingsIAmArray.length;
    setTimeout(() => {
      setCurrentWordsIndex(nextIndexWords);
    }, 5000);
    const splitWordArray = thingsIAmArray[nextIndexWords].split("");
    let newWord = "";
    splitWordArray.map((letter, index) => {
      setTimeout(() => {
        newWord = newWord + letter;
        setCurrentWord(newWord);
      }, 150 * index);
    });
  }, [currentWordsIndex]);

  return (
    <div id="hero-container" className="h-2/3 mb-[-55px] pb-16 mt-[-50px]">
      <div id="hero-object" className="mx-4 pt-16">
        <div className="m-2 h-60 rounded-xl bg-white flex justify-center items-center relative">
          <img
            src={carouselArray[currentSlideIndex]}
            alt="picture of coding screen"
            className="rounded-xl w-[99%] h-[99%]"
          />
          <div className="absolute rounded-xl left-0 top-0 w-full h-full rounded-xl px-4 py-3 backdrop-blur-sm bg-blue-300 bg-opacity-20">
            <MyLogo />
          </div>
        </div>
      </div>
      <WorkLinks />
      <div
        id="hero-words"
        className="h-2/5 flex-col pt-4 text-left pl-6 relative"
      >
        <h1 className="text-4xl font-bold pb-3">
          Hi, I'm{" "}
          <span className="bg-gradient-to-tr from-cyan-300 to-indigo-700 bg-clip-text text-transparent">
            Josh
          </span>
        </h1>
        <h2 className="text-xl font-semibold pl-4">Web Developer</h2>
        <h3 className="text-sm font-medium pl-4">Front-End | Back-End</h3>
        <h3
          className={`text-sm font-bold ml-7 w-fit text-white text-opacity-30`}
        >
          {currentWord}
        </h3>
        <div
          id="tech-stack"
          className="flex w-[95%] absolute right-3 bottom-1 justify-around h-12 text-xs font-semibold text-gray-800"
        >
          {/* <h4 className="w-fit text-md font-bold text-blue-300 mt-[2px]">
            Tools:
          </h4> */}
          <div className="flex-col rounded-lg bg-white bg-opacity-30 px-2 py-2">
            <IoLogoHtml5 size="1.5em" color="#ff6f00" className="w-full" />
            <h4>HTML</h4>
          </div>
          <div className="flex-col rounded-lg bg-white bg-opacity-30 px-2 py-2">
            <IoLogoCss3 size="1.5em" color="#00bbff" className="w-full" />
            <h4>CSS</h4>
          </div>
          <div className="flex-col rounded-lg bg-white bg-opacity-30 px-2 py-2">
            <SiTailwindcss size="1.5em" color="#00bbff" className="w-full" />
            <h4>TailwindCSS</h4>
          </div>
          <div className="flex-col rounded-lg bg-white bg-opacity-30 px-2 py-2">
            <IoLogoJavascript size="1.5em" color="#ffe600" className="w-full" />
            <h4 className="">JavaScript</h4>
          </div>
          <div className="flex-col rounded-lg bg-white bg-opacity-30 px-2 py-2">
            <GrReactjs size="1.5em" color="#00e5ff" className="w-full" />
            <h4>ReactJS</h4>
          </div>
          <div className="flex-col rounded-lg bg-white bg-opacity-30 px-2 py-2">
            <SiVite size="1.5em" color="#e600ff" className="w-full" />
            <h4>Vite</h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
