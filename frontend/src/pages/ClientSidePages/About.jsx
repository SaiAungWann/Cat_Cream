import React, { useEffect, useState } from "react";
import receptionImg from "../../assets/ice_cream_reception_1.png";
import catPlayingImg1 from "../../assets/cats/cat_playing_1.png";
import catPlayingImg2 from "../../assets/cats/cat_playing_2.png";
import catPlayingImg3 from "../../assets/cats/cat_playing_3.png";
import catSleepImg1 from "../../assets/cats/cat_sleeping_1.png";
import catSleepImg2 from "../../assets/cats/cat_sleeping_2.png";
import catSleepImg3 from "../../assets/cats/cat_sleeping_3.png";
import catSleepImg4 from "../../assets/cats/cat_sleeping_4.png";
import ImageGal from "../../components/ImageGal";
import BGImg from "../../assets/BG.png";
function About() {
  const images = [
    {
      original: catPlayingImg1,
      thumbnail: catPlayingImg1,
    },
    {
      original: catPlayingImg2,
      thumbnail: catPlayingImg2,
    },
    {
      original: catPlayingImg3,
      thumbnail: catPlayingImg3,
    },
    {
      original: catSleepImg1,
      thumbnail: catSleepImg1,
    },
    {
      original: catSleepImg2,
      thumbnail: catSleepImg2,
    },
    {
      original: catSleepImg3,
      thumbnail: catSleepImg3,
    },
    {
      original: catSleepImg4,
      thumbnail: catSleepImg4,
    },
  ];

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
        className="min-h-[550px] sm:min-h-[600px] bg-gray-100 flex justify-center items-center dark:bg-gray-800 dark:text-white duration-200"
        style={BGImage}
      >
        <div className=" grid grid-cols-2 gap-4">
          <div
            className=" flex flex-col justify-center items-start space-y-4  lg:max-w-[850px] lg:ml-20"
            data-aos="zoom-out"
            data-aos-duration="800"
            data-aos-once="true"
          >
            <h1 className="text-3xl font-bold">
              We are known as{" "}
              <span className=" text-4xl text-primary">Cat Cream</span>
              {" - "}
              <span className=" text-primary">Ice Cream Premium</span>
            </h1>
            <p className=" text-lg text-justify">
              The purr-fect place to sip rich coffee, savor delicious ice cream,
              and enjoy the company of our friendly, playful cats in a cozy and
              relaxing space.
            </p>
            <img src={receptionImg} alt="" className=" w-[450px] mx-auto" />
          </div>
          <div
            className="min-h-[450px] sm:min-h-[450px] lg:max-w-[650px] flex justify-around items-center relative order-1 sm:order-2
                    "
            data-aos="zoom-out"
            data-aos-duration="800"
            data-aos-once="true"
          >
            <ImageGal images={images} page={"about"} />
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
