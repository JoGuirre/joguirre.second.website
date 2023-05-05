import React from "react";

function NavBar() {
  return (
    <div className="fixed flex justify-center bottom-0 w-full p-4 z-50 bg-bgcolor bg-opacity-20 rounded-md backdrop-blur-lg">
      <nav
        id="navbar-container"
        className="mb-0 px border rounded-xl shadow-sm shadow-textcolor bg-accentcolor border-2 border-bordercolor bg-opacity-60 backdrop-blur-md z-50"
      >
        <ul className="flex justify-center gap-10 text-xl font-semibold pt-1 pb-1">
          <NavItems link="#hero-container" title="Home" />
          <NavItems link="#about-container" title="About" />
          <NavItems link="#contact-container" title="Contact" />
        </ul>
      </nav>
    </div>
  );
}

function NavItems({ link, title }) {
  return (
    <li className="px-2 py-1 border-hidden rounded-md font-bold">
      <a href={link}>{title}</a>
    </li>
  );
}

export default NavBar;
