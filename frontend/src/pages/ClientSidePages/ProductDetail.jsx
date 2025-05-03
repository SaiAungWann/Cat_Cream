import React from "react";
import iceCream10 from "../../assets/ice_cream/10.png";
import iceCream11 from "../../assets/cats/11.png";
import iceCream9 from "../../assets/ice_cream/9.png";
import iceCream5 from "../../assets/ice_cream/5.png";
import iceCream8 from "../../assets/ice_cream/8.png";
import { FaHeartCirclePlus } from "react-icons/fa6";
import ImageGal from "../../components/ImageGal";
import DropDown from "../../components/DropDown";
import Product from "../../components/Product";
function ProductDetail() {
  const images = [
    {
      original: iceCream5,
      thumbnail: iceCream5,
    },
    {
      original: iceCream8,
      thumbnail: iceCream8,
    },
    {
      original: iceCream9,
      thumbnail: iceCream9,
    },
  ];

  const products = [
    {
      id: 1,
      name: "Name",
    },
    {
      id: 2,
      name: "Name",
    },
    {
      id: 3,
      name: "Name",
    },
  ];
  return (
    <>
      <div className=" w-full flex flex-col justify-center items-center">
        <div className=" grid grid-cols-2 gap-4 min-h-[450px]">
          <ImageGal images={images} page={"order"} />
          <div className=" flex justify-center items-center ">
            <div className=" w-[450px] h-[450px]  bg-gray-100 dark:bg-gray-800 dark:text-white rounded-2xl shadow-2xl p-4 ">
              <div className=" w-full flex justify-center items-center">
                <label htmlFor="name" className=" w-1/3 flex justify-between">
                  {" "}
                  Name <p className=" mr-2">:</p>
                </label>
                <p className=" w-full p-2 border-2 border-gray-200 rounded-lg">
                  Stawberry
                </p>
              </div>
              <div className=" w-full flex justify-center items-center mt-2 hover:cursor-grabbing">
                <label htmlFor="size" className=" w-1/3 flex justify-between">
                  {" "}
                  Size <p className=" mr-2">:</p>
                </label>
                <DropDown page={"order"} />
              </div>
              <div className=" w-full flex justify-center items-center mt-2">
                <label htmlFor="size" className=" w-1/3 flex justify-between">
                  {" "}
                  Prise <p className=" mr-2">:</p>
                </label>
                <p className=" w-full p-2 border-2 border-gray-200 rounded-lg">
                  $ 100
                </p>
              </div>
              <div className=" w-full flex justify-center items-center mt-2">
                <label htmlFor="size" className=" w-1/3 flex justify-between">
                  {" "}
                  Rating <p className=" mr-2">:</p>
                </label>
                <p className=" w-full p-2 border-2 border-gray-200 rounded-lg">
                  8/10
                </p>
              </div>
              <div className=" w-full flex justify-center items-center mt-2">
                <label htmlFor="phone" className=" w-1/3 flex justify-between">
                  {" "}
                  Ingredients <p className=" mr-2">:</p>
                </label>
                <ul className=" w-full h-fit p-2 pl-8 border-2 border-gray-200 rounded-lg list-disc">
                  <li>heavy cream</li>
                  <li>milk</li>
                  <li>sugar</li>
                  <li>fresh strawberries</li>
                  <li>lemon juice</li>
                  <li>vanilla extract</li>
                </ul>
              </div>

              <div className=" w-full mt-2 flex justify-around items-center gap-4">
                <button
                  type="submit"
                  className=" bg-primary w-1/6 mt-2 text-white p-2 rounded-lg hover:scale-105"
                >
                  <FaHeartCirclePlus className=" mx-auto text-center text-2xl" />
                </button>

                <button
                  type="submit"
                  className=" bg-primary mt-2 text-white p-2 rounded-lg w-full hover:scale-105"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className=" gap-4 mt-4 pb-10 scroll-hidden">
          <div className=" flex justify-center flex-col items-center">
            <h2 className=" text-2xl font-bold">Relative Product</h2>
            <p className=" w-160 text-center mb-4">
              <span className=" text-2xl text-primary">Cat Cream's</span>{" "}
              customer also looking for these products
            </p>{" "}
          </div>
          <Product products={products} />
        </div>
      </div>
    </>
  );
}

export default ProductDetail;
