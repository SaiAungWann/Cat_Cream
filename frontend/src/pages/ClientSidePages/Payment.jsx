import React, { use, useState } from "react";
import { FaCcVisa } from "react-icons/fa";
import { FaCcMastercard } from "react-icons/fa";
import { Link, useNavigate } from "react-router";

function Payment() {
  const products = [
    { id: 1, name: "Vanilla", prize: 10, size: "Small", quantity: 1 },
    { id: 2, name: "Chocolate", prize: 12, size: "Medium", quantity: 1 },
    { id: 3, name: "Strawberry", prize: 15, size: "Large", quantity: 1 },
    { id: 4, name: "Mango", prize: 20, size: "Extra Large", quantity: 1 },
  ];

  const [selectedPayment, setSelectedPayment] = useState("");

  const handleRadioClick = (value) => {
    setSelectedPayment((prev) => (prev === value ? "" : value));
  };

  const user_cards = {
    card_number: "3456",
    name_on_card: "John Doe",
    expiry_date: "12/25",
    cvv: "123",
  };

  const navigate = useNavigate();

  const [showAlert, setShowAlert] = useState(false);

  const handleAlert = () => {
    setShowAlert(true);
    setTimeout(() => setShowAlert(false), 3000); // auto-close
  };
  return (
    <>
      <div className=" gap-2 space-y-4 mx-auto w-full p-4">
        <div className=" flex flex-col justify-around bg-gray-300 rounded-md p-2">
          <div className=" grid grid-cols-5 gap-2">
            <div className=" col-span-4 flex items-center gap-2">
              <input
                type="radio"
                name="visa_card"
                id="visa_card"
                value={"visa_card"}
                onChange={() => handleRadioClick("visa_card")}
              />
              <label htmlFor="visa_card">
                Visa ending in {user_cards.card_number}
              </label>
            </div>
            <div className=" flex items-center justify-center">
              <FaCcVisa className=" text-4xl" />
            </div>
            <div className=" ml-5">
              <button type="button" className="text-gray-500 hover:text-black">
                Delete
              </button>{" "}
              |{" "}
              <button type="button" className="text-gray-500 hover:text-black">
                Edit
              </button>
            </div>
          </div>
          <div>
            {selectedPayment === "visa_card" && (
              <div className="p-4 text-white mt-2 space-y-2">
                <div className="flex gap-2">
                  <input
                    type="text"
                    placeholder="MM/YY"
                    className="w-1/2 p-2 border rounded"
                  />
                  <input
                    type="text"
                    placeholder="CVV"
                    className="w-1/2 p-2 border rounded"
                  />
                </div>
              </div>
            )}
          </div>
        </div>
        <div className=" flex flex-col justify-around bg-gray-300 rounded-md p-2">
          <div className=" grid grid-cols-5 gap-2">
            <div className=" col-span-4 flex items-center gap-2">
              <input
                type="radio"
                name="master_card"
                id="master_card"
                value={"master_card"}
                onChange={() => handleRadioClick("master_card")}
              />
              <label htmlFor="master_card">
                Visa ending in {user_cards.card_number}
              </label>
            </div>
            <div className=" flex items-center justify-center">
              <FaCcMastercard className=" text-4xl" />
            </div>
            <div className=" ml-5">
              <button type="button" className="text-gray-500 hover:text-black">
                Delete
              </button>{" "}
              |{" "}
              <button type="button" className="text-gray-500 hover:text-black">
                Edit
              </button>
            </div>
          </div>
          <div>
            {selectedPayment === "master_card" && (
              <div className="p-4 text-white mt-2 space-y-2">
                <div className="flex gap-2">
                  <input
                    type="text"
                    placeholder="MM/YY"
                    className="w-1/2 p-2 border rounded"
                  />
                  <input
                    type="text"
                    placeholder="CVV"
                    className="w-1/2 p-2 border rounded"
                  />
                </div>
              </div>
            )}
          </div>
        </div>
        <div className=" flex justify-around p-2 ">
          <hr />
          <p> or </p>
          <hr />
        </div>
        <h3>Add a new payment method</h3>
        <div className=" flex flex-col justify-around bg-gray-300 rounded-md p-2">
          <div className=" grid grid-cols-2 gap-2">
            <div className="  items-center gap-2">
              <label htmlFor="visa_card">
                Full name (as display on the card)
              </label>
              <input
                type="text"
                name="name_on_card"
                id="new_card"
                className=" w-full p-2 border rounded"
                placeholder="Your Name on Card"
              />
            </div>
            <div className="items-center gap-2">
              <label htmlFor="visa_card">Card number</label>
              <input
                type="text"
                name="new_card_number"
                id="new_card_number"
                className=" w-full p-2 border rounded"
                placeholder="XXXX-XXXX-XXXX-XXXX"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="card_expiry" className="text-sm font-medium">
                Card Expiration Date (MM/YY)
              </label>
              <input
                type="text"
                name="card_expiry"
                id="card_expiry"
                className="w-full p-2 border rounded"
                placeholder="MM/YY"
                maxLength={5}
              />
            </div>

            <div className="flex flex-col gap-1">
              <label htmlFor="card_cvv" className="text-sm font-medium">
                CVV
              </label>
              <input
                type="text"
                name="card_cvv"
                id="card_cvv"
                className="w-full p-2 border rounded"
                placeholder="***"
                maxLength={3}
              />
            </div>
          </div>
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
        <button
          type="submit"
          className=" bg-primary mt-2 text-white p-2 rounded-lg w-full hover:scale-105 text-center"
          onClick={() => {
            navigate("/");
            {
              handleAlert;
            }
          }}
        >
          Pay $ {200}
        </button>
        {showAlert && (
          <div className="mt-4 p-4 bg-green-100 border border-green-400 text-green-800 rounded shadow transition duration-300">
            ✅ Your Order was submitted successfully!
          </div>
        )}
      </div>
    </>
  );
}

export default Payment;
