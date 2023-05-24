import { useState } from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkHover = (index, isHovered) => {
    const spanElements = document.getElementsByClassName("nav-span");
    if (isHovered) {
      spanElements[index].classList.add(
        "w-5",
        "transition-all",
        "duration-300"
      );
    } else {
      spanElements[index].classList.remove("w-5");
    }
  };

  return (
    <nav className="flex items-end mt-10 mr-10 justify-end">
      <div className="flex flex-col">
        <div className="flex justify-end">
          <button onClick={toggleMenu} className="focus:outline-none">
            <span
              className={`block w-8 h-0.5 bg-black m-1 transition-transform ${
                isOpen ? "transform rotate-45 translate-y-1" : ""
              }`}
            ></span>
            <span
              className={`block w-8 h-0.5 bg-black m-1 transition-opacity ${
                isOpen ? "opacity-0" : ""
              }`}
            ></span>
            <span
              className={`block w-8 h-0.5 bg-black m-1 transition-transform ${
                isOpen ? "transform -rotate-45 -translate-y-1" : ""
              }`}
            ></span>
          </button>
        </div>
        <div
          className={`flex flex-col transform transition-transform ${
            isOpen ? "translate-y-2 opacity-100" : "translate-y-0 opacity-0"
          }`}
        >
          <Link
            to={"/"}
            className="text-2xl ml-auto transition-transform flex flex-row items-center hover:text-gray-500"
            onMouseEnter={() => handleLinkHover(0, true)}
            onMouseLeave={() => handleLinkHover(0, false)}
          >
            Home
            <span className="block w-0 h-0.5 bg-black m-1 nav-span transition-width"></span>
          </Link>
          <Link
            to={"/register"}
            className="text-2xl ml-auto  transition-transform flex flex-row items-center hover:text-gray-500"
            onMouseEnter={() => handleLinkHover(1, true)}
            onMouseLeave={() => handleLinkHover(1, false)}
          >
            Register
            <span className="block w-0 h-0.5 bg-black m-1 nav-span transition-width"></span>
          </Link>
          <Link
            to={"/forgot-password"}
            className="text-2xl ml-auto transition-transform flex flex-row items-center hover:text-gray-500"
            onMouseEnter={() => handleLinkHover(2, true)}
            onMouseLeave={() => handleLinkHover(2, false)}
          >
            Reset password
            <span className="block w-0 h-0.5 bg-black m-1 nav-span transition-width"></span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
