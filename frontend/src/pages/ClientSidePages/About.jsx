import React, { useEffect, useState } from "react";
import receptionImg from "../../assets/ice_cream_reception_1.png";
import catPlayingImg1 from "../../assets/cats/cat_playing_1.png";
import catPlayingImg2 from "../../assets/cats/cat_playing_2.png";
import catPlayingImg3 from "../../assets/cats/cat_playing_3.png";
import catSleepImg1 from "../../assets/cats/cat_sleeping_1.png";
import catSleepImg2 from "../../assets/cats/cat_sleeping_2.png";
import catSleepImg3 from "../../assets/cats/cat_sleeping_3.png";
import catSleepImg4 from "../../assets/cats/cat_sleeping_4.png";
function About() {
  const [imageId, setImageId] = useState(catPlayingImg1);

  const catImages = [
    {
      id: 1,
      img: catPlayingImg1,
    },
    {
      id: 2,
      img: catSleepImg2,
    },
    {
      id: 3,
      img: catPlayingImg3,
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setImageId(
        imageId === catPlayingImg1
          ? catSleepImg2
          : imageId === catSleepImg2
          ? catPlayingImg3
          : catPlayingImg1
      );
    }, 3000);
    return () => clearInterval(interval);
  }, [imageId]);

  return (
    <>
      <div className="min-h-[550px] sm:min-h-[600px] bg-gray-100 flex justify-center items-center dark:bg-gray-800 dark:text-white duration-200">
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
            <div className="h-[300px] sm:h-[450px] w-[300px] sm:w-[450px] flex justify-center items-center">
              <img
                src={imageId}
                alt=""
                className="w-[250px] sm:w-[350px] sm:scale-125 transition duration-3000 ease-linear"
              />
            </div>
            <div className="flex lg:flex-col lg:top-1/2 lg:-translate-y-1/2 lg:py-2 justify-center gap-4 absolute bottom-[0px] lg:-right-0 bg-white/30 rounded-2xl m-4 lg:h-fit">
              {catImages.map((item) => (
                <img
                  src={item.img}
                  alt=""
                  className={`max-w-[80px] h-[80px] object-contain inline-block hover:scale-105 duration-200 ${
                    item.img === imageId ? " scale-120 " : ""
                  }`}
                  onClick={() =>
                    setImageId(
                      item.id === 1
                        ? catPlayingImg1
                        : item.id === 2
                        ? catSleepImg2
                        : catPlayingImg3
                    )
                  }
                  key={item.id}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
