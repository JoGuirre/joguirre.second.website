import React from "react";
import aboutMe from "../utilities/aboutMe.json";

function About() {
  return (
    <div id="about-container" className="">
      <h1 className="text-center text-3xl font-bold mt-6">About Me</h1>
      <Paragraph aboutMe={aboutMe} />
    </div>
  );
}

function Paragraph({ aboutMe }) {
  const titles = aboutMe.reduce((acc, current) => {
    return [...acc, current.title];
  }, []);

  const contents = aboutMe.reduce((acc, current) => {
    return [...acc, current.content];
  }, []);

  return (
    <div id="about-paragraph-container" className="px-6 mt-3">
      {aboutMe.map((section) => {
        return (
          <div
            id="paragraph-container"
            key={section.key}
            className="bg-blue-100 rounded-xl pb-2 shadow-inner shadow-lg shadow-blue-900"
          >
            <div
              id="paragraph-title-container"
              className="pl-4 py-1 bg-blue-800 rounded-lg mb-1 mt-5 shadow-inner shadow-lg shadow-blue-600"
            >
              <h3 id="paragraph-title" className="text-xl font-bold">
                {section.title}
              </h3>
            </div>
            <div id="paragrpah-content-container">
              <p
                id="paragraph-content"
                className="pl-4 pr-2 text-black font-medium"
              >
                {section.content}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default About;
