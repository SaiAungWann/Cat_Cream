import React from "react";

import DropDown from "../../components/DropDown";
import Pagination from "../../components/Pagination";
import Product from "../../components/Product";

function ProductList() {
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
    {
      id: 4,
      name: "Name",
    },
  ];
  return (
    <>
      <div className=" grid grid-cols-5">
        <div className="  p-4 shadow-2xl ">
          Filter By
          <div className=" max-w-[120px] mx-auto ">
            <p>Food And Drink</p>
            <div className=" filterBy">
              <label htmlFor="">Coffee</label>
              <input type="checkbox" name="coffee" id="" />
            </div>
            <div className=" filterBy">
              <label htmlFor="">Tea</label>
              <input type="checkbox" name="Tea" id="" />
            </div>
            <div className=" filterBy">
              <label htmlFor="">Milkshakes</label>
              <input type="checkbox" name="milkshakes" id="" />
            </div>
            <div className=" filterBy">
              <label htmlFor="">Smoothies</label>
              <input type="checkbox" name="smoothies" id="" />
            </div>
            <div className=" filterBy">
              <label htmlFor="">Ice Cream</label>
              <input type="checkbox" name="ice-cream" id="" />
            </div>
            <div className=" filterBy">
              <label htmlFor="">Cakes</label>
              <input type="checkbox" name="cakes" id="" />
            </div>
            <div className=" filterBy">
              <label htmlFor="">Snacks</label>
              <input type="checkbox" name="snacks" id="" />
            </div>
          </div>
        </div>
        <div className=" col-span-4 flex flex-col justify-center items-center p-2">
          <div className=" w-full shadow-2xl">
            <form action="">
              <div className=" w-full m-4 flex gap-4 justify-around items-center">
                <div className=" w-full flex items-center justify-end">
                  <label htmlFor="search" className=" inline-block">
                    Search :
                  </label>
                  <input
                    type="text"
                    name="search"
                    className=" p-1 border-2 border-white rounded-xl ml-2"
                    placeholder="Search here"
                  />
                </div>

                <div className=" min-w-[200px] pr-8">
                  <DropDown page={"productList"} />
                </div>
              </div>
            </form>
          </div>

          <Product products={products} />

          <Pagination />
        </div>
      </div>
    </>
  );
}

export default ProductList;
