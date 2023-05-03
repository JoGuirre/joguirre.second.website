import React from "react";
import PropTypes from "prop-types";

function TechStack({ CompName, name, id, color }) {
  return (
    <div
      key={id}
      className="rounded-xl bg-white bg-opacity-50 p-2 flex flex-col items-center "
    >
      <CompName color={color} size="2.2em" />
      <h1>{name}</h1>
    </div>
  );
}

TechStack.propTypes = {
  CompName: PropTypes.element,
};

export default TechStack;
