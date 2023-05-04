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
    <div id="hero-container" className="mb-[-55px] mt-[-20%] pb-16">
      <div id="hero-object" className="mx-4 mt-8 mb-4">
        <div className="m-2 h-60 rounded-xl bg-white flex justify-center items-center relative">
          <img
            src={carouselArray[currentSlideIndex]}
            alt="background picture for logo"
            className="rounded-xl w-[99%] h-[99%]"
          />
          <div className="absolute rounded-xl left-0 top-0 w-full h-full rounded-xl px-4 py-3 backdrop-blur-sm bg-fifthcolor bg-opacity-10">
            <MyLogo />
          </div>
        </div>
      </div>
      <WorkLinks />
      <div
        id="hero-words"
        className="px-4 py-4 mx-6 mt-6 flex flex-col text-left relative bg-gradient-to-r from-textcolor to-textcolor text-bgcolor rounded-xl border-2 border-bordercolor before:border before:border-transparent before:absolute before:w-[95%] before:rounded-lg before:bottom-[-15px] before:bg-accentcolor before:self-center before:h-8 before:z-[-9]"
      >
        {/* <div className="border border-transparent absolute w-11/12 rounded-lg mt-32 bg-accentcolor self-center">
          &nbsp;
        </div> */}
        <h1 className="text-3xl font-bold pb-1 mb-3">
          Hi, I'm{" "}
          <span className="bg-gradient-to-tl from-bordercolor to-accentcolor bg-clip-text text-transparent text-4xl font-extrabold">
            Josh
          </span>
        </h1>
        <h2 className="text-xl font-semibold pl-4">Web Developer</h2>
        <h3 className="text-sm font-medium pl-4">Front-End | Back-End</h3>
        <h3
          className={`text-sm font-bold ml-7 w-fit text-bordercolor text-opacity-80`}
        >
          {currentWord}
        </h3>
      </div>
      <div className="flex flex-row relative flex-wrap mt-12 mb-8 mx-6 px-2 py-4 gap-4 justify-center text-xs font-semibold bg-textcolor rounded-xl border-2 border-bordercolor before:border before:border-transparent before:absolute before:w-[95%] before:rounded-lg before:bottom-[-15px] before:bg-accentcolor before:self-center before:h-8 before:z-[-9]">
        {techStackFileArr.map((tech) => {
          return (
            <TechStack
              CompName={tech.componentName}
              color={tech.color}
              name={tech.name}
              id={tech.id}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Hero;
