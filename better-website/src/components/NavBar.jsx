import React from "react";

function NavBar() {
  return (
    <nav
      id="navbar-container"
      className="sticky mx-12 top-2 mt-2 border rounded-xl shadow-sm shadow-textcolor bg-textcolor bg-opacity-10 backdrop-blur-md z-50"
    >
      <ul className="flex justify-center gap-10 text-xl font-semibold pt-1 pb-1">
        <NavItems link="#hero-container" title="Home" />
        <NavItems link="#about-container" title="About" />
        <NavItems link="#contact-container" title="Contact" />
      </ul>
    </nav>
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
