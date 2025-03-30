import React from "react";
import iceCream9 from "../assets/ice_cream/9.png";
import { FaHeartCirclePlus } from "react-icons/fa6";
import { Link } from "react-router";
function Product({ products }) {
  return (
    <>
      <Link to={"/productDetail"} className="w-full grid grid-cols-3 gap-4">
        {products.map((product) => {
          return (
            <div
              key={product.id}
              className="flex flex-col  justify-between items-center mt-4"
              data-aos="fade-up"
              data-aos-duration="500"
              data-aos-easing="ease-in-sine"
            >
              <div className=" flex flex-col  justify-start items-center hover:bg-secondary rounded-4xl min-h-[50px] shadow-2xl max-w-[400px] min-w-[300px]">
                <div className=" flex w-full flex-col justify-start items-center p-4 rounded-2xl space-y-4">
                  <img src={iceCream9} alt="" className=" w-60" />
                  <div className=" w-full flex justify-start items-center gap-4">
                    <div>
                      <p className=" w-full ">Name</p>
                      <p className=" w-full "> Size</p>
                      <p className=" w-full "> Prize</p>
                      <p className=" w-full "> Rating</p>
                    </div>
                    <div>
                      <p className=" w-full ">: {product.name}</p>
                      <p className=" w-full ">: S, M, L, XL</p>
                      <p className=" w-full ">: $10 - $20</p>
                      <p className=" w-full ">: 8/10</p>
                    </div>
                  </div>
                  <div className=" flex w-full items-center gap-2">
                    <button
                      type="submit"
                      className=" w-1/3 bg-primary text-white p-2 rounded-lg hover:scale-105"
                    >
                      <FaHeartCirclePlus className="mx-auto text-2xl" />
                    </button>
                    <button
                      type="submit"
                      className=" w-full bg-primary text-white p-2 rounded-lg hover:scale-105"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </Link>
    </>
  );
}

export default Product;
