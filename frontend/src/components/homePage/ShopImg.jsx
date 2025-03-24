import React from "react";
import CatRoomImg from "../../assets/catsroom.jpg";

function ShopImg() {
  return (
    <>
      <div className=" m-4">
        <div className=" grid md:grid-cols-2 grid-cols-1">
          <div
            className=" flex justify-center items-center"
            data-aos="fade-right"
            data-aos-easing="ease-in-sine"
            data-aos-duration="300"
          >
            <img
              src={CatRoomImg}
              alt=""
              className=" w-80 rounded-2xl shadow-2xl"
            />
          </div>
          <div
            className=" flex flex-col justify-center"
            data-aos="fade-left"
            data-aos-easing="ease-in-sine"
            data-aos-duration="300"
          >
            <h1 className=" text-2xl font-bold mb-4">Meow Lounge</h1>
            <p>
              Step into a spotless, cozy haven where cleanliness meets
              comfort—our cat room restaurant is a peaceful retreat, carefully
              maintained for a refreshing and relaxing experience with our
              adorable feline friends
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default ShopImg;
