import React from "react";
import BGImg from "../../assets/Login&Register_3.png";
import Logo from "../../assets/Cat_Cream_Logo-2.png";
import GoogleButton from "react-google-button";
import { Link } from "react-router";

function Login() {
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
      <div className=" w-screen min-h-screen " style={BGImage}>
        <div className=" w-6/8 p-4 flex justify-between  items-center ">
          <div className=" max-w-[400px] max-h-[500px] flex justify-center items-center flex-col gap-4">
            {/* <img src={Logo} alt="" className=" w-80" />
            <h3 className=" text-2xl text-center">
              More Than Just a Café – A Home for Cat Lovers!
            </h3> */}
          </div>
          <div className=" flex flex-col justify-center items-center ">
            <div className=" w-full h-fit rounded-2xl shadow-lg p-4 mb-2 underline underline-offset-3 decoration-primary">
              <nav className=" sm:block">
                <ul className=" flex items-center justify-between gap-4 ">
                  <li className="hover:scale-105 transition-transform duration-200 hover:text-primary text">
                    <Link to="/">Home</Link>
                  </li>
                  <li className="hover:scale-105 transition-transform duration-200 hover:text-primary">
                    <Link to="/about">About</Link>
                  </li>
                  <li className="hover:scale-105 transition-transform duration-200 hover:text-primary">
                    <Link to="/contact">Contact</Link>
                  </li>
                </ul>
              </nav>
            </div>
            <div className=" w-120 h-fit  bg-gray-100/25 rounded-2xl shadow-lg p-4 ">
              <h1 className=" text-2xl font-bold text-center mb-4">Sign In</h1>
              <form action="" method="post">
                <div className=" w-full flex justify-center items-center mt-2">
                  <label htmlFor="email" className=" w-1/3">
                    {" "}
                    Email :
                  </label>
                  <input
                    type="text"
                    name="email"
                    id="email"
                    placeholder="Enter your email"
                    className=" w-full p-2 border-2 border-gray-200 rounded-lg"
                  />
                </div>
                <div className=" w-full flex justify-center items-center mt-2">
                  <label htmlFor="password" className=" w-1/3">
                    {" "}
                    Password :
                  </label>
                  <input
                    type="text"
                    name="password"
                    id="name"
                    placeholder="Enter your password"
                    className=" w-full p-2 border-2 border-gray-200 rounded-lg"
                  />
                </div>

                <button
                  type="submit"
                  className=" bg-primary mt-2 text-white p-2 rounded-lg w-full hover:scale-105"
                >
                  Sign In
                </button>

                <div className=" w-full mt-2 flex flex-col justify-center items-center">
                  <p>I don't have an account!</p>
                  <button
                    type="submit"
                    className=" bg-primary mt-2 text-white p-2 rounded-lg w-full hover:scale-105 mb-4"
                  >
                    Sign Up
                  </button>
                </div>
                <div className="flex items-center">
                  <hr className="flex-grow border-gray-400" />
                  <span className="px-2">or</span>
                  <hr className="flex-grow border-gray-400" />
                </div>

                <div className=" w-full mt-2 flex justify-center items-center">
                  <GoogleButton
                    onClick={() => {
                      console.log("Google button clicked");
                    }}
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* </div> */}
    </>
  );
}

export default Login;
