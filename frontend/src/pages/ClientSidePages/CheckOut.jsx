import React from "react";
import iceCream9 from "../../assets/ice_cream/9.png";
import { Link } from "react-router";

function CheckOut() {
  const products = [
    { id: 1, name: "Vanilla", prize: 10, size: "Small", quantity: 1 },
    { id: 2, name: "Chocolate", prize: 12, size: "Medium", quantity: 1 },
    { id: 3, name: "Strawberry", prize: 15, size: "Large", quantity: 1 },
    { id: 4, name: "Mango", prize: 20, size: "Extra Large", quantity: 1 },
  ];

  const [selectedPayment, setSelectedPayment] = React.useState("");

  const handleRadioClick = (value) => {
    setSelectedPayment((prev) => (prev === value ? "" : value));
  };

  const user = {
    credit_card: {
      card_number: "1234 5678 9012 3456",
      name_on_card: "John Doe",
      expiry_date: "12/25",
      cvv: "123",
    },
  };
  return (
    <>
      <div className=" grid grid-cols-2 gap-2">
        <div className="justify-center items-start w-full gap-4 p-4">
          <h1 className=" text-2xl mx-auto font-bold text-center mb-4">
            Check Out Items
          </h1>
          <table className=" table items-center">
            <thead>
              <tr>
                <th>Picture</th>
                <th>Name</th>
                <th>Size</th>
                <th>Price</th>
                <th>Quantity</th>
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
                  <td>{product.size}</td>
                  <td>{product.prize}</td>

                  <td>
                    <button className="  p-2 rounded-xl hover:scale-105">
                      {product.quantity}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className=" flex justify-center items-center ">
          {/* <form action=""> */}
          <div className=" w-full mx-4 bg-gray-100 dark:bg-gray-800 dark:text-white rounded-2xl shadow-lg p-4 ">
            <div className=" w-full mt-2 flex flex-col justify-around items-center gap-4">
              <div className=" w-full p-2 rounded-xl text-white bg-gray-800/30 dark:bg-gray-500">
                <h1 className=" text-2xl text-white">Address :</h1>
                <div className=" p-2 border-b-2 border-white">
                  <label htmlFor="">Address 1:</label>
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Unde, aut?
                  </p>
                </div>
              </div>
              <div className=" w-full p-2 rounded-xl flex items-center text-white bg-gray-800/30 dark:bg-gray-500">
                <label htmlFor="" className="w-3/8 ">
                  Discount Code :
                </label>
                <input className="bg-gray-100 text-black p-1 w-full rounded-lg"></input>
              </div>
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
                  <label htmlFor="">Discount :</label>
                  <p className="text-red-500">- $ 20</p>
                </div>
                <div className=" flex justify-between p-2 border-b-2 border-white">
                  <label htmlFor="">Grand Total :</label>
                  <p>$ 200</p>
                </div>
              </div>
              <div className=" w-full p-2 rounded-xl text-white bg-gray-800/30 dark:bg-gray-500">
                <h1 className=" text-2xl text-white">Messages :</h1>
                <div className=" flex justify-between p-2 ">
                  <textarea
                    name="user-smg"
                    id=""
                    rows="5"
                    className="w-full"
                    placeholder="Write your message here..."
                  ></textarea>
                </div>
              </div>
              <Link
                className=" bg-primary mt-2 text-white p-2 rounded-lg w-full hover:scale-105 text-center"
                to="/payment"
              >
                Order
              </Link>
            </div>
          </div>
          {/* </form> */}
        </div>
      </div>
    </>
  );
}

export default CheckOut;
