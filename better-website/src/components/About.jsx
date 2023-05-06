import React, { useState } from "react";
import aboutMe from "../utilities/aboutMe.json";

function About() {
  return (
    <div id="about-container" className="flex flex-col">
      {/* <h1 className="text-left pl-6 text-3xl font-bold mb-4">About Me</h1> */}
      <Paragraph aboutMe={aboutMe} />
    </div>
  );
}

function Paragraph({ aboutMe }) {
  const [currentPanelId, setCurrentPanelId] = useState(null);

  const clickHandler = (panelId) => {
    return () => setCurrentPanelId(panelId);
  };

  return (
    <div id="#about-container" className="md:flex md:flex-col ">
      {aboutMe.map((section) => {
        return (
          <div className="relative flex flex-col md:even:items-end md:odd:items-start md:my-6">
            <div className="flex flex-col md:w-1/2">
              <div
                key={section.id}
                className="mx-6 flex flex-col mt-6 text-left relative
              bg-gradient-to-r from-textcolor to-textcolor text-bgcolor
              rounded-t-xl rounded-b-md border-2 border-bordercolor group hover:border-accentcolor transition duration-300"
              >
                <button
                  onClick={clickHandler(section.id)}
                  className="p-2 ml-4 text-left text-xl font-bold group-hover:text-accentcolor transition duration-300"
                >
                  {section.title}
                </button>
              </div>
              <div>
                {section.id == currentPanelId ? (
                  <p className="bg-textcolor relative flex flex-col justify-center text-bgcolor mt-2 font-medium mx-6 p-4 rounded-b-xl rounded-t-md border border-2 border-bordercolor">
                    {section.content}
                  </p>
                ) : null}
              </div>
              <div className="self-center absolute border border-transparent w-[85%] rounded-lg bottom-[-8px] bg-accentcolor h-8 z-[-9] md:w-[30%] group-hover:bg-bordercolor">
                &nbsp;
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default About;
