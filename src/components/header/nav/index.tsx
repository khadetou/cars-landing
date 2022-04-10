import React from "react";
import { tags } from "./nav-data";
const Nav = () => {
  return (
    <nav className="navbar absolute top-[99%] left-0 right-0 bg-white border-t-border-width-app border-t-border-color-app tablet:static">
      {tags.map((tag, index) => (
        <a
          className="tablet:my-0 tablet:mx-4 tablet:text-black-app m-8 block text-[2rem] hover:text-yellow-app"
          key={index}
          href={`#${tag}`}
        >
          {tag}
        </a>
      ))}
    </nav>
  );
};

export default Nav;
