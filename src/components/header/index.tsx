import { useState } from "react";
import { FaBars, FaUser, FaTimes } from "react-icons/fa";
import Nav from "./nav";
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="header text-[55%] flex items-center justify-between fixed top-0 left-0 right-0 p-8 laptop:py-12 laptop:px-[9%] z-[1000] bg-white laptop:text-inherit ">
      <div
        id="menu-btn"
        className="block relative  text-[2.5rem] text-light-app tablet:hidden"
      >
        <FaBars
          className={isOpen ? " rotate-180 opacity-0" : "rotate-0 "}
          onClick={() => setIsOpen(true)}
        />

        <FaTimes
          className={
            isOpen
              ? "rotate-180 absolute top-0"
              : " rotate-0 opacity-0 -z-50 absolute top-0"
          }
          onClick={() => {
            setIsOpen(false);
          }}
        />
      </div>
      <a href="#" className="logo text-[2.5rem] text-black-app font-bold">
        <span className="text-yellow-app">max</span> wheels
      </a>
      <Nav isOpen={isOpen} setIsOpen={setIsOpen} />
      <div id="login-btn">
        <button className="btn  hidden hover:bg-yellow-app tablet:m-0 tablet:inline-block tablet:mt-4 py-[0.8rem] px-12 bg-yellow-app-light text-black-app pointer text-[1.7rem] rounded-lg font-medium text-center">
          login
        </button>
        <FaUser className="block tablet:hidden text-[2.5rem] text-light-app" />
      </div>
    </header>
  );
};

export default Header;
