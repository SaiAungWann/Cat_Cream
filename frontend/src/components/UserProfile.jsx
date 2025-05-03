import React, { useState } from "react";
import profileImg from "../assets/ice_cream_reception_2.png";

function UserProfile() {
  const user = {
    name: "John Doe",
    email: "example@email.com",
    phone: "012 345 678",
  };

  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [phone, setPhone] = useState(user.phone);
  const [isEditing, setIsEditing] = useState(false);

  const handleEditClick = () => {
    setIsEditing(!isEditing);
  };

  const userAddress = [
    {
      addressId: "1",
      addressType: "home",
      street: "No.(120) 24 St",
      city: "Latha Tsp",
      state: "Yangon",
    },
    {
      addressId: "2",
      addressType: "work",
      street: "No.(50) 35 St",
      city: " Kyatedar Tsp",
      state: "Yangon",
    },
  ];

  const userOrdersHistory = [
    {
      orderId: "123456",
      orderDate: "2023-10-01",
    },
    {
      orderId: "789123",
      orderDate: "2023-10-01",
    },
  ];
  return (
    <>
      <div className=" grid grid-cols-2 gap-4 p-4">
        {/* profile card */}
        <div className=" w-full space-y-4 bg-gray-200 dark:bg-gray-800 p-4 rounded-lg shadow-md">
          <img src={profileImg} alt="" />
          <div className=" flex justify-between items-center space-x-4">
            <div className=" flex justify-start items-center space-x-4">
              <label htmlFor="name">Name : </label>
              <p>{user.name}</p>
            </div>
            <button type="submit" className=" btn" onClick={handleEditClick}>
              <span className=" text-white">{isEditing ? "Save" : "Edit"}</span>
            </button>
          </div>
          {isEditing && (
            <input
              type="text"
              name="user-name"
              id="user-name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className=" w-full p-2 border border-gray-300 rounded-md"
              placeholder="Enter your name"
            />
          )}
          <hr />
          <div className=" flex justify-between items-center space-x-4">
            <div className="flex justify-start items-center space-x-4">
              <label htmlFor="name">Email : </label>
              <p>{user.email}</p>
            </div>
            <button type="submit" className=" btn" onClick={handleEditClick}>
              <span className=" text-white">{isEditing ? "Save" : "Edit"}</span>
            </button>
          </div>
          {isEditing && (
            <input
              type="email"
              name="user-email"
              id="user-email"
              value={email}
              onChange={(e) => setName(e.target.value)}
              className=" w-full p-2 border border-gray-300 rounded-md"
              placeholder="Enter your email"
            />
          )}
          <hr />
          <div className=" flex justify-between items-center space-x-4">
            <div className="flex justify-start items-center space-x-4">
              <label htmlFor="name">Phone : </label>
              <p>{user.phone}</p>
            </div>
            <button type="submit" className=" btn" onClick={handleEditClick}>
              <span className=" text-white">{isEditing ? "Save" : "Edit"}</span>
            </button>
          </div>
          {isEditing && (
            <input
              type="tel"
              name="user-phone"
              id="user-phone"
              value={phone}
              onChange={(e) => setName(e.target.value)}
              className=" w-full p-2 border border-gray-300 rounded-md"
              placeholder="Enter your phone number"
            />
          )}
          <hr />
          <button type="submit" className=" btn">
            <span className=" text-white">Update Profile</span>
          </button>
        </div>
        <div className=" space-y-4">
          {/* Address Card */}
          <div className=" w-full space-x-2 bg-gray-200 dark:bg-gray-800 p-4 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">🏠 Address</h2>
            {userAddress.map((address) => {
              return (
                <div className=" flex justify-between items-center space-x-4">
                  <label htmlFor="name">{address.addressType} : </label>
                  <p>
                    {address.street}, {address.city},{address.state}
                  </p>
                </div>
              );
            })}
          </div>
          {/* Order History Card */}
          <div className=" w-full space-x-2 bg-gray-200 dark:bg-gray-800 p-4 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">🏠 Orders History</h2>
            {userOrdersHistory.map((order) => {
              return (
                <div className=" flex  justify-start items-center space-x-4">
                  <label htmlFor="name">OrderId : </label>
                  <p>{order.orderId}</p>
                  <label htmlFor="name">Order Date : </label>
                  <p>{order.orderDate}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default UserProfile;
