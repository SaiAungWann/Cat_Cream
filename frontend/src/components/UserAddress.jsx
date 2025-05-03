import React from "react";

function UserAddress() {
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

  return (
    <>
      <div className=" w-full space-x-2 bg-gray-200 dark:bg-gray-800 p-4 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4">🏠 Address</h2>
        {userAddress.map((address) => {
          return (
            <div className=" flex justify-start items-center space-x-4">
              <label htmlFor="name">{address.addressType} : </label>
              <p>
                {address.street}, {address.city},{address.state}
              </p>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default UserAddress;
