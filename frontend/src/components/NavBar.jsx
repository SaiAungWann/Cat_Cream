import React from "react";
import { Link } from "react-router";
import Logo from "../assets/Cat_Cream_Logo.png";
import { FaCartShopping } from "react-icons/fa6";
import DarkMode from "./DarkMode";
import { FaCartPlus } from "react-icons/fa";

const NavBar = () => {
  return (
    <>
      <div className="flex justify-between items-center p-5 bg-white dark:bg-gray-900 dark:text-white shadow-md h-20 rounded-t-md">
        <div className=" md:w-35 w-20 items-center">
          <Link to="/">
            <img src={Logo} alt="logo" />
          </Link>
        </div>
        <div className="flex justify-between items-center gap-4">
          <DarkMode />
          <nav>
            <ul className=" flex items-center justify-between gap-4">
              <li>
                <Link to="#home">Home</Link>
              </li>
              <li>
                <Link to="#about">About</Link>
              </li>
              <li>
                <Link to="#contact">Contact</Link>
              </li>
            </ul>
          </nav>
          <button className=" hidden flex items-center justify-between gap-2 bg-primary text-white rounded-xl py-1 px-2">
            <span>My Cart</span>
            <FaCartShopping />
          </button>
          <button className=" flex items-center justify-between gap-2 bg-primary text-white rounded-xl py-1 px-2">
            <span>Order</span>
            <FaCartPlus />
          </button>
        </div>
      </div>
    </>
  );
};

export default NavBar;
