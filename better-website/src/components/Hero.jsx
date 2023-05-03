import React, { useState, useEffect } from "react";
import MyLogo from "./MyLogo";
import WorkLinks from "./WorkLinks";
import TechStack from "./TechStack";

import { techStackFileArr } from "../utilities/techStackFile.js";

import codePic from "../assets/code-pic.jpg";
import codePic1 from "../assets/code-pic-1.jpg";
import codePic2 from "../assets/code-pic-2.jpg";

function Hero() {
  const carouselArray = [codePic, codePic1, codePic2];
  const thingsIAmArray = [
    "Navy Veteran",
    "Guitar Player",
    "Gamer",
    "Cool Guy",
    "Obscure Music Enthusiast",
    "Plant Dad",
    "Dog Lover",
    "Stardew Farmer",
  ];

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
        className="h-[9em] flex-col pt-2 text-left pl-6 relative bg-gradient-to-r from-[#96eaff] to-[#a3ffdd] text-black rounded-xl mx-6 mt-4"
      >
        <h1 className="text-3xl font-bold pb-1 mb-3">
          Hi, I'm{" "}
          <span className="bg-gradient-to-tl from-orange-300 to-red-500 bg-clip-text text-transparent text-4xl font-extrabold">
            Josh
          </span>
        </h1>
        <h2 className="text-xl font-semibold pl-4">Web Developer</h2>
        <h3 className="text-sm font-medium pl-4">Front-End | Back-End</h3>
        <h3
          className={`text-sm font-bold ml-7 w-fit text-black text-opacity-40`}
        >
          {currentWord}
        </h3>
      </div>
      <div className="flex flex-row flex-wrap gap-4 justify-center w-[95%] mt-8 h-12 text-xs font-semibold text-gray-800 ml-[2.5%] self-center">
        {techStackFileArr.map((tech) => {
          return (
            <TechStack
              CompName={tech.componentName}
              color={tech.color}
              id={tech.id}
              name={tech.name}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Hero;
