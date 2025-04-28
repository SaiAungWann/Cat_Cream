import React from "react";
import iceCream9 from "../../assets/ice_cream/9.png";
import { useNavigate } from "react-router";
import { FaHeartCirclePlus } from "react-icons/fa6";

function Cart() {
  const navigate = useNavigate();
  const products = [
    { id: 1, name: "Vanilla", prize: 10, size: "Small", quantity: 1 },
    { id: 2, name: "Chocolate", prize: 12, size: "Medium", quantity: 1 },
    { id: 3, name: "Strawberry", prize: 15, size: "Large", quantity: 1 },
    { id: 4, name: "Mango", prize: 20, size: "Extra Large", quantity: 1 },
  ];
  return (
    <>
      <div>
        <div className=" grid grid-cols-2">
          <div className=" flex flex-col justify-center w-full gap-4 p-4">
            <h1 className=" text-2xl mx-auto font-bold">My Cart Items</h1>
            <table className=" table items-center">
              <thead>
                <tr>
                  <th>Picture</th>
                  <th>Name</th>
                  <th>Size</th>
                  <th>Price</th>
                  <th></th>
                  <th>Quantity</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {products.map((product) => (
                  <tr key={product.id}>
                    <td onClick={() => navigate("/productDetail")}>
                      <img
                        src={iceCream9}
                        alt={product.name}
                        className=" w-25 mx-auto"
                      />
                    </td>
                    <td>{product.name}</td>
                    <td>
                      <p className=" bg-gray-300 rounded-lg p-1">
                        {product.size}
                      </p>
                    </td>
                    <td>{product.prize}</td>
                    <td className="">
                      <button
                        className=" bg-gray-400 p-2 rounded-xl text-white hover:scale-105 w-10 mr-4"
                        onClick={() => {
                          product.quantity + 1;
                        }}
                      >
                        +
                      </button>
                      <button
                        className=" bg-gray-400 p-2 rounded-xl text-white hover:scale-105 w-10"
                        onClick={() => {
                          product.Quantity - 1;
                        }}
                      >
                        -
                      </button>
                    </td>
                    <td>
                      <button className="  p-2 rounded-xl hover:scale-105">
                        {product.quantity}
                      </button>
                    </td>

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
                  <td></td>
                  <td>$100</td>
                  <td></td>
                  <td>4</td>

                  <td>
                    <button className=" bg-danger text-white p-2 rounded-xl hover:scale-105">
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
                  onClick={() => navigate("/checkOut")}
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
