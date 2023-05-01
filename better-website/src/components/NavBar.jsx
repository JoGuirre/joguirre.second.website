import React from "react";

function NavBar() {
  return (
    <nav
      id="navbar-container"
      className="sticky top-0 border-b rounded-b-sm shadow-md shadow-gray-600 bg-transparent backdrop-blur-md"
    >
      <ul className="flex justify-around text-xl font-semibold pt-2 mb-1">
        <li className="px-1 border-hidden rounded-sm hover:bg-gray-200 hover:text-black">
          <a href="#hero-container">Home</a>
        </li>
        <li className="px-1 border-hidden rounded-sm hover:bg-gray-200 hover:text-black">
          <a href="#about-container">About</a>
        </li>
        <li className="px-1 border-hidden rounded-sm hover:bg-gray-200 hover:text-black">
          <a href="#projects-container">Projects</a>
        </li>
        <li className="px-1 border-hidden rounded-sm hover:bg-gray-200 hover:text-black">
          <a href="#contact-container">Contact</a>
        </li>
      </ul>

      <div className="hidden w-full h-0 flex justify-center absolute top-6">
        <div className="border-b bg-blue-900 rounded-full w-8 h-8">&nbsp;</div>
      </div>
    </nav>
  );
}

export default NavBar;
