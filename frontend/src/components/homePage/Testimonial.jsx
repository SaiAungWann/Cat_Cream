import React, { use } from "react";
import Slider from "react-slick";

function Testimonial() {
  let userImg1 = "https://picsum.photos/id/237/200/200";
  let userImg2 = "https://picsum.photos/id/238/200/200";
  let userImg3 = "https://picsum.photos/id/239/200/200";

  let TestimonialData = [
    {
      id: 1,
      userImg: userImg1,
      userComment:
        "Such a cozy and clean café! The atmosphere is so relaxing, and the",
      userName: "John Doe",
    },
    {
      id: 2,
      userImg: userImg2,
      userComment:
        "The food is amazing! I would definitely recommend this place to my friends.",
      userName: "Jane Doe",
    },
    {
      id: 3,
      userImg: userImg3,
      userComment:
        "The service is excellent! The staff is friendly and attentive. I will definitely come back!",
      userName: "James Doe",
    },
  ];
  let settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
  };
  return (
    <>
      <div className=" dark:text-white duration-200 p-4 mt-4 space-y-4">
        <div className=" flex justify-center items-center flex-col gap-2">
          <p className=" text-md md:text-lg text-blue-500 dark:text-yellow-500">
            What our lovely customers say.....
          </p>
          <h1 className=" text-2xl md:text-3xl ">Testimonial</h1>
          <p className="text-md md:text-lg">
            Heartwarming Testimonials from Our Happy Customers!
          </p>
        </div>

        <Slider {...settings}>
          {TestimonialData.map((data) => {
            return (
              <div className="" key={data.id}>
                <div className=" max-w-150 mx-auto bg-gray-200 dark:bg-gray-800 p-4 rounded-lg shadow-lg flex justify-center items-center flex-col relative gap-4">
                  <img
                    src={data.userImg}
                    alt=""
                    className=" w-20 rounded-full border-2 border-black-[4px] mx-auto"
                  />
                  <p className=" text-gray-500 dark:text-white">
                    {data.userComment}
                  </p>
                  <h1 className=" text-2xl md:text-3xl font-bold">
                    {data.userName}
                  </h1>
                  <p className=" text-gray-600 text-9xl font-serif absolute top-0 right-0">
                    ,,
                  </p>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </>
  );
}

export default Testimonial;
