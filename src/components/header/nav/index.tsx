import React from "react";
import { FC } from "react";
import { tags } from "./nav-data";

interface NavProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const Nav: FC<NavProps> = ({ isOpen, setIsOpen }) => {
  return (
    <nav
      className={
        isOpen
          ? "active navbar absolute top-[99%] left-0 right-0 bg-white border-t-border-width-app border-t-border-color-app tablet:border-none flex flex-col tablet:flex-row  tablet:static"
          : "navbar absolute top-[99%] left-0 right-0 bg-white border-t-border-width-app border-t-border-color-app tablet:border-none flex flex-col tablet:flex-row tablet:static"
      }
    >
      {tags.map((tag, index) => (
        <a
          className="tablet:my-0 tablet:mx-4 tablet:text-black-app m-8 block text-[2rem] tablet:text-[1.7rem] hover:text-yellow-app cursor-pointer"
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
