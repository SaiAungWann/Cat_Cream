import React, { useState } from "react";
import BGImg from "../../assets/BG.png";
import IceCream4 from "../../assets/4.png";
import IceCream5 from "../../assets/5.png";
import IceCream6 from "../../assets/6.png";
import { FaCartShopping } from "react-icons/fa6";
import { FaCartPlus } from "react-icons/fa";
import { LuAlarmClockCheck } from "react-icons/lu";
function HeroSection() {
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

  const [imageId, setImageId] = useState(IceCream4);

  const ImageList = [
    {
      id: 1,
      img: IceCream4,
    },
    {
      id: 2,
      img: IceCream5,
    },
    {
      id: 3,
      img: IceCream6,
    },
  ];
  return (
    <>
      <div
        className="min-h-[550px] sm:min-h-[600px] bg-gray-100 flex justify-center items-center dark:bg-gray-950 dark:text-white duration-200"
        style={BGImage}
      >
        <div className=" p-4 w-full">
          <div className=" grid grid-cols-2 gap-4">
            <div className=" flex flex-col justify-center items-start space-y-4">
              <h1 className="text-3xl font-bold sm:text-4xl">Welcome to</h1>
              <h1 className=" text-4xl font-bold sm:text-5xl text-primary">
                Cat Cream
              </h1>
              <p className="text-lg sm:text-xl lg:text-2xl">
                Sip, relax, and surround yourself with the cutest furry friends
                at <span className="text-primary font-bold">Cat Cream</span>
                —where every Ice Cream and Coffee comes with cuddles!
              </p>
              <div className=" flex justify-center items-center mx-auto gap-4">
                <button className=" flex items-center justify-between gap-2 bg-primary text-white rounded-xl py-1 px-2 hover:scale-105 transition-transform duration-200">
                  <span>Order</span>
                  <FaCartShopping />
                </button>
                <button className=" flex items-center justify-between gap-2 bg-primary text-white rounded-xl py-1 px-2 hover:scale-105 transition-transform duration-200">
                  <span>Book Table</span>
                  <LuAlarmClockCheck />
                </button>
              </div>
            </div>
            <div className="min-h-[450px] sm:min-h-[450px] flex justify-around items-center relative order-1 sm:order-2">
              <div className="h-[300px] sm:h-[450px] w-[300px] sm:w-[450px]  overflow-hidden flex justify-center items-center">
                <img
                  src={imageId}
                  alt=""
                  className="w-[250px] sm:w-[350px] sm:scale-125 spin"
                />
              </div>
              <div className="flex lg:flex-col lg:top-1/2 lg:-translate-y-1/2 lg:py-2 justify-center gap-4 absolute bottom-[0px] lg:-right-0 bg-white/30 rounded-full m-4 lg:h-fit">
                {ImageList.map((item) => (
                  <img
                    src={item.img}
                    alt=""
                    className="max-w-[80px] h-[80px] object-contain inline-block hover:scale-105 duration-200"
                    onClick={() =>
                      setImageId(
                        item.id === 1
                          ? IceCream4
                          : item.id === 2
                          ? IceCream5
                          : IceCream6
                      )
                    }
                    key={item.id}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroSection;
