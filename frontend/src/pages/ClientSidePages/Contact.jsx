import React from "react";
import contactGB from "../../assets/Cat_Cream_Contact.png";
import BGImg from "../../assets/BG.png";
import { FaFacebook, FaLocationDot } from "react-icons/fa6";
import { FaInstagramSquare, FaMobileAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
function Contact() {
  const BGImage = {
    backgroundImage: `url(${BGImg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    height: "100%",
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };
  return (
    <>
      <div
        className="min-h-[550px] bg-gray-100 flex justify-center items-center dark:bg-gray-800 dark:text-white duration-200"
        style={BGImage}
      >
        <div className=" grid grid-cols-2 gap-4">
          <div className=" flex flex-col justify-center items-start space-y-4 text-black  lg:max-w-[850px] lg:ml-20 dark:text-white">
            <h1 className=" text-4xl ">GET IN TOUCH WITH US</h1>
            <p className=" text-lg">
              We are here to help you. Please feel free to get in touch with us
              for any queries or feedback.
            </p>
            <div className=" space-y-4 grid grid-cols-2 gap-4">
              <div className=" flex flex-col gap-4">
                <p className=" flex items-center gap-4">
                  <FaLocationDot className=" w-6 h-6 p-1 rounded-full bg-white dark:bg-black" />
                  D-27 Ya Da Na, Mingalar Oo Qr., Taunggyi.
                </p>
                <p className=" flex items-center gap-2">
                  <FaMobileAlt className=" w-6 h-6 p-1 rounded-full bg-white dark:bg-black" />
                  +95 912 345 678
                </p>
              </div>
              <div className=" flex flex-col gap-4 space-y-4">
                <p className=" flex items-center gap-2">
                  <MdEmail className=" w-6 h-6 p-1 rounded-full bg-white dark:bg-black" />
                  catcream.admin@gmail.com
                </p>
                <p className=" flex items-center gap-2">
                  <FaFacebook className=" w-6 h-6 p-1 rounded-full bg-white dark:bg-black" />
                  Cat Cream
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className=" w-7/8 h-100 bg-gray-100 dark:bg-gray-800 dark:text-white rounded-2xl shadow p-4">
              <form action="" method="post">
                <div className=" w-full p-4 flex justify-center items-center">
                  <label htmlFor="name" className=" w-1/3">
                    {" "}
                    Name :
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Enter your name"
                    className=" w-full p-2 border-2 border-gray-200 rounded-lg"
                  />
                </div>
                <div className=" w-full p-4 flex justify-center items-center ">
                  <label htmlFor="phone" className=" w-1/3">
                    {" "}
                    Phone :
                  </label>
                  <input
                    type="text"
                    name="phone"
                    id="name"
                    placeholder="Enter your phone number"
                    className=" w-full p-2 border-2 border-gray-200 rounded-lg"
                  />
                </div>
                <div className=" w-full p-4 flex justify-center items-center">
                  <textarea
                    name="message"
                    id=""
                    className=" w-full h-35 p-2 border-2 border-gray-200 rounded-lg"
                    placeholder=" Enter your message"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className=" bg-primary text-white p-2 rounded-lg w-full hover:scale-105"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
