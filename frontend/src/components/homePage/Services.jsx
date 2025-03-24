import React from "react";
import iceCream9 from "../../assets/9.png";
import iceCream11 from "../../assets/11.png";
import iceCream10 from "../../assets/10.png";
function Services() {
  return (
    <>
      <div className=" gap-4 mt-4 pb-10">
        <div className=" flex justify-center flex-col items-center">
          <h2 className=" text-2xl font-bold">Our Service</h2>
          <p className=" w-160 text-center">
            <span className=" text-2xl text-primary">Cat Cream</span>, you can
            dine in and enjoy delicious treats, get your favorites delivered to
            your door, or relax and play with our adorable cats in a cozy café
            setting!"
          </p>{" "}
        </div>
        <div className=" grid md:grid-cols-3 grid-cols-1 mt-20 gap-4">
          <div className="flex flex-col  justify-center items-start mt-10">
            <div className=" flex flex-col  justify-end items-center hover:bg-cyan-300 rounded-4xl h-60 shadow-2xl">
              <div className=" h-50 rounded-full m-4">
                <img src={iceCream9} alt="" className=" w-60" />
              </div>
              <div className=" flex flex-col justify-end items-center p-4 rounded-2xl">
                <h2 className=" text-2xl">Dine In</h2>
                <p className=" text-md text-justify">
                  Enjoy a cozy dining experience with delicious treats while
                  surrounded by our friendly feline companions at{" "}
                  <span className=" text-lg text-primary">Cat Cream</span>.
                </p>

                <p className=" bg-amber-300 w-full text-center p-2 rounded-full hover:scale-105">
                  Order Now{" "}
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col  justify-center items-start mt-10">
            <div className=" flex flex-col  justify-end items-center hover:bg-cyan-300 rounded-4xl h-60 shadow-2xl">
              <div className=" h-50 rounded-full m-4">
                <img src={iceCream10} alt="" className=" w-60" />
              </div>
              <div className=" flex flex-col justify-end items-center p-4 rounded-2xl">
                <h2 className=" text-2xl">Delivery</h2>
                <p className=" text-md text-justify">
                  Craving our tasty treats at home? Get your favorites delivered
                  straight to your door with
                  <span className=" text-lg text-primary">Cat Cream</span>.
                </p>
                <p className=" bg-amber-300 w-full text-center p-2 rounded-full hover:scale-105">
                  Order Now{" "}
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col  justify-center items-start mt-10">
            <div className=" flex flex-col  justify-end items-center hover:bg-cyan-300 rounded-4xl h-60 shadow-2xl">
              <div className=" h-50 rounded-full m-4">
                <img src={iceCream11} alt="" className=" w-60" />
              </div>
              <div className=" flex flex-col justify-end items-center p-4 rounded-2xl">
                <h2 className=" text-2xl">Enjoy feline cuddles</h2>
                <p className=" text-md text-justify">
                  Relax, unwind, and play with our adorable resident cats while
                  sipping your favorite ice cream at
                  <span className=" text-lg text-primary">Cat Cream</span>.
                </p>
                <p className=" bg-amber-300 w-full text-center p-2 rounded-full hover:scale-105">
                  Book Table
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Services;
