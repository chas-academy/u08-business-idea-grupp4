/* import { useState } from "react";
import axios from "axios";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom"; */
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="flex items-end my-10 ">
      <div className="flex flex-col">
        <button>
          <span className="block w-8 h-0.5 bg-gray-600 animate- m-1"></span>
          <span className="block w-6 h-0.5 bg-gray-600 m-1"></span>
          <span className="block w-4 h-0.5 bg-gray-600 m-1"></span>
        </button>
        <Link to={"/"} className="text-2xl mr-5">
          Home
        </Link>
        <Link to={"/register"} className="text-2xl mr-5">
          Register
        </Link>
        <Link to={"/forgot-password"} className="text-2xl mr-5">
          Reset password
        </Link>
      </div>
    </nav>
  );
};

export default Nav;
