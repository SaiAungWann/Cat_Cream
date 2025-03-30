import React from "react";
import iceCream9 from "../../assets/ice_cream/9.png";
import { useNavigate } from "react-router";
import { FaHeartCirclePlus } from "react-icons/fa6";

function Cart() {
  const navigate = useNavigate();
  const products = [
    { id: 1, name: "Vanilla" },
    { id: 2, name: "Chocolate" },
    { id: 3, name: "Strawberry" },
    { id: 4, name: "Mango" },
  ];
  return (
    <>
      <div>
        <div className=" grid grid-cols-2">
          <div className=" flex flex-col justify-center w-full gap-4 p-4">
            <h1 className=" text-2xl mx-auto font-bold">My Wishlist</h1>
            <table className=" table items-center">
              <thead>
                <tr>
                  <th>Picture</th>
                  <th>Name</th>
                  <th>Price</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {products.map((product) => (
                  <tr
                    key={product.id}
                    onClick={() => navigate("/productDetail")}
                  >
                    <td>
                      <img
                        src={iceCream9}
                        alt={product.name}
                        className=" w-25 mx-auto"
                      />
                    </td>
                    <td>{product.name}</td>
                    <td>$10-$20</td>

                    <td>
                      <button className=" bg-danger p-2 rounded-xl text-white hover:scale-105">
                        Remove
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr className=" h-15">
                  <td colSpan={2}>Total</td>
                  <td>$100</td>

                  <td>
                    <button className=" bg-danger p-2 rounded-xl hover:scale-105">
                      Remove All
                    </button>
                  </td>
                </tr>
              </tfoot>
            </table>
          </div>
          <div className=" flex justify-center items-center ">
            <div className=" w-[450px] h-[450px]  bg-gray-100 dark:bg-gray-800 dark:text-white rounded-2xl shadow-lg p-4 ">
              <div className=" w-full mt-2 flex flex-col justify-around items-center gap-4">
                <div className=" w-full p-2 rounded-xl text-white bg-gray-800/30 dark:bg-gray-500">
                  <h1 className=" text-2xl text-white">Summary</h1>
                  <div className=" flex justify-between p-2 border-b-2 border-white">
                    <label htmlFor="">Subtotal :</label>
                    <p>$ 200</p>
                  </div>
                  <div className=" flex justify-between p-2 border-b-2 border-white">
                    <label htmlFor="">Delivery :</label>
                    <p>$ 20</p>
                  </div>
                  <div className=" flex justify-between p-2 border-b-2 border-white">
                    <label htmlFor="">Grand Total :</label>
                    <p>$ 220</p>
                  </div>
                </div>
                <button
                  type="submit"
                  className=" bg-primary mt-2 text-white p-2 rounded-lg w-full hover:scale-105"
                >
                  Check Out (4)
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cart;
