import React, { useState } from "react";
import aboutMe from "../utilities/aboutMe.json";

function About() {
  return (
    <div id="about-container" className="">
      <h1 className="text-left pl-6 text-3xl font-bold mt-6">About Me</h1>
      <Paragraph aboutMe={aboutMe} />
    </div>
  );
}

function Paragraph({ aboutMe }) {
  const [currentPanelId, setCurrentPanelId] = useState(null);

  // Did this for no reason, but its cool to remember

  // const { titles, contents } = aboutMe.reduce(
  //   (acc, current) => {
  //     return {
  //       titles: [...acc.titles, current.title],
  //       contents: [...acc.contents, current.content],
  //     };
  //   },
  //   { titles: [], contents: [] }
  // );

  const clickHandler = (panelId) => {
    return () => setCurrentPanelId(panelId);
  };

  return (
    <div
      id="about-paragraph-container"
      className="px-6 drop-shadow-2xl shadow-white"
    >
      {aboutMe.map((section) => {
        return (
          <div
            id="paragraph-container"
            key={section.id}
            className="bg-white rounded-xl"
          >
            <div
              id="paragraph-title-container"
              className="relative pl-4 py-1 m-[-5px] bg-white border border-black rounded-lg mb-1 mt-5 after:border after:border-black after:content-[''] after:absolute after:left-[2px] after:right-[2px] after:top-[2px] after:bottom-[2px] after:rounded-md after:bg-transparent"
            >
              <button
                onClick={clickHandler(section.id)}
                className="w-full text-left"
              >
                <h3
                  id="paragraph-title"
                  className="relative py-1 text-xl font-bold text-black z-50"
                >
                  {section.title}
                </h3>
              </button>
            </div>
            {section.id == currentPanelId ? (
              <div id="paragrpah-content-container" className="relative">
                <p
                  id="paragraph-content"
                  className="pl-4 pr-2 pt-2 pb-4 text-black font-medium after:border after:border-black after:content-[''] after:absolute after:left-[4px] after:right-[4px] after:top-[20%] after:bottom-[4px] after:rounded-lg after:bg-transparent after:border-t-0 after:rounded-t-none"
                >
                  {section.content}
                </p>
              </div>
            ) : null}
          </div>
        );
      })}
    </div>
  );
}

export default About;
