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
    <div id="about-paragraph-container" className="px-6 ">
      {aboutMe.map((section) => {
        return (
          <div
            id="paragraph-container"
            key={section.id}
            className="bg-blue-100 rounded-xl pb-2 shadow-inner shadow-lg shadow-blue-900"
          >
            <div
              id="paragraph-title-container"
              className="pl-4 py-1 bg-blue-800 rounded-lg mb-1 mt-5 shadow-inner shadow-lg shadow-blue-600"
            >
              <button
                onClick={clickHandler(section.id)}
                className="w-full text-left"
              >
                <h3 id="paragraph-title" className="text-xl font-bold">
                  {section.title}
                </h3>
              </button>
            </div>
            {section.id == currentPanelId ? (
              <div id="paragrpah-content-container">
                <p
                  id="paragraph-content"
                  className="pl-4 pr-2 pt-2 text-black font-medium"
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
