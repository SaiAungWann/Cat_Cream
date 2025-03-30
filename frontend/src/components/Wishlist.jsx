import React from "react";
import iceCream9 from "../assets/ice_cream/9.png";
import { useNavigate } from "react-router";

function Wishlist() {
  const navigate = useNavigate();
  const products = [
    { id: 1, name: "Vanilla" },
    { id: 2, name: "Chocolate" },
    { id: 3, name: "Strawberry" },
    { id: 4, name: "Mango" },
  ];

  return (
    <div className=" flex flex-col justify-center w-full gap-4 p-4">
      <h1 className=" text-2xl mx-auto font-bold">My Wishlist</h1>
      <table className=" table items-center">
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Price</th>
            <th colSpan={2}>Action</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id} onClick={() => navigate("/productDetail")}>
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
                <button className=" bg-secondary p-2 rounded-xl hover:scale-105">
                  Add to Cart
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
            <td>$100</td>
            <td>
              <button className=" bg-secondary p-2 rounded-xl hover:scale-105">
                Add to Cart All
              </button>
            </td>
            <td>
              <button className=" bg-danger p-2 rounded-xl hover:scale-105">
                Remove All
              </button>
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}

export default Wishlist;
