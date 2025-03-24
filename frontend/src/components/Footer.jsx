import React from "react";
import Logo from "../assets/Cat_Cream_Logo-2.png";
import { FaLocationDot } from "react-icons/fa6";
import { FaMobileAlt, FaFacebook, FaInstagramSquare } from "react-icons/fa";
import { TfiEmail } from "react-icons/tfi";
import { FaCopyright } from "react-icons/fa6";

function Footer() {
  return (
    <>
      <div className=" grid grid-cols-2 gap-4 mt-4 p-4 bg-gray-200 dark:bg-gray-800 dark:text-white duration-200 max-w-[2400] mx-auto">
        <div className=" w-full p-4 space-y-2">
          <img src={Logo} alt="" className=" w-40" />
          <p>
            Bringing joy, one cup of coffee, ice cream and one purr at a time.
            Come visit us soon!
          </p>
          <p className=" flex items-center gap-4">
            <FaLocationDot />
            D-27 Ya Da Na, Mingalar Oo Qr., Taunggyi.
          </p>
          <p className=" flex items-center gap-2">
            <FaMobileAlt />
            +959 123 456 78
          </p>
          <p className=" flex items-center gap-6">
            <FaFacebook />
            <FaInstagramSquare />
            <TfiEmail />
          </p>
        </div>
        <div className=" hidden sm:grid sm:grid-cols-2 gap-4">
          <div className=" space-y-4">
            <h1 className=" text-2xl font-bold">Quick Links</h1>
            <ul className=" space-y-2 link">
              <li>Home</li>
              <li>About Us</li>
              <li>Menu</li>
              <li>Meet Our Cats</li>
            </ul>
          </div>
          <div className=" space-y-4">
            <h1 className=" text-2xl font-bold">Quick Links</h1>
            <ul className=" space-y-2 link">
              <li>Testimonials</li>
              <li>Career</li>
              <li>FAQ</li>
              <li>Contact Us</li>
            </ul>
          </div>
        </div>
      </div>
      <hr />
      <div className=" p-4 bg-gray-200 dark:bg-gray-800 dark:text-white duration-200">
        <p className=" mx-auto text-center flex justify-center items-center">
          <FaCopyright />{" "}
          <span className=" text-lg text-primary font-bold">Cat Cream</span> -{" "}
          <span className=" font-bold font-sans">2025</span>. Designed with love
          for cat lovers everywhere.
        </p>
      </div>
    </>
  );
}

export default Footer;
