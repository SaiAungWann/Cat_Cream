import React from "react";
import PlayStoreImg from "../../assets/play_store.png";
import AppStoreImg from "../../assets/app_store.png";
import MobileBikeGif from "../../assets/mobile_bike.gif";

function MobileApp() {
  return (
    <>
      <div className="bg-gray-200 dark:bg-gray-800 dark:text-white duration-200 p-4">
        <div className="p-4 w-full grid grid-rows-1 md:grid-cols-2 gap-4">
          <div
            className=" flex flex-col justify-center items-center"
            data-aos="fade-up"
            data-aos-duration="500"
            data-aos-easing="ease-in-sine"
          >
            <h1 className=" text-2xl font-bold sm:text-3xl lg:text-4xl">
              Cat Cream for Android and IOS will available as soon as possible.
            </h1>
            <div className=" flex justify-center items-center mt-4">
              <img
                src={PlayStoreImg}
                alt=""
                className=" max-w-50 hover:scale-105"
              />
              <img
                src={AppStoreImg}
                alt=""
                className=" max-w-50 hover:scale-105"
              />
            </div>
          </div>
          <div
            className=" w-40 h-40 md:w-80 md:h-80 mx-auto flex justify-center items-center"
            data-aos="fade-up"
            data-aos-duration="500"
            data-aos-easing="ease-in-sine"
          >
            <img
              src={MobileBikeGif}
              alt=""
              className=" w-full rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default MobileApp;
